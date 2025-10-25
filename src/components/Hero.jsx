import Banner from "../assets/hero-banner.jpg";

export default function Hero() {
  return (
    <header className="relative">
      <div
        className="h-[70vh] md:h-[75vh] bg-center bg-cover flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(14,14,14,0.45), rgba(14,14,14,0.45)), url(${Banner})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-left text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            Empowering Communities, Protecting Rights
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl opacity-90">
            The Kenyan Heart is a movement for hope, advocacy, and humanitarian action — driven by compassion and powered by change.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#programs" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-95">Explore Programs</a>
            <a href="#get-involved" className="border border-white px-6 py-3 rounded-full text-white font-medium hover:bg-white hover:text-primary transition">Get Involved</a>
          </div>
        </div>
      </div>
    </header>
  );
}
