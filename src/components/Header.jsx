const navLinks = [
  { href: '#hero-section', label: 'home' },
  { href: '#about-section', label: 'about' },
  { href: '#project-section', label: 'projects' },
  { href: '#connect-projects', label: 'connect' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-evenly m-auto bg-pearl">
      <nav className="flex items-center bg-pearl h-16 w-full px-16 justify-between">
        <a className="font-display font-normal text-2xl text-black no-underline transition-colors duration-300 hover:text-green" href="#hero-section">
          Ariana Sookoo
        </a>
        <ul className="flex list-none p-0 m-0 gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="text-base">
              <a
                className="text-grey no-underline font-normal leading-normal transition-colors duration-300 hover:text-green"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
