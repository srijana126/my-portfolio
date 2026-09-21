import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            SRIJANA DANGAL
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col gap-5 border-t px-8 py-5 md:hidden">

          <a href="#home" className="text-sm font-medium transition-colors hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>

          <a href="#about"  className="text-sm font-medium transition-colors hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>
            About
          </a>

          <a href="#skills" className="text-sm font-medium transition-colors hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" className="text-sm font-medium transition-colors hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" className="text-sm font-medium transition-colors hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar