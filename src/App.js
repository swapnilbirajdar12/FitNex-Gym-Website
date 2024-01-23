import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <nav>
          <h1>FitNex</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h2>Welcome to the Best Gym in Town</h2>
            <p>Start your fitness journey with us today.</p>
            <a href="#contact" className="cta-btn">Join Now</a>
          </div>
        </section>

        <section id="about" class="hero">
            <div class="hero-content">
              <h2>About Us</h2>
              <p>Welcome to FitNex, your ultimate destination for achieving your fitness goals and living a healthier life. Our gym is dedicated to providing a supportive and motivating environment where you can transform your body, mind, and soul.</p>
              <p>At FitNex, we believe that fitness is not just a physical journey, but a holistic approach to well-being. Our programs incorporate mindfulness, nutrition guidance, and stress reduction techniques to ensure you achieve a balanced and healthy lifestyle.</p>
              <p>Join our fitness community today and embark on a transformative journey to a stronger, healthier, and happier you. We're here to support you every step of the way.</p>
              <a href="#contact" class="cta-btn">Get Started</a>
            </div>
          </section>

          <section id="services" class="hero">
          <div class="hero-content">
            <h2>Our Services</h2>
            <ul>
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Cardio Equipment</li>
              <li>Weight Training</li>
            </ul>
          </div>
        </section>

        <section id="contact" class="hero">
          <div class="hero-content">
            <h2>Contact Us</h2>
            <form id="contactForm">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
    </main>

      <footer>
        <p>&copy; FitNex 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
