import anil from "../assets/Anil.jpeg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Anil <span className="text-cyan-400">Yadav</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-5">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Passionate B.Tech IT student who loves building
            modern websites, AI projects and solving coding
            problems using Java, React and Python.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold transition"
            >
              <FaDownload className="inline mr-2" />
              Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Hire Me
            </a>

          </div>
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/anilsinghyadav954"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/anil-yadav/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <SiLeetcode />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={anil}
            alt="Anil"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-105 transition duration-500"
          />

        </div>
        </div>
    </section>
  );
}

export default Hero;