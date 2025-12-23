import { Brain, Globe, Cpu, Code, Users, Trophy, Clock } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI-Powered Projects",
    description: "Build innovative applications using machine learning, LLMs, and artificial intelligence.",
    color: "text-primary",
  },
  {
    icon: Code,
    title: "24-Hour Sprint",
    description: "Intense coding marathon from 10 AM Jan 30 to 10 AM Jan 31, 2026.",
    color: "text-glow-secondary",
  },
  {
    icon: Cpu,
    title: "Learn & Build",
    description: "Get hands-on experience with cutting-edge AI tools and frameworks.",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Connect & Collaborate",
    description: "Network with fellow AI enthusiasts and industry mentors.",
    color: "text-primary",
  },
];

const stats = [
  { icon: Users, value: "200+", label: "Students" },
  { icon: Trophy, value: "₹15K", label: "Prize Pool" },
  { icon: Clock, value: "24", label: "Hours" },
  { icon: Brain, value: "AI for Economic Development and Social Good", label: "Theme" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            What is <span className="text-gradient">Quasar x AI 2026</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            A 24-hour AI innovation marathon hosted by <span className="font-semibold text-foreground">IIIT Ranchi</span> where students come together to build groundbreaking 
            AI-powered projects. Whether you're a seasoned developer or just starting your AI journey, 
            there's a place for you here. <span className="font-semibold text-foreground">#LetsDiveIn</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center glow-border hover:scale-105 transition-transform"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div
                className={`font-display font-bold text-gradient mb-1 ${
                  stat.label === "Theme" ? "text-sm md:text-base leading-tight" : "text-3xl md:text-4xl"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h3 className="font-display text-4xl sm:text-5xl font-bold text-center mb-10">
            Event Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
