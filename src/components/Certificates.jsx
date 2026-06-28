function Certificates() {

  const certificates = [
    {
      title: "Full Stack Web Development - 3 Days Workshop",
      organization: "Softpro India Computers Pvt. Ltd.",
      year: "2025",
    },
    {
      title: "Be10X AI Tool Workshop",
      organization: "Be10X",
      year: "2024",
    },
    {
      title: "Intermediate Level of DSA",
      organization: "TrainX",
      year: "2025",
    },
    {
      title: "Python Programming",
      organization: "HackerRank",
      year: "2024",
    },
    {
      title: "Hackathon Participation",
      organization: "College Hackathon",
      year: "2025",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-black text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-cyan-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition duration-300"
            >
              <h3 className="text-xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {certificate.organization}
              </p>

              <p className="text-cyan-400 mt-4">
                {certificate.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;