
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are the TechSoft AI Assistant. 
TechSoft is a premier technology and software brand specializing in:
- Custom Software Development
- Cloud Infrastructure & Scalability
- Cybersecurity Solutions
- Data Analytics & AI Integration
- Mobile & Web Application Development

Our mission is to provide innovative, reliable, and scalable digital solutions for startups and enterprises.
Our values: Reliability, Innovation, and Excellence.

Your goal is to answer visitor questions about TechSoft professionally, provide technical insights related to our services, and encourage them to contact us for a consultation.
Be helpful, concise, and professional. If you don't know a specific company detail, offer to connect them with a human specialist via the contact form.`;

export async function sendMessageToGemini(history: ChatMessage[], message: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Transform our history format to Gemini's format
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  // Add the new message
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is temporarily unavailable. Please try again later or contact our team directly.";
  }
}
