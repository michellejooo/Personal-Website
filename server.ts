import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const getDistPath = () => {
  if (typeof __dirname !== 'undefined') {
    return path.basename(__dirname) === 'dist' ? __dirname : path.resolve(__dirname, 'dist');
  }
  return path.resolve(process.cwd(), 'dist');
};

async function startServer() {
  const app = express();

  // In AI Studio dev sandbox, nginx reverse proxy listens on 8080 and forwards to 3000.
  // In deployed Cloud Run, Cloud Run sets PORT (usually 8080) and expects the app to listen on that port.
  const isDev = Boolean(process.env.CONTROL_PLANE_PORT) || process.env.NODE_ENV === 'development';
  const PORT = isDev ? 3000 : (Number(process.env.PORT) || 3000);

  app.use(express.json());

  // Health check endpoints for Cloud Run & load balancers
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', environment: isDev ? 'development' : 'production' });
  });

  app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
  });

  // API Routes
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.json({
          response: `Joanna is an Information Technology student at Telkom University specializing in Web Development (React, Next.js, Node.js, Express), Data Analytics (Python, SQL, Power BI), System Analysis (UML, BPMN, ERD), and AI. She has built featured applications including Travelyuk (Travel Booking Platform) and Echo (Music Streaming App). You can contact her at joannatambunan496@gmail.com!`,
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are an AI career assistant representing Joanna, an Information Technology student at Telkom University. 
      Joanna's skills include:
      - Web Development: HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, REST API, Tailwind CSS
      - Data Analytics: Python, Pandas, NumPy, SQL, Power BI, Tableau, Excel
      - System Analysis: UML, Use Case Diagram, Activity Diagram, BPMN, ERD, Requirement Analysis
      - AI: Prompt Engineering, OpenAI API, AI Workflow, ML Fundamentals, NLP Basic
      - Database & Tools: MySQL, PostgreSQL, MongoDB, Git, GitHub, VS Code, Figma, Postman
      - Languages: Indonesian (Native), English (Fluent)
      - Featured Projects: Personal Portfolio Website, Travelyuk (Travel Booking), Echo (Music Streaming)
      
      Respond professionally, warmly, and concisely (2-4 sentences) on behalf of Joanna to recruiters, hiring managers, or visitors.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ response: response.text });
    } catch (error) {
      console.error('Error generating AI response:', error);
      res.json({
        response: `Joanna is an Information Technology student specializing in Web Development, Data Analytics, System Analysis, and AI. Reach out at joannatambunan496@gmail.com for internship opportunities!`,
      });
    }
  });

  // In development, attach Vite middleware; in production, serve pre-built dist assets
  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = getDistPath();
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT} (${isDev ? 'dev' : 'prod'})`);
  });

  // Graceful shutdown for container lifecycles (Cloud Run SIGTERM)
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
      process.exit(0);
    });
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
  process.exit(1);
});
