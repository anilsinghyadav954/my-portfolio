function Experience() {
  const experiences = [
    {
      title: "Full Stack Web Development",
      company: "Self Learning & Projects",
      year: "2025 - Present",
      desc: "Building responsive web applications using React, Java, MySQL and Tailwind CSS."
    },
    {
      title: "Data Structures & Algorithms",
      company: "LeetCode & Java",
      year: "2025 - Present",
      desc: "Regularly solving DSA problems to improve problem-solving and coding skills."
    },
    {
      title: "Artificial Intelligence",
      company: "AI Tools & Prompt Engineering",
      year: "2025",
      desc: "Working with AI tools and integrating AI into modern web applications."
    }
  ];

  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-cyan-500 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400 mt-1">
                    {item.company}
                  </p>
                </div>

                <span className="text-gray-400 mt-2 md:mt-0">
                  {item.year}
                </span>

              </div>

              <p className="text-gray-300 mt-4 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;