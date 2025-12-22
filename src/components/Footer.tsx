import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold text-gradient flex items-center gap-2 justify-center md:justify-start">
              <img src="/logo.png" alt="Quasar x AI" className="w-15 h-20" />
             
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © 2026 Quasar x AI. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-muted-foreground ">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:houseofgeeks@iiitranchi.ac.in"
              className="text-sm hover:text-foreground transition-colors"
            >
              houseofgeeks@iiitranchi.ac.in
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/houseofgeeks"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/hg.iiitranchi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/hgiiitranchi/"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
