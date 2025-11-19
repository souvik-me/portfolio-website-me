import React from 'react'
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The AI Revolution in Business Analytics',
      category: 'AI & Analytics',
      badge: 'Trending',
      excerpt: 'How artificial intelligence is transforming the way we analyze data and make strategic decisions in modern businesses.',
      date: 'Nov 12, 2025',
      readTime: '6 min read',
      image: '/src/assets/images/blog-hero.jpg'
    },
    {
      id: 2,
      title: 'Building Data-Driven Culture',
      category: 'Strategy',
      excerpt: 'Essential strategies for fostering a data-centric mindset across your organization and empowering teams with analytics.',
      date: 'Nov 8, 2025',
      readTime: '8 min read',
      image: '/src/assets/images/project2.jpg'
    },
    {
      id: 3,
      title: 'Dashboard Design Best Practices',
      category: 'Tutorial',
      excerpt: 'Create compelling, user-friendly dashboards that drive action. Learn the principles of effective data visualization.',
      date: 'Nov 5, 2025',
      readTime: '5 min read',
      image: '/src/assets/images/project3.jpg'
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="section-badge">
          <span>📈</span> Latest Insights
        </div>
        
        <h2 className="section-title text-center">
          <span>Thoughts & Insights</span>
        </h2>
        
        <p className="section-subtitle text-center">
          Sharing knowledge about business analytics, data science, and digital transformation
        </p>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={post.id} className={`blog-card ${index === 0 ? 'featured' : ''}`}>
              {post.badge && <div className="blog-badge">{post.badge}</div>}
              
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                
                <div className="blog-meta">
                  <div className="meta-item">
                    <FaCalendar /> {post.date}
                  </div>
                  <div className="meta-item">
                    <FaClock /> {post.readTime}
                  </div>
                </div>
                
                <a href="#" className="read-more">
                  Read Full Article <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="explore-btn">
          <button className="secondary-btn">
            Explore All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
