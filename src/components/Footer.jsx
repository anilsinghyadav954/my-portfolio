import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-10">

      <div className="max-w-6xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Anil Yadav
            </h2>

            <p className="text-gray-400 mt-2">
              Full Stack Developer • AI Enthusiast • B.Tech IT Student
            </p>
          </div>

          <div className="flex gap-6 text-3xl mt-6 md:mt-0">

            <a
              href="https://github.com/anilsinghyadav954"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode className="hover:text-yellow-400 transition" />
            </a>

          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400 flex justify-center items-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Anil Yadav
        </p>

        <p className="text-center text-gray-500 mt-3">
          © 2026 All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;