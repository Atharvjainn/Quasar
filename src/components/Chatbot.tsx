import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const faqResponses: Record<string, string> = {
  "when": "Quasar x AI 2026 has two rounds! Round 1 (PPT submission) is Jan 15-18, 2026. Round 2 (final) is a 24-hour hackathon on Jan 30-31, 2026 at IIIT Ranchi Campus.",
  "date": "Round 1 PPT submission: Jan 15-18, 2026. Round 2 final: Jan 30-31, 2026 at IIIT Ranchi Campus. Registration: until Jan 10, 2026.",
  "where": "The final round takes place at IIIT Ranchi Campus on January 30-31, 2026. Round 1 is PPT submission online.",
  "venue": "The final hackathon (Round 2) will be held at IIIT Ranchi Campus on January 30-31, 2026. The event is hosted by IIIT Ranchi!",
  "location": "The final round is at IIIT Ranchi Campus. Round 1 is online PPT submission.",
  "iiit": "Quasar x AI 2026 is hosted by IIIT Ranchi! The final 24-hour hackathon takes place at IIIT Ranchi Campus on January 30-31, 2026.",
  "ranchi": "The hackathon is hosted by IIIT Ranchi! The final round takes place at IIIT Ranchi Campus.",
  "host": "Quasar x AI 2026 is proudly hosted by IIIT Ranchi! The final round will be held at their campus.",
  "register": "You can register by scrolling down to the registration section. Registration is open until Jan 10, 2026. Fee is ₹500 per team.",
  "sign up": "Scroll down to the registration section to sign up! Registration fee is ₹500 per team (1-5 members).",
  "cost": "The registration fee is ₹500 per team (not per person). Teams can have 1-5 members.",
  "fee": "The registration fee is ₹500 per team. This covers your entire team of 1-5 members.",
  "price": "Registration costs ₹500 per team (1-5 members).", 
  "prize": "Prize pool of ₹15,000! 1st place: ₹6,000, 2nd place: ₹4,000, 3rd place: ₹3,000, plus ₹2,000 for track-based awards!",
  "prizes": "Total prize pool: ₹15,000! 1st: ₹6,000 | 2nd: ₹4,000 | 3rd: ₹3,000 | Track prizes: ₹2,000. Plus certificates and goodies!",
  "team": "Teams can have 1-5 members. Solo participation is allowed. Registration fee is ₹500 per team.",
  "member": "Each team should have 1-5 members. Solo participation is allowed as we encourage collaboration!", 
  "round": "There are 2 rounds! Round 1 (Jan 15-18): Submit a PPT of your project idea. Shortlisted teams compete in Round 2, the 24-hour final at IIIT Ranchi (Jan 30-31).",
  "rounds": "Round 1: PPT submission (Jan 15-18) - present your AI project idea. Round 2: 24-hour hackathon at IIIT Ranchi Campus (Jan 30-31) for shortlisted teams.",
  "ppt": "Round 1 requires PPT submission! Include team details, problem statement, AI-based solution, tech stack, and expected outcomes. Selection is based on your PPT.",
  "presentation": "For Round 1, submit a PPT with your project idea, problem statement, proposed AI solution, and tech stack. Teams are shortlisted based on their presentations.",
  "selection": "Selection for Round 2 is based on your Round 1 PPT submission. Focus on innovation, feasibility, and how you integrate AI into your solution.",
  "ai": "This is an AI-based hackathon hosted by IIIT Ranchi! Your projects should incorporate AI/ML technologies.",
  "theme": "The theme is AI for Economic & Social Good — build projects that use AI to improve economic opportunities or social welfare. Projects may be in any domain (web, mobile, AI, IoT, healthcare, agriculture, education, etc.), but MUST clearly explain how AI is used and the expected social or economic impact.",
  "problem statement": "You have complete freedom to pick a problem from any domain (web, app, AI, IoT, healthcare, finance, etc.), but your solution must align with the theme: AI for Economic & Social Good. Make sure your PPT explains the problem, datasets, AI approach, expected impact, and feasibility.",
  "problem": "You may submit problems from any domain, but the solution must be based on the theme (AI for Economic & Social Good) and should clearly use AI as a central component.",
  "statements": "Problem statements can be in any domain — just ensure they align with the theme and demonstrate AI usage.",
  "rules": "Key rules: Teams of 1-5, ₹500 fee, Round 1 is PPT submission, Round 2 is 24-hour coding at IIIT Ranchi. Projects must use AI/ML!",
  "help": "I can answer questions about dates, rounds, PPT submission, registration, fees, prizes, teams, venue, and more. What would you like to know?",
  "hello": "Hello! 👋 I'm the Quasar x AI 2026 assistant. This hackathon is hosted by IIIT Ranchi! Ask me about registration, rounds, PPT submission, or anything else!",
  "hi": "Hi there! 👋 Quasar x AI 2026 is hosted by IIIT Ranchi. Ask about fees, rounds (PPT + final), prizes, or anything else!",
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
      content: "Hi! 👋 I'm the Quasar x AI 2026 assistant. Ask me about registration (₹500/team), rounds, prizes (₹15,000 pool), venue (IIIT Ranchi), or anything else!",
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center ${
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
                <h3 className="font-semibold">Quasar AI Assistant</h3>
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
