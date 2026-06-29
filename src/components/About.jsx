function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          About Me
        </h2>

        <div className="bg-gray-900 rounded-2xl p-10 border border-cyan-500 shadow-lg">

          <p className="text-lg leading-9 text-gray-300">

            Hello! I'm <span className="text-cyan-400 font-semibold">Anil Kumar</span>,
            a B.Tech Information Technology student at
            <span className="text-cyan-400"> RR Institute of Modern Technology, Lucknow.</span>

            <br /><br />

            I am passionate about <span className="text-cyan-400">Full Stack Web Development</span>,
            <span className="text-cyan-400"> Artificial Intelligence</span>,
            and solving real-world problems through technology.

            <br /><br />

            I enjoy building modern web applications using
            <span className="text-cyan-400"> React</span>,
            <span className="text-cyan-400"> Java</span>,
            <span className="text-cyan-400"> Python</span>,
            <span className="text-cyan-400"> MySQL</span>,
            and continuously improving my Data Structures & Algorithms skills.

            <br /><br />

            My goal is to build a successful career as a Software Engineer in a reputed
IT company. I am continuously improving my skills in Full Stack Development,
Java, Python and problem-solving to contribute to real-world software
solutions while learning and growing as a professional developer.

          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-black rounded-xl p-6 border border-cyan-500">
              <h3 className="text-xl font-bold text-cyan-400">
                🎓 Education
              </h3>

              <p className="mt-4 text-gray-300">
                B.Tech (Information Technology)
              </p>

              <p className="text-gray-400">
                RR Institute of Modern Technology
              </p>
            </div>

            <div className="bg-black rounded-xl p-6 border border-cyan-500">
              <h3 className="text-xl font-bold text-cyan-400">
                💻 Interests
              </h3>

              <p className="mt-4 text-gray-300">
                Full Stack Development
              </p>

              <p className="text-gray-300">
                Artificial Intelligence
              </p>

              <p className="text-gray-300">
                Java Programming
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;