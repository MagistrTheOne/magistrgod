const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-white py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-neon">
          Contact Us
        </h2>
        <p className="text-gray-400 mb-10">
          Есть идея, фидбек или желание поработать с нами? Напиши!
        </p>

        <form className="flex flex-col gap-5 text-left">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Alexei WaveSynth"
              className="w-full px-4 py-3 rounded-md bg-secondary text-white placeholder-gray-500 border border-purple-800/30 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              placeholder="you@dawverse.com"
              className="w-full px-4 py-3 rounded-md bg-secondary text-white placeholder-gray-500 border border-purple-800/30 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Расскажите, что вы хотите создать вместе с AI-композитором"
              className="w-full px-4 py-3 rounded-md bg-secondary text-white placeholder-gray-500 border border-purple-800/30 focus:outline-none focus:ring-2 focus:ring-purple-600 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white py-3 rounded-md shadow-md hover:scale-105 transition font-semibold tracking-wide"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
