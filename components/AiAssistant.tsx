import React, { useState } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Hi! I am the AI bot. Ask me about TechSoft." }
  ]);
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!text.trim()) return;
    const userMsg = text.trim();
    setText('');
    setHistory(h => [...h, { role: ChatRole.USER, text: userMsg }]);
    setLoading(true);
    
    try {
      const result = await sendMessageToGemini(history, userMsg);
      setHistory(h => [...h, { role: ChatRole.MODEL, text: result }]);
    } catch (e) {
      setHistory(h => [...h, { role: ChatRole.MODEL, text: "Error. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}>
      {isOpen ? (
        <div style={{ width: '300px', height: '400px', backgroundColor: 'white', border: '2px solid #333', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: '#333', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Chat Helper</span>
            <button onClick={() => setIsOpen(false)} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>X</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px', fontSize: '13px' }}>
            {history.map((m, i) => (
              <div key={i} style={{ marginBottom: '8px', textAlign: m.role === ChatRole.USER ? 'right' : 'left' }}>
                <div style={{ display: 'inline-block', padding: '5px', backgroundColor: m.role === ChatRole.USER ? '#eee' : '#fff', border: '1px solid #ccc' }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div style={{ fontSize: '10px' }}>Loading...</div>}
          </div>
          <div style={{ padding: '10px', borderTop: '1px solid #ccc', display: 'flex' }}>
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleChat()}
              style={{ flex: 1, padding: '5px' }} 
              placeholder="Ask here..."
            />
            <button onClick={handleChat} style={{ marginLeft: '5px' }}>Send</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)} 
          style={{ padding: '10px 15px', background: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Chat with AI
        </button>
      )}
    </div>
  );
};

export default AiAssistant;