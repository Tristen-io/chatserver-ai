import React from 'react'
import '../styles/navbar.css'
const NavBar = () => {
  const brand = 'My Site';
  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];
  const actions = [
    { text: 'Login', onClick: () => console.log('Login clicked') },
    { text: 'Signup', onClick: () => console.log('Signup clicked') },
  ];
  return (
    <nav className="navbar">
      {/* Navbar brand (logo) */}
      <div className="brand">{brand}</div>

      {/* Navbar links */}
      <div>
        {links.map((link) => (
          <a key={link.text} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>

      {/* Navbar actions (e.g. login, signup buttons) */}
      <div className="actions">
        {actions.map((action) => (
          <button key={action.text} onClick={action.onClick}>
            {action.text}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar