import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pb-6 bg-[#121B42]">
      <div className="border-t border-gray-700 mt-8 pt-6 text-xs md:text-sm text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Min Mon Chel. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-pink-400">React</span>,{" "}
          <span className="text-blue-300">TailwindCSS</span>, and{" "}
          <span className="text-yellow-300">Vite</span>. |{" "}
          <a
            href="https://github.com/MinMonChel-hazel/my-portfolio-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Source Code
          </a>
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 rounded-full bg-gray-800 text-white shadow-lg hover:bg-themeColor"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
}
