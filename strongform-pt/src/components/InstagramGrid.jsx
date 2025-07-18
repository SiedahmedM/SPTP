import React from 'react'
import './InstagramGrid.css'

function InstagramGrid() {
  // Placeholder Instagram posts - in production, you'd integrate with Instagram API
  const posts = [
    {
      id: 1,
      image: '/placeholder-instagram-1.jpg',
      alt: 'Athlete training session'
    },
    {
      id: 2,
      image: '/placeholder-instagram-2.jpg',
      alt: 'Running analysis'
    },
    {
      id: 3,
      image: '/placeholder-instagram-3.jpg',
      alt: 'Strength training'
    },
    {
      id: 4,
      image: '/placeholder-instagram-4.jpg',
      alt: 'Recovery session'
    },
    {
      id: 5,
      image: '/placeholder-instagram-5.jpg',
      alt: 'Client success'
    },
    {
      id: 6,
      image: '/placeholder-instagram-6.jpg',
      alt: 'Movement assessment'
    }
  ]

  return (
    <section className="instagram-grid section">
      <div className="container">
        <h2 className="section-title">
          Follow the Comebacks — <span className="text-accent">@strongformpt</span>
        </h2>
        <div className="grid-container">
          {posts.map((post) => (
            <a 
              key={post.id}
              href="https://instagram.com/strongformpt"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <div className="post-placeholder">
                <div className="instagram-icon">📷</div>
                <p>Instagram Post {post.id}</p>
              </div>
              <div className="post-overlay">
                <div className="instagram-logo">📱</div>
              </div>
            </a>
          ))}
        </div>
        <div className="instagram-cta">
          <a 
            href="https://instagram.com/strongformpt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramGrid