export default function ProgramsSection() {
  const items = [
    { title: "Human Rights Advocacy", desc: "Campaigns, policy & legal support for vulnerable communities." },
    { title: "Community Empowerment", desc: "Local workshops, training and grassroots support." },
    { title: "Education & Awareness", desc: "Public campaigns and resources to inform citizens." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Our Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
