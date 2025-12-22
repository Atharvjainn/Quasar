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
      "Each team can have 2-4 members. Solo participation is not allowed as we encourage collaboration and teamwork.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, the registration fee is ₹500 per team (not per person). This covers participation for your entire team of 2-4 members.",
  },
  {
    question: "What are the rounds in this hackathon?",
    answer:
      "Quasar x AI 2026 consists of two rounds. Round 1 (Jan 15-18, 2026) requires you to submit a PPT presentation of your project idea. Teams will be shortlisted based on their PPT submissions. Round 2 is the 24-hour final hackathon on January 24-25, 2026 at IIIT Ranchi Campus where shortlisted teams build their projects.",
  },
  {
    question: "What should the Round 1 PPT contain?",
    answer:
      "Your PPT should include: your team details, problem statement, proposed AI-based solution, tech stack you plan to use, and expected outcomes. Selection for Round 2 will be based on the innovation, feasibility, and AI integration shown in your presentation.",
  },
  {
    question: "Where will the final round take place?",
    answer:
      "The final round (Round 2) will be held at IIIT Ranchi Campus on January 24-25, 2026. It's a 24-hour on-site hackathon!",
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
      "We have a total prize pool of ₹15,000! 1st place: ₹6,000, 2nd place: ₹4,000, 3rd place: ₹2,000. The remaining ₹3,000 will be distributed as track-based prizes along with certificates and goodies.",
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
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:hello@hackathon2025.com"
              className="text-primary hover:underline font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
