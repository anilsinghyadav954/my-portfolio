function Education() {
  const education = [
    {
      degree: "B.Tech - Information Technology",
      college: "R.R. Institute of Modern Technology, Lucknow",
      year: "2023 - 2027",
      status: "Currently Pursuing",
    },
    {
      degree: "Intermediate (12th)",
      college: "Uttar Pradesh Board",
      year: "2023",
      status: "Completed",
    },
    {
      degree: "High School (10th)",
      college: "Uttar Pradesh Board",
      year: "2021",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-950 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Education
        </h2>

        <div className="space-y-8">

          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 border-l-4 border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-2xl font-bold">
                🎓 {edu.degree}
              </h3>

              <p className="text-cyan-400 text-lg mt-3">
                {edu.college}
              </p>

              <div className="flex justify-between mt-6 text-gray-300 text-base">
                <span>📅 {edu.year}</span>
                <span>{edu.status}</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;