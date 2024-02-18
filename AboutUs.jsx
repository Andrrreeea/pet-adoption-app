import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
      </header>

      <section id="mission">
        <h2>Our Mission</h2>
        <p>
          Welcome to FluffNStuff, where we're not just about pets; we're about
          finding companionship and making a difference. Our mission is to bring
          joy to your life and create a positive impact on the pet lovers
          community.
        </p>
      </section>

      <section id="team">
        <h2>Meet Our Team</h2>

        <div className="team-member">
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
          <p>
            With a passion for animals, John is dedicated to creating a platform
            that connects pets with loving families.
          </p>
        </div>

        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
          <p>
            Jane's expertise in technology ensures a seamless and enjoyable
            experience for our users.
          </p>
        </div>

      </section>

      <section id="story">
        <h2>Our Story</h2>
        <p>
          Established in 2023, FluffNStuff revolutionizes the pet adoption
          experience. We believe in making a positive impact by connecting pets
          with caring individuals and families.
        </p>
      </section>

      <section id="values">
        <h2>Our Values</h2>
        <ul>
          <li>Kindness</li>
          <li>Love</li>
          <li>Compassion</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Get In Touch</h2>
        <p>Email: fluffnstuff23@gmail.com</p>
        <p>Social Media:
          <a href="https://www.facebook.com/FluffNStuff" target="_blank" rel="noopener noreferrer">Facebook</a>,
          <a href="https://www.twitter.com/FluffNStuff" target="_blank" rel="noopener noreferrer">Twitter</a>,
          <a href="https://www.instagram.com/FluffNStuff" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </section>

      <section id="community">
        <h2>Join Our Community</h2>
        <p>
          Connect with us on social media to stay updated on the latest news,
          features, and community activities:
        </p>
        <ul>
          <li><a href="https://www.facebook.com/FluffNStuff" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/FluffNStuff" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/FluffNStuff" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
