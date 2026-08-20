import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

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
      - Languages: Indonesian (Native), English (Fluent), Mandarin (Fluent)
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

  // Vite Middleware in Development / Static Files in Production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
