import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from 'react-icons/fa'
import { blogData } from '../data/blogData'
import './Blog.css' // Reusing Blog CSS for now, might need specific styles

const BlogPost = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = blogData.find(p => p.id === parseInt(postId))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [postId])

    if (!post) {
        return (
            <div className="blog-post-container error-container">
                <h2>Blog Post Not Found</h2>
                <button onClick={() => navigate('/')} className="back-btn">
                    <FaArrowLeft /> Back to Home
                </button>
            </div>
        )
    }

    return (
        <div className="blog-post-page">
            <div className="blog-post-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${post.image})` }}>
                <div className="blog-post-hero-content">
                    <button onClick={() => navigate('/')} className="back-btn-hero">
                        <FaArrowLeft /> Back to Home
                    </button>
                    <span className="blog-post-category">{post.category}</span>
                    <h1>{post.title}</h1>
                    <div className="blog-post-meta">
                        <span><FaCalendar /> {post.date}</span>
                        <span><FaClock /> {post.readTime}</span>
                    </div>
                </div>
            </div>

            <div className="blog-post-content-container">
                <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                <div className="blog-post-footer">
                    <button onClick={() => navigate('/')} className="secondary-btn">
                        <FaArrowLeft /> Back to All Articles
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
