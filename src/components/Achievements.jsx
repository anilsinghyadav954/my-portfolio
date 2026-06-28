import { FaTrophy, FaCode, FaCertificate, FaLaptopCode } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaCode className="text-4xl text-cyan-400" />,
      title: "3+ Projects",
      desc: "Developed multiple web applications using React, Java, Python and MySQL.",
    },
    {
      icon: <FaCertificate className="text-4xl text-cyan-400" />,
      title: "Technical Certifications",
      desc: "Completed certifications in Python, Java and Hackathon participation.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-cyan-400" />,
      title: "DSA Practice",
      desc: "Regularly solving coding problems using Java to improve problem-solving skills.",
    },
    {
      icon: <FaTrophy className="text-4xl text-cyan-400" />,
      title: "Career Goal",
      desc: "Seeking opportunities as a Software Developer in a reputed IT company.",
    },
  ];

  return (
    <section id="achievements" className="bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl border border-cyan-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition"
            >
              {item.icon}

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;