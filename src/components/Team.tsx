import { Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Devansh Khandelwal",
    role: "Technical Head",
    image: "https://res.cloudinary.com/dlmfnwkon/image/upload/dk_fqpjkp.png",
    instagram: "https://www.instagram.com/devanshh__k?igsh=MTRoaGt5cjZweTF0bg==",
    linkedin: "https://www.linkedin.com/in/devansh-khandelwal-dek/",
  },
  {
    name: "Agnish Bhattacharya",
    role: "Lead Organizer",
    image: "https://res.cloudinary.com/dlmfnwkon/image/upload/ab_zmycia.png",
    instagram: "https://www.instagram.com/_agnish16_?igsh=MTA4NXcxeWk3Z2tueg%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/agnish-bhattacharya-324031286/",
  },
  {
    name: "Atul Pandey",
    role: "Developer",
    image: "https://res.cloudinary.com/dlmfnwkon/image/upload/aaaaaapppp_rzrzbk.jpg",
    instagram: "https://www.instagram.com/atull._.pandey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/in/atull-pandeyy",
  },
  {
    name: "Atharv Jain",
    role: "Developer",
    image: "https://res.cloudinary.com/dlmfnwkon/image/upload/ajj_jnz8qo.jpg",
    instagram: "https://www.instagram.com/atharvjain21",
    linkedin: "https://www.linkedin.com/in/atharv-jain-2abb95324/",
  },
  {
    name: "Pankaj Gupta",
    role: "Event Coordinator",
    image: "https://res.cloudinary.com/dlmfnwkon/image/upload/pg_j0e0xz.jpg",
    instagram: "https://www.instagram.com/pankaj_gupta_025/",
    linkedin: "https://www.linkedin.com/in/pankaj-gupta-609971175",
  },
  {
    name: "Amitesh Anand",
    role: "Event Coordinator",
    image: "https://res.cloudinary.com/dlmfnwkon/image/upload/aa_h1uem1.png",
    instagram: "https://www.instagram.com/_amiteshanand_?igsh=enV2MmpxbGgzemI2",
    linkedin: "https://www.linkedin.com/in/amitesh-anand-b27208313/",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The passionate individuals behind Quasar x AI 2026. Connect with us
            on social media!
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted glow-border group-hover:scale-110 transition-transform">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:bg-pink-500/10 transition-all"
                  aria-label={`${member.name}'s Instagram`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-all"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
