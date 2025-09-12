"use client";
export default function Footer() {
  return (
    <footer className="w-full bg-[#1e293b] text-white pt-16 pb-8 px-4 mt-12 border-t-4 border-[#3b82f6]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#fbbf24] rounded-full w-12 h-12 flex items-center justify-center font-extrabold text-[#1e293b] text-2xl shadow">Q</span>
            <span className="text-2xl font-extrabold tracking-wide">QUIZ SYSTEM</span>
          </div>
          <p className="text-gray-300 mb-4">A modern, secure, and interactive quiz platform for schools, teachers, and students. Empowering digital learning and assessment for the next generation.</p>
          <div className="flex gap-3 mt-4">
            {/* Social icons here (same as before) */}
            {/* ... */}
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#fbbf24]">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#fbbf24] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#fbbf24] transition">About</a></li>
            <li><a href="#pricing" className="hover:text-[#fbbf24] transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-[#fbbf24] transition">Contact</a></li>
            <li><a href="#pages" className="hover:text-[#fbbf24] transition">Pages</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#fbbf24]">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">info@quizsystem.com</li>
            <li className="flex items-center gap-2">+1 (555) 123-4567</li>
            <li className="flex items-center gap-2">1234 School Lane, EdTech City, 12345</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#fbbf24]">Newsletter</h3>
          <form className="flex flex-col gap-3">
            <input type="email" placeholder="Your email address" className="px-4 py-2 rounded bg-[#24304a] text-white border border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#fbbf24]" />
            <button type="submit" className="px-4 py-2 rounded bg-[#fbbf24] text-[#1e293b] font-bold hover:bg-[#3b82f6] hover:text-white transition">Subscribe</button>
          </form>
          <p className="text-xs text-gray-400 mt-2">Get the latest updates, tips, and news from Quiz System. No spam, ever.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-[#3b82f6]/30 text-sm text-gray-400 gap-4">
        <div>&copy; {new Date().getFullYear()} Quiz System. All rights reserved.</div>
        <div className="flex gap-4 flex-wrap">
          <a href="#" className="hover:text-[#fbbf24] transition">Terms of Service</a>
          <a href="#" className="hover:text-[#fbbf24] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#fbbf24] transition">Cookie Policy</a>
          <a href="#" className="hover:text-[#fbbf24] transition">Accessibility</a>
          <a href="#" className="hover:text-[#fbbf24] transition">Help Center</a>
        </div>
      </div>
    </footer>
  );
}
