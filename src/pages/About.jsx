export default function About() {
  return (
    <div className="min-h-screen bg-secondary text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-heading font-extrabold mb-4 text-primary">About The Kenyan Heart</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          The Kenyan Heart is a Kenya-based humanitarian organisation dedicated to defending human rights,
          empowering communities and amplifying voices that demand justice and dignity for all. We translate
          evidence into action through programs, advocacy, research and community partnerships.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-700">To protect rights, empower communities and promote social justice across Kenya.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Our Vision</h3>
            <p className="text-sm text-gray-700">A Kenya where everyone enjoys dignity, equality and opportunity.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Our Values</h3>
            <p className="text-sm text-gray-700">Compassion · Integrity · Inclusivity · Accountability</p>
          </div>
        </div>
      </div>
    </div>
  );
}
