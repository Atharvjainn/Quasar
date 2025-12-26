import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How many members can be in a team?",
    answer:
      "Each team can have 1-5 members. Solo participation is allowed; we encourage collaboration but welcome solo participants too.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, the registration fee is ₹500 per team (not per person). This covers participation for your entire team of 1-5 members.",
  },
  {
    question: "What are the rounds in this hackathon?",
    answer:
      "Quasar x AI 2026 consists of two rounds. Round 1 (Jan 15-18, 2026) requires you to submit a PPT presentation of your project idea. Teams will be shortlisted based on their PPT submissions. Round 2 is the 24-hour final hackathon on January 30-31, 2026 at IIIT Ranchi Campus where shortlisted teams build their projects.",
  },
  {
    question: "What should the Round 1 PPT contain?",
    answer:
      "Your PPT should include: your team details, problem statement, proposed AI-based solution, tech stack you plan to use, and expected outcomes. Selection for Round 2 will be based on the innovation, feasibility, and AI integration shown in your presentation.",
  },
  {
    question: "What kind of problem statements can we submit?",
    answer:
      "You have complete freedom to choose a problem from any domain — web, mobile apps, AI, IoT,cyber and more. However, your solution must be aligned with our theme, ‘AI for Economic & Social Good,’ and clearly demonstrate the use of AI as a core component (models, data pipelines, inference, automation, etc.). Make sure to explain expected impact, datasets, and how AI is applied in your PPT.",
  },
  {
    question: "Where will the final round take place?",
    answer:
      "The final round (Round 2) will be held at IIIT Ranchi Campus on January 30-31, 2026. It's a 24-hour on-site hackathon!",
  },
  {
    question: "Who can register for the hackathon?",
    answer:
      "The hackathon is open to all college students currently pursuing undergraduate or postgraduate degrees. You must have a valid college ID to participate.",
  },
  {
    question: "What is the registration deadline?",
    answer:
      "Registrations are open from January 5-10, 2026. Make sure to register before the deadline as spots are limited!",
  },
  {
    question: "Do I need prior AI/ML experience?",
    answer:
      "Not necessarily! While some familiarity with programming is helpful, we welcome beginners too. This is an AI-based hackathon, so projects should incorporate AI/ML technologies. Mentors will be available to guide you.",
  },
  {
    question: "What are the prizes?",
    answer:
      "We have a total prize pool of ₹15,000! 1st place: ₹6,000, 2nd place: ₹4,000, 3rd place: ₹3,000. The remaining ₹2,000 will be distributed as track-based prizes along with certificates and goodies.",
  },
  {
    question: "What should I bring to the final round?",
    answer:
      "Bring your laptop, charger, valid college ID, and lots of enthusiasm! We'll provide food, drinks, and a comfortable workspace at IIIT Ranchi Campus.",
  },
  {
    question: "Will food be provided?",
    answer:
      "Yes! We'll provide meals, snacks, and beverages throughout the 24-hour hackathon at IIIT Ranchi. Please mention any dietary restrictions during registration.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers! Here are some common queries about
            Quasar x AI 2026.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline hover:text-primary py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Reach out to us and we'll get back to you as soon as possible!
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href="mailto:houseofgeeks@iiitranchi.ac.in"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">houseofgeeks@iiitranchi.ac.in</p>
                </div>
              </a>
              {/* <a
                href="mailto:houseofgeeks@iiitranchi.ac.in"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">houseofgeeks@iiitranchi.ac.in</p>
                </div>
              </a> */}

              {/* Phone 1 */}
              <a
                href="tel:+917488868453"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+91 7488 868 453</p>
                </div>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+919125226929"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+91 91252 26929</p>
                </div>
              </a>

              {/* Phone 3 */}
              <a
                href="tel:+917829500988"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+91 7829500988</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
