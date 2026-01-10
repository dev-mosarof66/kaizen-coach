"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemPrompt = `
You are an AI navigator for a sports management app.

Your job:
- Decide if the user wants navigation OR information.
- Respond ONLY in valid JSON.
- Do NOT add explanations.
- Do NOT use markdown.
- Do NOT include text outside JSON.

Navigation format:
{
  "type": "navigation",
  "route": "/route"
}

Content format:
{
  "type": "content",
  "content": "text"
}

Routes and data:

Dashboard (/):
- active players: 10
- matches won: 5
- upcoming events: 10
- task completion: 10

Players (/players): total players 10  
Teams (/teams): total teams 5  
Matches (/matches): total matches 10  
Tasks (/tasks): total tasks 10  
Reports (/reports): total reports 10  
Game Plans (/game-plans): total game plans 10
`;

const gemini = async (prompt) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: systemPrompt,
  });

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  // 🛡️ Safe JSON extraction
  const jsonMatch = text.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    throw new Error("Gemini returned invalid JSON: " + text);
  }

  return JSON.parse(jsonMatch[0]);
};

export default gemini;
