import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      // Example: POST to your Flask endpoint
      const response = await fetch('http://127.0.0.1:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      setStatus(result.message);
    } catch (error) {
      console.error(error);
      setStatus('Error subscribing. Please try again.');
    }
  };

  // Sample data for the 3×3 grid
  const featuresData = [
    {
      title: 'Dynamic Conditional Logic',
      desc: 'Get high-quality design work at a fraction of the cost.',
      image: 'inage11.png'
    },
    {
      title: 'Real time AI Summaries',
      desc: 'We have the expertise to make your vision a reality.',
      image: 'image22.png'
    },
    {
      title: 'Security',
      desc: "We're ready to meet your evolving needs.",
      image: 'image33.png'
    },
  ];

  return (
    <div>
      {/* ------------------ Hero Section ------------------ */}
      <section className="hero-container">
        <video autoPlay loop muted className="background-video">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="overlay">
          {/* Navbar */}
          <nav className="navbar">
            <div className="logo">YourLogo</div>
            
            {/* Center pill-shaped nav */}
            <div className="nav-pill">
              <ul className="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#whowehelp">Who We Help</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQs</a></li>
              </ul>
            </div>

            <button className="notify-btn">Notify me</button>
          </nav>

          {/* Floater container for hero content */}
          <div className="hero-content" id="hero">
            <h1 className="hero-heading">
              Seamless Intake,<br />
              Instant Insights
            </h1>
            <p className="hero-subtext">
              Our company specializes in AI-powered custom dynamic intake forms that adapt to user responses 
              and generate comprehensive, easy-to-read summaries—streamlining decision-making 
              and enhancing efficiency.
            </p>

            {/* Subscription form */}
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-button">
                Get notified
              </button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </section>

      {/* ------------------ Scrolling Banner ------------------ */}
      <section className="trusted-by">
        <h2>Loved By Industry Leaders</h2>
        <div className="logo-marquee">
          <div className="marquee-track">
            {/* Replace these with your actual logo file names in /assets/ */}
            <img src="/assets/shopify.png" alt="Shopify" />
            <img src="/assets/volvo.png" alt="Volvo" />
            <img src="/assets/mobbin.png" alt="Mobbin" />
            <img src="/assets/pinterest.png" alt="Pinterest" />
            <img src="/assets/duolingo.png" alt="Duolingo" />
            <img src="/assets/m.png" alt="M" />
            <img src="/assets/jp.png" alt="JP" />
          </div>
        </div>
      </section>

      {/* ------------------ Features Section ------------------ */}
      <section className="features-page" id="features">
        <h2 className="features-title">Our Features</h2>
        <div className="features-grid">
          {featuresData.map((item, idx) => (
            <div className="feature-card" key={idx}>
              {/* If there's an image, display it above the text */}
              {item.image && (
                <img
                  src={`/assets/${item.image}`}
                  alt={item.title}
                  className="feature-image"
                />
              )}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for other sections, e.g. testimonials/FAQ */}
      <section className="placeholder" id="testimonials">
        <h2>Testimonials</h2>
        <p>Coming soon...</p>
      </section>

      <section className="placeholder" id="faq">
        <h2>FAQ</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  );
}

export default App;
