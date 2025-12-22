import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const faqResponses: Record<string, string> = {
  "when": "Quasar x AI 2026 is a 24-hour hackathon from January 24th (10 AM) to January 25th (10 AM), 2026!",
  "date": "The hackathon runs from January 24th 10 AM to January 25th 10 AM, 2026. Registration is Jan 5-10, Round 1 is Jan 15-18!",
  "where": "Quasar x AI 2026 is an in-person event. Location details will be shared after registration!",
  "location": "Location details will be shared with registered participants. Stay tuned!",
  "register": "Registration opens January 5th and closes January 10th, 2026. Click the 'Register Now' button to sign up!",
  "sign up": "Registration is open from January 5-10, 2026. Scroll to the registration section or click 'Register Now'!",
  "cost": "Quasar x AI 2026 is completely FREE to participate in!",
  "free": "Yes! Quasar x AI 2026 is completely FREE to participate in!",
  "price": "Quasar x AI 2026 is completely FREE to participate in!",
  "prize": "We have a total prize pool of ₹15,000! Prizes will be awarded to top teams after the judging session.",
  "prizes": "Total prize pool is ₹15,000! Winners will be announced at the awards ceremony on January 25th, 4-5 PM.",
  "team": "Teams can have 1-4 members. Around 100 students are expected to participate!",
  "theme": "The theme is AI! Build innovative AI-powered solutions during the 24-hour hackathon.",
  "ai": "The theme is Artificial Intelligence! Create innovative AI solutions, ML models, or AI-powered applications.",
  "schedule": "Registration: Jan 5-10 | Round 1: Jan 15-18 | Hackathon: Jan 24 (10AM) - Jan 25 (10AM) | Judging: 11AM-3PM | Awards: 4-5PM",
  "round": "Round 1 (screening) is from January 15-18. Selected teams proceed to the main hackathon on January 24-25!",
  "judging": "Judging takes place on January 25th from 11 AM to 3 PM, followed by lunch. Awards ceremony is 4-5 PM!",
  "rules": "Key rules: Projects must be AI-themed, teams of 1-4 people, 24-hour build time. Full rules shared at kickoff!",
  "help": "I can answer questions about dates, registration, prizes, teams, theme, schedule, and more. What would you like to know?",
  "hello": "Hello! 👋 I'm the Quasar x AI 2026 assistant. #LetsDiveIn - How can I help you today?",
  "hi": "Hi there! 👋 Welcome to Quasar x AI 2026! #LetsDiveIn - What would you like to know?",
  "tagline": "Our tagline is #LetsDiveIn! Join us for an exciting 24-hour AI hackathon!",
  "letsdivein": "#LetsDiveIn is our tagline! It represents diving deep into AI innovation together!",
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, response] of Object.entries(faqResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  
  return "I'm not sure about that. Try asking about: dates, registration, prizes, teams, theme, schedule, or rules. You can also scroll through the website for more info!";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm the Quasar x AI 2026 assistant. #LetsDiveIn - Ask me about dates, registration, prizes, theme, and more!",
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
                <h3 className="font-semibold">Quasar x AI Assistant</h3>
                <p className="text-xs opacity-80">#LetsDiveIn</p>
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
