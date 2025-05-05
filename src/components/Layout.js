import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setShowChat((prev) => !prev);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try { 
      const response = await fetch("web-production-e5ae.up.railway.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.reply };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">Portfolio</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            {["Home"].map((page) => (
              <li className="nav-item" key={page}>
                <Link href={`/${page.toLowerCase()}`} legacyBehavior>
                  <a className="nav-link">{page}</a>
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Chat Button */}
      <button className="chat-toggle-btn" onClick={toggleChat}>💬</button>

      {/* Chat Popup */}
      {showChat && (
        <div className="chat-container">
          <div className="chat-header" onClick={toggleChat}>Chatbot (Click to Minimize)</div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <b>{msg.sender === "user" ? "You:" : "Bot:"}</b> {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>Contact me: <a href="mailto:proactive1.san@gmail.com" className="text-white ms-2">proactive1.san@gmail.com</a></p>
        <p>
          Follow me on: 
          <a href="https://www.linkedin.com/in/sajjad-ali-noor-633b9432b/" target="_blank" className="text-white ms-2">LinkedIn</a> | 
          <a href="https://github.com/Sajjad5037" target="_blank" className="text-white ms-2">GitHub</a> | 
          <a href="https://www.upwork.com/freelancers/sajjada71" target="_blank" className="text-white ms-2">Upwork</a>
        </p>
      </footer>

      {/* Chatbot Styling */}
      <style jsx>{`
        .chat-toggle-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #007bff;
          color: white;
          border: none;
          padding: 12px;
          font-size: 18px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        }
        .chat-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 300px;
          background: white;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }
        .chat-header {
          background: #007bff;
          color: white;
          padding: 10px;
          text-align: center;
          cursor: pointer;
        }
        .chat-body {
          height: 300px;
          padding: 10px;
          overflow-y: auto;
        }
        .chat-footer {
          display: flex;
          border-top: 1px solid #ccc;
        }
        input {
          flex: 1;
          padding: 10px;
          border: none;
          outline: none;
        }
        button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        .chat-message {
          margin-bottom: 10px;
          padding: 5px;
          border-radius: 5px;
        }
        .user {
          text-align: right;
          background: #e0f2ff;
        }
        .bot {
          text-align: left;
          background: #f8f9fa;
        }
      `}</style>
    </div>
  );
}