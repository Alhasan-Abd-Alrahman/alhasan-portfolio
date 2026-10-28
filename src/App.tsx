import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Menu, X } from 'lucide-react';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const navItems = [{ href: '#home', label: 'Home' }, { href: '#about', label: 'Approach' }, { href: '#projects', label: 'Work' }, { href: '#toolkit', label: 'Toolkit' }, { href: '#experience', label: 'Journey' }];
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean) as HTMLElement[];
      const current = sections.filter(section => section.getBoundingClientRect().top <= 150).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen); return () => document.body.classList.remove('menu-open'); }, [menuOpen]);
  return <div className="site-wrap"><div className="ambient ambient-left" /><div className="ambient ambient-right" />
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}><a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">A<span>.</span></span><span className="brand-name">ALHASAN<span> / FRONTEND</span></span></a><nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`}>{navItems.map(item => <a key={item.href} className={active === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav><a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button></header>
    <main><Hero /><div className="ticker" aria-label="Specialties"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <div className="ticker-set" key={i}><span>REACT</span><i>✳</i><span>VUE.JS</span><i>✳</i><span>UI ENGINEERING</span><i>✳</i><span>PERFORMANCE</span><i>✳</i><span>DESIGN SYSTEMS</span><i>✳</i><span>THOUGHTFUL CODE</span><i>✳</i></div>)}</div></div><Manifesto /><Projects /><Skills /><Experience /><Contact /></main>
    <footer className="site-footer"><a className="footer-brand" href="#home">ALHASAN<span>.</span></a><p>Designed with intent. Built with care.</p><div className="footer-right"><span className="mono">DAMASCUS · SYRIA</span><a href="#home">BACK TO TOP <ArrowUp size={13} /></a></div><span className="footer-copy">© {new Date().getFullYear()} Alhasan Abd Alrahman</span></footer>
    <AnimatePresence>{scrolled && <motion.button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .7 }}><ArrowUp size={17} /></motion.button>}</AnimatePresence>
  </div>;
}
