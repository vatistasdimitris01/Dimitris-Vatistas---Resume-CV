import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { 
  ArrowUpRight
} from "lucide-react";

// --- Data ---
const DATA = {
  en: {
    personal: {
      name: "Dimitris Vatistas",
      title: "Web Developer & Web Designer",
      bio: "I'm Dimitris Vatistas, a developer and designer crafting digital products that balance aesthetics with functionality. My work spans the full creative and technical process — from wireframing in Figma to building production-ready applications in React and Next.js.",
      email: "vatistasdim.ae@icloud.com",
      location: "Greece",
      social: [
        { platform: "Instagram", url: "https://www.instagram.com/vatistasdimitris/", handle: "vatistasdimitris" },
        { platform: "X", url: "https://x.com/vatistasdim", handle: "vatistasdim" }
      ]
    },
    workExperience: [
      { id: "01", role: "Student", company: "Stanford CodeInPlace", period: "2026", description: "Mastered Python fundamentals and software engineering principles through Stanford's intensive online course." },
      { id: "03", role: "Founder & CEO", company: "QRoyal", period: "2023 - 2025", description: "Founded and led a digital loyalty startup, overseeing product strategy and full-stack development." },
      { id: "04", role: "Developer", company: "AI Age Verification", period: "2022", description: "Built secure, privacy-focused age verification systems using machine learning models." }
    ],
    education: [
      { id: "02", role: "Student", company: "High School & Further Education", period: "2021 - Present", description: "Focusing on advanced mathematics, with a long-term goal of pursuing studies in Architecture." }
    ],
    projects: [
      { id: "01", title: "AI Age Verification", description: "A secure, privacy-first system for frictionless AI-based age verification.", url: "https://ai-age-verification.vercel.app/" },
      { id: "02", title: "QRoyal", description: "A smart digital loyalty program that replaces physical cards with one universal QR-based pass.", url: "https://qroyal.vercel.app/" },
      { id: "03", title: "Fortnite Vibe Coder", description: "A playful project that codes custom Fortnite-inspired 'vibes' into experiences.", url: "https://fortnitevibecoder.vercel.app/" },
      { id: "04", title: "ImageFM", description: "A creative AI platform that generates images from user prompts with a music-inspired twist.", url: "https://imagefm.vercel.app/" },
      { id: "05", title: "GenGlow", description: "An AI-powered platform that generates personalized skincare routines based on user preferences and skin profiles.", url: "https://genglow.vercel.app/" }
    ],
    certificatesTitle: "Certificates",
    skillsTitle: "Skills",
    aboutTitle: "About",
    experienceTitle: "Experience",
    educationTitle: "Education",
    projectsTitle: "Projects",
    contactTitle: "Contact"
  },
  el: {
    personal: {
      name: "Δημήτρης Βατίστας",
      title: "Web Developer & Web Designer",
      bio: "Είμαι ο Δημήτρης Βατίστας, ένας προγραμματιστής και σχεδιαστής που δημιουργεί ψηφιακά προϊόντα που ισορροπούν την αισθητική με τη λειτουργικότητα. Η δουλειά μου καλύπτει ολόκληρη τη δημιουργική και τεχνική διαδικασία — από το wireframing στο Figma, μέχρι τη δημιουργία έτοιμων για παραγωγή εφαρμογών σε React και Next.js.",
      email: "vatistasdim.ae@icloud.com",
      location: "Ελλάδα",
      social: [
        { platform: "Instagram", url: "https://www.instagram.com/vatistasdimitris/", handle: "vatistasdimitris" },
        { platform: "X", url: "https://x.com/vatistasdim", handle: "vatistasdim" }
      ]
    },
    workExperience: [
      { id: "01", role: "Μαθητής", company: "Stanford CodeInPlace", period: "2026", description: "Εμβάθυνση στις βασικές αρχές της Python και της μηχανικής λογισμικού μέσω του εντατικού διαδικτυακού μαθήματος του Stanford." },
      { id: "03", role: "Ιδρυτής & CEO", company: "QRoyal", period: "2023 - 2025", description: "Ίδρυση και καθοδήγηση μιας startup ψηφιακής πιστότητας, επιβλέποντας τη στρατηγική προϊόντος και την ανάπτυξη full-stack." },
      { id: "04", role: "Προγραμματιστής", company: "AI Age Verification", period: "2022", description: "Δημιουργία ασφαλών συστημάτων επαλήθευσης ηλικίας με έμφαση στο απόρρητο χρησιμοποιώντας μοντέλα μηχανικής μάθησης." }
    ],
    education: [
      { id: "02", role: "Μαθητής", company: "Λύκειο & Περαιτέρω Εκπαίδευση", period: "2021 - Σήμερα", description: "Εστίαση στα προχωρημένα μαθηματικά, με μακροπρόθεσμο στόχο τις σπουδές στην Αρχιτεκτονική." }
    ],
    projects: [
      { id: "01", title: "AI Age Verification", description: "Ένα ασφαλές, με προτεραιότητα το απόρρητο, σύστημα για απρόσκοπτη επαλήθευση ηλικίας με βάση την τεχνητή νοημοσύνη.", url: "https://ai-age-verification.vercel.app/" },
      { id: "02", title: "QRoyal", description: "Ένα έξυπνο ψηφιακό πρόγραμμα πιστότητας που αντικαθιστά τις φυσικές κάρτες με ένα καθολικό πάσο βασισμένο σε QR.", url: "https://qroyal.vercel.app/" },
      { id: "03", title: "Fortnite Vibe Coder", description: "Ένα παιχνιδιάρικο έργο που κωδικοποιεί προσαρμοσμένα «vibes» εμπνευσμένα από το Fortnite σε εμπειρίες.", url: "https://fortnitevibecoder.vercel.app/" },
      { id: "04", title: "ImageFM", description: "Μια δημιουργική πλατφόρμα τεχνητής νοημοσύνης που δημιουργεί εικόνες από προτροπές χρηστών με μια μουσική έμπνευση.", url: "https://imagefm.vercel.app/" },
      { id: "05", title: "GenGlow", description: "Μια πλατφόρμα με τεχνητή νοημοσύνη που δημιουργεί εξατομικευμένες ρουτίνες περιποίησης δέρματος με βάση τις προτιμήσεις των χρηστών και τα προφίλ του δέρματος.", url: "https://genglow.vercel.app/" }
    ],
    certificatesTitle: "Πιστοποιητικά",
    skillsTitle: "Δεξιότητες",
    aboutTitle: "Σχετικά",
    experienceTitle: "Εμπειρία",
    educationTitle: "Εκπαίδευση",
    projectsTitle: "Έργα",
    contactTitle: "Επικοινωνία"
  },
  certificates: [
    {
      id: "02",
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      date: "2026",
      url: "https://www.freecodecamp.org/certification/vatistasdimitris/machine-learning-with-python-v7"
    }
  ],
  skillsList: ["React", "Next.js", "Python", "Tailwind CSS", "Figma", "Web Design"]
};

// --- Components ---

const Section = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className={`framer-section ${className}`}
  >
    <h3 className="framer-title">{title}</h3>
    {children}
  </motion.section>
);

const ExperienceItem = ({ role, company, period, description }: any) => (
  <div className="flex gap-[16px] mb-8 last:mb-0">
    <div className="flex-grow">
      <h4 className="text-[16px] font-medium tracking-[-0.02em] text-dark leading-[24px]">{role}</h4>
      <div className="flex items-center gap-1 framer-mono-small mb-2">
        <span className="text-dark">{company}</span>
        <span className="text-dim">·</span>
        <span className="text-dim">{period}</span>
      </div>
      <p className="framer-body-text">{description}</p>
    </div>
  </div>
);

const ProjectItem = ({ title, description, url }: any) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group flex gap-[16px] mb-8 last:mb-0 no-underline hover:bg-pill-bg p-2 -m-2 rounded-xl transition-all duration-300">
    <div className="flex-grow">
      <div className="flex items-center justify-between">
        <h4 className="text-[16px] font-medium tracking-[-0.02em] text-dark leading-[24px]">{title}</h4>
        <ArrowUpRight size={16} className="text-dim opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="framer-body-text text-[14px]">{description}</p>
    </div>
  </a>
);


export default function App() {
  const [time, setTime] = useState(new Date());
  const [lang, setLang] = useState<"en" | "el">("en");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const d = DATA[lang];
  
  // Format for Greece time (Europe/Athens)
  const greeceTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Athens"
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="framer-header pt-6 pb-6 border-b border-dashed border-border-dim">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="framer-mono-small">{d.personal.location}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setLang("en")}
                className={`framer-mono-small lowercase transition-colors ${lang === "en" ? "text-dark font-bold underline" : "text-dim hover:text-dark"}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang("el")}
                className={`framer-mono-small lowercase transition-colors ${lang === "el" ? "text-dark font-bold underline" : "text-dim hover:text-dark"}`}
              >
                EL
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="framer-mono-small lowercase">{greeceTime} GMT+3</span>
          </div>
        </div>
      </header>

      <main className="pb-32">
        {/* Intro */}
        <section className="framer-section flex flex-col items-center text-center gap-6 pt-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-border-dim p-1"
          >
            <img 
              src="https://i.ibb.co/mVnKBKjb/Gemini-Generated-Image-80beog80beog80be.png" 
              alt={d.personal.name}
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <h1 className="framer-h1 mb-1">{d.personal.name}</h1>
            <h2 className="framer-h2">{d.personal.title}</h2>
          </div>
        </section>

        {/* About */}
        <Section title={d.aboutTitle}>
          <p className="framer-body-text">
            {d.personal.bio}
          </p>
        </Section>

        {/* Experience */}
        <Section title={d.experienceTitle}>
          {d.workExperience.map((exp: any) => (
            <ExperienceItem key={exp.id} {...exp} />
          ))}
        </Section>

        {/* Education */}
        <Section title={d.educationTitle}>
          {d.education.map((edu: any) => (
            <ExperienceItem key={edu.id} {...edu} />
          ))}
        </Section>

        {/* Projects */}
        <Section title={d.projectsTitle}>
          <div className="space-y-4">
            {d.projects.map((proj: any) => (
              <ProjectItem key={proj.id} {...proj} />
            ))}
          </div>
        </Section>

        {/* Certificates */}
        <Section title={d.certificatesTitle}>
          {DATA.certificates.map((cert: any) => (
            <a key={cert.id} href={cert.url} target="_blank" rel="noopener noreferrer" className="group block mb-6 last:mb-0 no-underline">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[16px] font-medium tracking-[-0.02em] text-dark leading-[24px]">{cert.title}</h4>
                <ArrowUpRight size={16} className="text-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="framer-mono-small mb-2">
                <span className="text-dark">{cert.issuer}</span>
                <span className="text-dim mx-1">·</span>
                <span className="text-dim">{cert.date}</span>
              </div>
            </a>
          ))}
        </Section>

        {/* Skills */}
        <Section title={d.skillsTitle}>
          <div className="flex flex-wrap gap-2">
            {DATA.skillsList.map((skill) => (
              <span key={skill} className="framer-pill">{skill}</span>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section title={d.contactTitle} className="border-b-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-dashed border-border-dim">
              <span className="framer-body-text text-dark">Email</span>
              <a href={`mailto:${d.personal.email}`} className="framer-body-text hover:text-dark transition-colors">{d.personal.email}</a>
            </div>
            {d.personal.social.map((s: any) => (
              <div key={s.platform} className="flex items-center justify-between py-2 border-b border-dashed border-border-dim last:border-0">
                <span className="framer-body-text text-dark">{s.platform}</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="framer-body-text hover:text-dark transition-colors flex items-center gap-1">
                  {s.handle}
                </a>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-[640px] mx-auto px-4 pb-12 md:px-6">
        <div className="pt-10 border-t border-dashed border-border-dim text-center">
           <p className="framer-mono-small normal-case">© 2026 Resume by Dimitris Vatistas</p>
        </div>
      </footer>
    </div>
  );
}
