import { Calendar, MapPin, CheckCircle } from "lucide-react";

const scheduleItems = [
  {
    date: "Jan 15, 2025",
    title: "Registration Opens",
    description: "Sign up and secure your spot in the hackathon.",
    time: "12:00 PM",
    completed: true,
  },
  {
    date: "Jan 20, 2025",
    title: "Team Formation",
    description: "Find teammates or register as a solo participant.",
    time: "All Day",
    completed: false,
  },
  {
    date: "Feb 1, 2025",
    title: "Hackathon Kickoff",
    description: "Opening ceremony, rules announcement, and hacking begins!",
    time: "9:00 AM",
    completed: false,
  },
  {
    date: "Feb 2, 2025",
    title: "Workshops & Mentoring",
    description: "Learn from industry experts and get guidance on your projects.",
    time: "Throughout the day",
    completed: false,
  },
  {
    date: "Feb 3, 2025",
    title: "Submissions Due",
    description: "Final project submissions and demo videos.",
    time: "9:00 AM",
    completed: false,
  },
  {
    date: "Feb 3, 2025",
    title: "Judging & Winners",
    description: "Project presentations, judging, and award ceremony.",
    time: "2:00 PM",
    completed: false,
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Event <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mark your calendar with these important dates. Don't miss out on any part of the action!
          </p>
        </div>

        {/* Event Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="glass rounded-full px-6 py-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">February 1-3, 2025</span>
          </div>
          <div className="glass rounded-full px-6 py-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Virtual Event - Worldwide</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-glow-secondary to-accent" />

            {/* Timeline Items */}
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6">
                  {item.completed ? (
                    <CheckCircle className="w-4 h-4 text-accent" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-xl p-5 hover:scale-[1.02] transition-transform">
                    <div className="text-xs text-primary font-medium mb-1">{item.date}</div>
                    <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <div className="text-xs text-accent font-medium">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
