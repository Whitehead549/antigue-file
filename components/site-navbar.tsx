const links = [
  { label: "Home", href: "#home" },
  { label: "The Attic", href: "#attic" },
  { label: "Virtual Tour", href: "#collections" },
]

export function SiteNavbar() {
  return (
    <header className="site-header">
      <a className="brand-wordmark" href="#home" aria-label="Inglewood Antique Market home">
        Inglewood Antique Market
      </a>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  )
}
