import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Countdown to hackathon start
  useEffect(() => {
    const targetDate = new Date("2026-01-24T10:00:00");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mouse parallax glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToRegister = () => {
    document
      .querySelector("#register")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Parallax Glows */}
        <div
          className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mouse.x}px, ${mouse.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />

        <div
          className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mouse.x}px, ${-mouse.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              24-Hour AI Hackathon • January 24-25, 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-7xl sm:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Quasar</span> x{" "}
            <span className="text-gradient">AI</span>
            <br />
            2026
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-up">
            Join 100+ students for 24 hours of building, learning, and pushing
            the boundaries of AI.
          </p>

          <p className="text-2xl md:text-3xl font-display font-bold text-gradient mb-10">
            #LetsDiveIn
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={scrollToRegister}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-border transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-6 text-lg border-border hover:bg-muted transition-all"
            >
              Learn More
            </Button>
          </div>

          {/* Countdown */}
          <div>
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              Event Starts In
            </p>

            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 md:p-6 min-w-[60px] md:min-w-[100px] glow-border"
                >
                  <div className="font-display text-2xl md:text-4xl font-bold text-gradient animate-[pulse_1s_ease-in-out]">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 max-lg:hidden">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-scroll-indicator" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
