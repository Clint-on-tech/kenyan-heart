export default function Programs() {
  const programs = [
    {
      title: "Human Rights Advocacy",
      desc: "Campaigns, legal assistance and policy work to protect vulnerable groups."
    },
    {
      title: "Community Empowerment",
      desc: "Workshops, training and capacity-building for local leaders and youth."
    },
    {
      title: "Education & Awareness",
      desc: "Public campaigns and resources to inform citizens about rights and civic participation."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-heading font-extrabold mb-6 text-primary">Programs & Initiatives</h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          We design and run programs that tackle urgent social issues, support survivors, and strengthen communities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
