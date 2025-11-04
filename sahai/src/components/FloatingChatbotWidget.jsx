import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function FloatingChatbotWidget() {
  const { theme } = useTheme(); // Access current theme
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! I'm SahAI, your Government Assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: "I'm here to help! You can ask me about government schemes, benefits, and application procedures. How can I assist you?",
          sender: "bot",
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 500);

      setInput("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
          borderRadius: "9999px",
          padding: "1rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "all 0.2s",
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 40,
        }}
      >
        {isOpen ? <X style={{ width: "1.5rem", height: "1.5rem" }} /> : <MessageCircle style={{ width: "1.5rem", height: "1.5rem" }} />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "1.5rem",
            width: "24rem",
            maxWidth: "calc(100vw - 2rem)",
            height: "24rem",
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            zIndex: 40,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-foreground)/0.8 100%)`,
              color: "var(--primary-foreground)",
              padding: "1rem",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem" }}>SahAI Assistant</h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Ask me anything about government benefits
            </p>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{ display: "flex", justifyContent: message.sender === "user" ? "flex-end" : "flex-start" }}
              >
                <div
                  style={{
                    maxWidth: "16rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    borderBottomRightRadius: message.sender === "user" ? "0" : "0.5rem",
                    borderBottomLeftRadius: message.sender === "user" ? "0.5rem" : "0",
                    backgroundColor: message.sender === "user" ? "var(--primary)" : "var(--muted)",
                    color: message.sender === "user" ? "var(--primary-foreground)" : "var(--foreground)",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", margin: 0 }}>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ borderTop: "1px solid var(--border)", padding: "1rem", display: "flex", gap: "0.5rem" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => { if (e.key === "Enter") handleSend(); }}
              placeholder="Type your question..."
              style={{
                flex: 1,
                backgroundColor: "var(--input)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                fontSize: "0.875rem",
                outline: "none",
                boxShadow: "inset 0 0 0 1px var(--border)",
              }}
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                transition: "background 0.2s",
              }}
            >
              <Send style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
