export default function Contact() {
  return (
    <div className="min-h-screen bg-secondary text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-heading font-extrabold mb-4 text-primary">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          For inquiries, partnerships or media, reach out to us. We'll respond as soon as possible.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted (prototype). We'll hook this to backend later.");
            }}
            className="grid gap-4"
          >
            <input className="border p-3 rounded" name="name" placeholder="Your full name" required />
            <input className="border p-3 rounded" name="email" type="email" placeholder="Your email" required />
            <textarea className="border p-3 rounded" name="message" rows="5" placeholder="How can we help?" required />
            <div className="flex items-center justify-between">
              <button className="bg-primary text-white px-5 py-2 rounded">Send Message</button>
              <div className="text-sm text-gray-600">Or email us at: <strong>info@thekenyanheart.org</strong></div>
            </div>
          </form>
        </div>

        <div className="mt-8 text-sm text-gray-700">
          <p>P.O. Box 00000, Nairobi, Kenya</p>
          <p className="mt-2">Follow us on social media: (placeholders)</p>
        </div>
      </div>
    </div>
  );
}
