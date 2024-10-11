import React from "react";
import "../styles/Blogs.css"

const Blogs = () => {
    return(
        <div className="blog-container">
        <header className="blog-header">
            <h1>Blogs</h1>
            <p>Stay updated with the latest news and articles</p>
        </header>

        <div className="blog-posts">
            <div className="blog-post">
                <h2>Post Title 1</h2>
                <p className="post-date">Posted on October 10, 2024</p>
                <p className="post-content">
                    This is a summary of the first blog post. It gives a brief
                    introduction to the topic and entices readers to click and read
                    more.
                </p>
                <a href="#" className="read-more">Read more</a>
            </div>

            <div className="blog-post">
                <h2>Post Title 2</h2>
                <p className="post-date">Posted on October 5, 2024</p>
                <p className="post-content">
                    Here's another interesting post. The content touches on another
                    exciting subject that will engage the audience.
                </p>
                <a href="#" className="read-more">Read more</a>
            </div>

            {/* Add more blog posts as needed */}
        </div>
    </div>
    )
}

export default Blogs;