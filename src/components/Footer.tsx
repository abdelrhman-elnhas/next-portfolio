import { personalInfo } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaXTwitter, FaBehance, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
        <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6">
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-outfit tracking-tighter">
              {personalInfo.firstName} {personalInfo.lastName}
            </span>
          </Link>
          <p className="text-white/40 text-xs sm:text-sm max-w-xs text-center md:text-left leading-relaxed">
            Crafting premium digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 sm:gap-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href={personalInfo.socials.linkedin} target="_blank" className="text-white/40 hover:text-white transition-colors" rel="noopener noreferrer">
              <FaLinkedin size={18} />
            </Link>
            <Link href={personalInfo.socials.github} target="_blank" className="text-white/40 hover:text-white transition-colors" rel="noopener noreferrer">
              <FaGithub size={18} />
            </Link>
            <Link href={personalInfo.socials.twitter} target="_blank" className="text-white/40 hover:text-white transition-colors" rel="noopener noreferrer">
              <FaXTwitter size={18} />
            </Link>
            <Link href={personalInfo.socials.behance} target="_blank" className="text-white/40 hover:text-white transition-colors" rel="noopener noreferrer">
              <FaBehance size={18} />
            </Link>
            <Link href={personalInfo.socials.whatsapp} target="_blank" className="text-white/40 hover:text-white transition-colors" rel="noopener noreferrer">
              <FaWhatsapp size={18} />
            </Link>
          </div>
          <p className="text-white/20 text-[10px] sm:text-xs tracking-widest uppercase text-center sm:text-right">
            &copy; {currentYear} {personalInfo.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
