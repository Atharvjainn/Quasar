import { Brain, Globe, Cpu, Code, Users, Trophy, Clock } from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "AI / ML",
    description: "Build intelligent applications using machine learning and artificial intelligence.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Web3 / Blockchain",
    description: "Create decentralized apps and explore the future of the internet.",
    color: "text-glow-secondary",
  },
  {
    icon: Cpu,
    title: "Hardware / IoT",
    description: "Connect the physical world with smart devices and embedded systems.",
    color: "text-accent",
  },
  {
    icon: Code,
    title: "General Coding",
    description: "Build anything you can imagine with your favorite tech stack.",
    color: "text-primary",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Participants" },
  { icon: Trophy, value: "$50K", label: "In Prizes" },
  { icon: Clock, value: "48", label: "Hours" },
  { icon: Code, value: "4", label: "Tracks" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What is <span className="text-gradient">Hackathon 2025</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            A 48-hour innovation marathon where developers, designers, and dreamers come together 
            to build groundbreaking projects across four exciting tracks. Whether you're a seasoned 
            pro or just starting out, there's a place for you here.
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
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tracks */}
        <div className="mb-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Competition Tracks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${track.color}`}>
                  <track.icon className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">{track.title}</h4>
                <p className="text-muted-foreground text-sm">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
