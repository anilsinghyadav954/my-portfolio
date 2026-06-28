import student from "../assets/student.png";
import election from "../assets/election.png";
import portfolio from "../assets/portfolio.png";

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      image: student,
      desc: "A web application to manage student records, attendance, marks and academic information efficiently.",
      tech: ["React", "Java", "MySQL"],
      github: "https://github.com/anilsinghyadav954",
      demo: "#",
    },
    {
      title: "Online Election System",
      image: election,
      desc: "A secure online voting system with voter authentication, candidate management and real-time vote counting.",
      tech: ["Python", "HTML", "CSS", "MySQL"],
      github: "https://github.com/anilsinghyadav954",
      demo: "#",
    },
    {
      title: "Personal Portfolio",
      image: portfolio,
      desc: "Responsive portfolio website showcasing my skills, projects, certificates and contact information.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/anilsinghyadav954",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-cyan-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-center py-2 rounded-lg font-semibold transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-cyan-500 hover:bg-cyan-500 hover:text-black text-center py-2 rounded-lg font-semibold transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;