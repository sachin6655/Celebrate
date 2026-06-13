import { useState } from 'react'
import CRLogo from './assets/img/CRLogo.png'
import WhatsAppImg from './assets/img/WhatsApp.png'
import AjayDevgnImg from './assets/img/Actors/AjayDevgn.png'
import BobbyDeolImg from './assets/img/Actors/BobbyDeol.png'
import ShilpaShettyImg from './assets/img/Actors/ShilpaShetty.png'

const celebrities = [
  {
    name: 'Ajay Devgn',
    role: 'Actor, Producer & Brand Ambassador',
    description: 'Award-winning Bollywood superstar known for his strong screen presence and credibility, making him a powerful choice for brand endorsements, corporate campaigns, and product promotions.',
    badge: 'Brand Endorsements',
    image: AjayDevgnImg,
  },
  {
    name: 'Bobby Deol',
    role: 'Actor & Celebrity Influencer',
    description: 'Popular actor with broad audience appeal, ideal for brand collaborations, event appearances, product launches, and digital marketing campaigns.',
    badge: 'Celebrity Campaigns',
    image: BobbyDeolImg,
  },
  {
    name: 'Shilpa Shetty',
    role: 'Actor, Entrepreneur & Celebrity Host',
    description: 'Renowned Bollywood actor, television personality, entrepreneur, and event host known for engaging audiences and elevating brand campaigns.',
    badge: 'Brand Endorsements',
    image: ShilpaShettyImg,
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="App">
      <div className="topbar py-2">
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="topbar-text text-white small">Connect Your Business with Top Celebrities & Influencers - </div>
          <div>
              <a className="btn btn-sm btn-light rounded-pill" href="#begin"><img src={WhatsAppImg} alt="CelebRate" className="WhatsApp-img" /></a>
          </div>
        </div>
      </div>

      <header className="navbar navbar-expand-lg sticky-top bg-white shadow-sm py-2">
        <div className="container">
          <a className="navbar-brand d-flex flex-column align-items-center gap-1" href="#home">
              <img src={CRLogo} alt="CelebRate" className="logo-img" />
            <span className="fw-bold text-dark">CelebRate<span style={{ color: "red" }}> - Karlo</span> </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#privacy">Privacy Policies</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
              <li className="nav-item d-lg-block d-none"><a className="btn btn-outline-danger rounded-pill px-4" href="#contact">Boost My Brand Visibility</a></li>
            </ul>
          </div>
        </div>
      </header>

      <section className="hero-section py-5" id="home">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-lg-1">
              <div className="card hero-card overflow-hidden border-0 shadow-lg position-relative">
                <div className="gradient-ring"></div>
                <div id="celebrityCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4500">
                  <div className="carousel-indicators">
                    {celebrities.map((item, index) => (
                      <button
                        type="button"
                        key={item.name}
                        data-bs-target="#celebrityCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="carousel-inner">
                    {celebrities.map((item, index) => (
                      <div key={item.name} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.image} className="d-block w-100 hero-carousel-img" alt={item.name} />
                        <div className="carousel-caption d-flex flex-column align-items-start justify-content-end text-start p-4">
                          <span className="badge bg-warning text-dark mb-2">{item.badge}</span>
                          <h3 className="text-white mb-1">{item.name}</h3>
                          <p className="text-white-75 mb-0">{item.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#celebrityCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#celebrityCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-0 text-white">
              <p className="text-warning fw-semibold small mb-3">Elite Celebrity Campaigns for High-Impact Party & Brand Moments</p>
              <h1 className="display-6 fw-bold">Turn Attention Into Action with <span className="text-warning">Celebrity-Powered Marketing</span></h1>
              <p className="lead text-light mt-4">
                Build credibility, increase brand visibility, and drive customer engagement through strategic collaborations with leading celebrities, influencers, creators, and public figures.
              </p>
              <ul className="list-unstyled mt-4 feature-list">
                <li>Brand Ambassador</li>
                <li>Celebrity Endorsement</li>
                <li>Event Appearance</li>
                <li>Influencer Marketing</li>
                <li>Party & Launch Promotions</li>
              </ul>
              <a className="btn btn-theme btn-lg rounded-pill mt-4" href="#contact">Book Celebrity Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="services">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold">Services Designed for Every Brand</h2>
              <p className="text-secondary mt-3">
                Choose from premium celebrity campaigns, event hosting, influencer collaborations, and image rights management.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {['Brand Ambassador', 'Celebrity Endorsement', 'Event Appearance', 'Influencer Marketing', 'Image Rights'].map((service) => (
              <div key={service} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-danger">{service}</h5>
                    <p className="card-text text-secondary">
                      Tailored campaigns to increase visibility, authenticity, and customer trust for your business.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" id="features">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <h2 className="fw-bold">Why businesses love working with us</h2>
              <p className="text-secondary mt-3">
                We help brands connect with audiences using verified influencers and celebrities that bring credibility, emotion, and buzz.
              </p>
              <ul className="list-group list-group-flush rounded-4 overflow-hidden shadow-sm mt-4">
                <li className="list-group-item">Fast campaign matchmaking for every budget.</li>
                <li className="list-group-item">Real influencer insights and verified engagement.</li>
                <li className="list-group-item">End-to-end support from concept to execution.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {celebrities.map((item) => (
                  <div key={item.name} className="col-sm-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <span className="badge bg-danger mb-2">{item.badge}</span>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-secondary">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 contact-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-white py-5 rounded-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #d90429 0%, #ff6b6b 100%)' }}>
              <h2 className="fw-bold">Ready to start your celebrity campaign?</h2>
              <p className="lead mt-3">
                Our team is ready to connect your brand with the right talent for your audience and goals.
              </p>
              <a className="btn btn-light btn-lg rounded-pill mt-3" href="mailto:hello@celebrate.com">Talk to us now</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-white border-top">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0 small text-secondary">© 2026 CelebRate. Built with React & Bootstrap.</p>
          <div className="d-flex gap-3">
            <a href="#home" className="text-secondary text-decoration-none">Home</a>
            <a href="#services" className="text-secondary text-decoration-none">Services</a>
            <a href="#contact" className="text-secondary text-decoration-none">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
