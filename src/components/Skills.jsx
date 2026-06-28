import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* HTML */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaHtml5 className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold">HTML</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
            </div>
            <p className="mt-2 text-gray-400">90%</p>
          </div>

          {/* CSS */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
            <h3 className="font-bold">CSS</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[85%]"></div>
            </div>
            <p className="mt-2 text-gray-400">85%</p>
          </div>

          {/* JavaScript */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaJs className="text-5xl text-yellow-400 mb-4" />
            <h3 className="font-bold">JavaScript</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[80%]"></div>
            </div>
            <p className="mt-2 text-gray-400">80%</p>
          </div>

          {/* React */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaReact className="text-5xl text-cyan-400 mb-4" />
            <h3 className="font-bold">React</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[75%]"></div>
            </div>
            <p className="mt-2 text-gray-400">75%</p>
          </div>

          {/* Tailwind */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <SiTailwindcss className="text-5xl text-cyan-300 mb-4" />
            <h3 className="font-bold">Tailwind CSS</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[85%]"></div>
            </div>
            <p className="mt-2 text-gray-400">85%</p>
          </div>

          {/* Java */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaJava className="text-5xl text-red-500 mb-4" />
            <h3 className="font-bold">Java</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[85%]"></div>
            </div>
            <p className="mt-2 text-gray-400">85%</p>
          </div>

          {/* Git */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaGitAlt className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold">Git</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[80%]"></div>
            </div>
            <p className="mt-2 text-gray-400">80%</p>
          </div>

          {/* GitHub */}
          <div className="bg-black p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_20px_#06b6d4] transition duration-300">
            <FaGithub className="text-5xl text-white mb-4" />
            <h3 className="font-bold">GitHub</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className="bg-cyan-400 h-2 rounded-full w-[80%]"></div>
            </div>
            <p className="mt-2 text-gray-400">80%</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;