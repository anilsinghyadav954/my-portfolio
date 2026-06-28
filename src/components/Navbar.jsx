import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-cyan-500/20 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide hover:scale-105 transition duration-300 cursor-pointer">
          Anil<span className="text-white">.dev</span>
        </h1>

        <div className="hidden md:flex gap-8 text-white font-medium">

          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          <a href="#certificates" className="hover:text-cyan-400 transition">Certificates</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>

        </div>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/anilsinghyadav954"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anil-yadav-5129502b3"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/anilsinghyadav91/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <SiLeetcode />
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;