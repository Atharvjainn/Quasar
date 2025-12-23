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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=houseofgeeks@iiitranchi.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-foreground transition-colors"
            >
              houseofgeeks@iiitranchi.ac.in
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-2">
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
            <p className="text-xs mt-4 text-muted-foreground">
              Developed by{' '}
              <a 
                href="https://github.com/AtulPandey25" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors underline"
              >
                Atul Pandey
              </a>
              {' '}and{' '}
              <a 
                href="https://github.com/Atharvjainn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors underline"
              >
                Atharv Jain
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
