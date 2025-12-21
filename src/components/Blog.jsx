import React from 'react'
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { blogData } from '../data/blogData'
import './Blog.css'

const Blog = () => {
  const navigate = useNavigate()

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
          {blogData.map((post, index) => (
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

                <button onClick={() => navigate(`/blog/${post.id}`)} className="read-more-btn">
                  Read Full Article <FaArrowRight />
                </button>
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
