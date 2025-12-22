import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const faqResponses: Record<string, string> = {
  "when": "Hackathon 2025 takes place from February 1-3, 2025. It's a 48-hour virtual event!",
  "date": "Hackathon 2025 takes place from February 1-3, 2025. It's a 48-hour virtual event!",
  "where": "This is a fully virtual event! You can participate from anywhere in the world.",
  "virtual": "This is a fully virtual event! You can participate from anywhere in the world.",
  "location": "This is a fully virtual event! You can participate from anywhere in the world.",
  "register": "You can register by scrolling down to the registration section or clicking the 'Register Now' button in the navigation. Registration is free!",
  "sign up": "You can register by scrolling down to the registration section or clicking the 'Register Now' button in the navigation. Registration is free!",
  "cost": "Hackathon 2025 is completely FREE to participate in!",
  "free": "Yes! Hackathon 2025 is completely FREE to participate in!",
  "price": "Hackathon 2025 is completely FREE to participate in!",
  "prize": "We have over $50,000 in prizes across all tracks! Prizes include cash, swag, and opportunities with our sponsor companies.",
  "prizes": "We have over $50,000 in prizes across all tracks! Prizes include cash, swag, and opportunities with our sponsor companies.",
  "team": "Teams can have 1-4 members. If you don't have a team, select 'Looking for a team' when registering and we'll help you find teammates!",
  "tracks": "We have 4 tracks: AI/ML, Web3/Blockchain, Hardware/IoT, and General Coding. You can choose your track during registration.",
  "ai": "The AI/ML track focuses on building intelligent applications using machine learning, deep learning, and artificial intelligence technologies.",
  "web3": "The Web3/Blockchain track is for building decentralized applications, smart contracts, and exploring blockchain technologies.",
  "hardware": "The Hardware/IoT track is for projects involving embedded systems, sensors, and connecting the physical world to software.",
  "rules": "Key rules: Projects must be started during the hackathon, teams of 1-4 people, submissions due by Feb 3rd at 9 AM. Full rules will be shared at kickoff!",
  "help": "I can answer questions about dates, registration, prizes, teams, tracks, and general hackathon info. What would you like to know?",
  "hello": "Hello! 👋 I'm the Hackathon 2025 FAQ assistant. How can I help you today?",
  "hi": "Hi there! 👋 I'm here to answer your questions about Hackathon 2025. What would you like to know?",
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, response] of Object.entries(faqResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  
  return "I'm not sure about that. Try asking about: dates, registration, prizes, teams, tracks, or rules. You can also scroll through the website for more information!";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm the Hackathon 2025 FAQ assistant. Ask me anything about the event - dates, registration, prizes, tracks, and more!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const response = getResponse(input);
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse-glow ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] glass rounded-2xl shadow-2xl flex flex-col animate-fade-in-up overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Hackathon Assistant</h3>
                <p className="text-xs opacity-80">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about dates, prizes, teams..."
                className="flex-1 bg-background/50"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              FAQ chatbot - Enable Cloud for AI-powered responses
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
