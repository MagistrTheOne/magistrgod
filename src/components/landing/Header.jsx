import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-black/70 border-b border-purple-600/20 shadow-lg">
      <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 text-white">

        {/* ЛОГО */}
        <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-500 to-purple-400 bg-clip-text text-transparent select-none">
          MagistrGod<span className="text-purple-300">.AI</span>
        </div>

        {/* ДЕСКТОП НАВИГАЦИЯ */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a
            href="#features"
            className="relative group transition"
          >
            <span className="group-hover:text-purple-400 transition">Features</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            href="#price"
            className="relative group transition"
          >
            <span className="group-hover:text-purple-400 transition">Price</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            href="#contact"
            className="relative group transition"
          >
            <span className="group-hover:text-purple-400 transition">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            href="/login"
            className="ml-4 bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-2 rounded-md shadow-md hover:scale-105 transition font-semibold"
          >
            Sign In
          </a>
        </nav>

        {/* МОБИЛЬНАЯ КНОПКА */}
        <button className="md:hidden text-purple-300" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-3 text-sm font-medium">
          <a href="#features" className="block text-white hover:text-purple-400">Features</a>
          <a href="#price" className="block text-white hover:text-purple-400">Price</a>
          <a href="#contact" className="block text-white hover:text-purple-400">Contact</a>
          <a
            href="/login"
            className="block bg-gradient-to-r from-purple-600 to-fuchsia-500 text-center py-2 rounded-md shadow hover:brightness-110 font-semibold"
          >
            Sign In
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
