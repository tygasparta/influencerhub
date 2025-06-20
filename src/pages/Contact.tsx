import React from 'react';

const Contact = () => (
  <section className="py-16 min-h-screen bg-muted/50">
    <div className="container mx-auto px-4 max-w-xl">
      <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
      <form className="bg-white/90 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <input type="text" placeholder="Name" className="border p-3 rounded" required />
        <input type="email" placeholder="Email" className="border p-3 rounded" required />
        <textarea placeholder="Message" className="border p-3 rounded min-h-[120px]" required />
        <button type="submit" className="btn-primary px-6 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition">Send Message</button>
      </form>
      <div className="mt-8 text-center text-gray-600">
        Or email us at <a href="mailto:info@yourdomain.com" className="text-blue-600 underline">info@yourdomain.com</a>
      </div>
    </div>
  </section>
);

export default Contact; 