import { useState, useEffect, useRef } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navMenuRef = useRef(null);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  // Load saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        const navToggle = document.querySelector(".nav__toggle");
        if (navToggle && !navToggle.contains(event.target)) {
          setMenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Portfolio Data
  const data = {
    name: "SAMVHABA GHOSH",
    title: "B.Sc. Zoology Student",
    location: "South Rajyadharpir Ghosh para, Serampore, Hooghly",
    email: "samvhabaghosh@gmail.com",
    phone: "XXXXXXXXXX",
    resumeUrl:
      "https://drive.google.com/file/d/1lzcLxscdZ2krin84c6U7VEtnOX5TRQZm/view?usp=drive_link",
    education: [
      {
        school: "Barrackpore Rastraguru Surendranath College",
        degree: "B.Sc. in Zoology",
        grade: "8.86 CGPA",
        years: "2022 - 2025",
      },
      {
        school: "Rajyadharpur Netaji Girls High School",
        degree: "XII (WBCHSE)",
        grade: "77%",
        years: "2022",
      },
    ],
    languages: [
      { name: "Bengali", level: "99%" },
      { name: "English", level: "79%" },
      { name: "Hindi", level: "49%" },
    ],
    projects: [
      { title: "Wildlife Survey", desc: "Biodiversity field survey project." },
      { title: "Species ID Tool", desc: "Tool to classify species quickly." },
      { title: "Lab Report Portal", desc: "Digital lab records system." },
    ],
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header id="header" className="header">
        <div className="container">
          <nav className="nav">
            {/* Brand */}
            <a href="#hero" className="nav__brand">
              <i className="ri-code-s-slash-line"></i>
              {data.name}
            </a>

            {/* Navigation Menu */}
            <div
              ref={navMenuRef}
              className={`nav__menu ${menuOpen ? "active" : ""}`}
              id="nav-menu"
            >
              <ul className="nav__list">
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#qualification" onClick={() => setMenuOpen(false)}>Qualification</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>

              {/* Dark Mode toggle (mobile) */}
              <div className="theme-toggle-mobile">
                <label className="theme-switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <span className="slider round"></span>
                </label>
                <span>{darkMode ? "" : ""}</span>
              </div>

              {/* Close button (mobile menu) */}
              <div className="nav__close" onClick={() => setMenuOpen(false)}>
                <i className="ri-close-line"></i>
              </div>
            </div>

            {/* Actions (desktop) */}
            <div className="nav__actions">
              {/* Dark Mode toggle (desktop) */}
              <label className="theme-switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
              </label>

              {/* Hamburger toggle */}
              <div className="nav__toggle" onClick={toggleMenu}>
                <i className="ri-menu-3-line"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* ============ MAIN SECTIONS ============ */}
      <main className="main">
        {/* Hero */}
        <section id="hero" className="hero">
          <div className="container d-grid hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">
                Hi, I am {data.name},<br /> {data.title}.
              </h1>
              <p className="hero__description">
                Focused on animal biology, behavior, and conservation. Dedicated
                to wildlife research and biodiversity studies.
              </p>
              <div className="hero__info">
                <div className="hero__info-wrapper">
                  <p className="hero__info-number">0</p>
                  <h2 className="hero__info-title">
                    Years<br />Experience
                  </h2>
                </div>
                <div className="hero__info-wrapper">
                  <p className="hero__info-number">{data.projects.length}+</p>
                  <h2 className="hero__info-title">
                    Projects<br />Completed
                  </h2>
                </div>
              </div>
            </div>
            <div className="hero__img-wrapper">
              <img
                src="/src/assets/profile.jpg"
                alt="Profile"
                className="hero__img"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">About Me</h2>
              <span className="section__subtitle">Who am I</span>
            </div>
            <div className="d-grid about__wrapper">
              <div className="about__content">
                <h3 className="about__title">A dedicated Zoology student</h3>
                <p className="about__description">
                  Currently pursuing B.Sc. in Zoology, learning core biological
                  concepts like genetics, physiology, and ecology. Passionate
                  about conservation and lab-based research.
                </p>
                <a href="#projects" className="btn btn--primary">
                  Know More
                </a>
              </div>
              <div className="skills">
                <h3 className="skills__title">Languages I Speak:</h3>
                <div className="skills__wrapper">
                  {data.languages.map((l) => (
                    <div key={l.name} className="skills__content">
                      <h4>{l.name}</h4>
                      <p>{l.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification */}
        <section id="qualification" className="section qualification">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Qualification</h2>
              <span className="section__subtitle">Education</span>
            </div>
            <div className="d-grid qualification__content">
              {data.education.map((ed) => (
                <div key={ed.school} className="qualification__item">
                  <h3 className="qualification__title">{ed.degree}</h3>
                  <p className="qualification__description">
                    {ed.school} • {ed.grade}
                  </p>
                  <span className="qualification__date">{ed.years}</span>
                </div>
              ))}
            </div>
            <div className="qualification__footer">
              <p className="qualification__footer-text">See my full resume</p>
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section project">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Projects</h2>
              <span className="section__subtitle">My recent work</span>
            </div>
            <div className="d-grid project__wrapper">
              {data.projects.map((p) => (
                <div key={p.title} className="project__content">
                  <div className="project__img">Image</div>
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__description">{p.desc}</p>
                  <a href="#" className="project__link">
                    View Project <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Contact</h2>
              <span className="section__subtitle">Get in touch</span>
            </div>
            <div className="d-grid contact__wrapper">
              <div className="contact__form">
                <form>
                  <input type="text" placeholder="Your name" />
                  <input type="email" placeholder="you@example.com" />
                  <textarea rows="4" placeholder="Hi!"></textarea>
                  <button type="button" className="btn btn--primary">
                    Send
                  </button>
                </form>
              </div>
              <div className="contact__info">
                <div className="contact__info-item">
                  <i className="ri-mail-line"></i>
                  <div className="contact__info-details">
                    <h4>Email</h4>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </div>
                </div>
                <div className="contact__info-item">
                  <i className="ri-phone-line"></i>
                  <div className="contact__info-details">
                    <h4>Phone</h4>
                    <p>{data.phone}</p>
                  </div>
                </div>
                <div className="contact__info-item">
                  <i className="ri-map-pin-line"></i>
                  <div className="contact__info-details">
                    <h4>Address</h4>
                    <p>{data.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} {data.name} — Built with React
      </footer>
    </div>
  );
}
