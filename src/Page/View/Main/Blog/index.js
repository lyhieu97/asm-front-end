
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import swal from 'sweetalert'


const BlogManagement = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        loadBlog();
    }, []);

    const loadBlog = async () => {
        const result = await axios.get("http://localhost:3005/blogs");
        setBlog(result.data);
    }

    const deleteBlog = async (id) => {
        if (confirm('Are you sure ?')) {  //eslint-disable-line
            await axios.delete(`http://localhost:3005/blogs/${id}`);
            swal("Deleted successfully!", "", "success");
            loadBlog();
        }
    }

    return (
        <div id="all">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div id="blog-listing" className="col-lg-9">
                            <div className="box">
                                <h1>BLOG !!</h1>
                            </div>
                            {blog.map(({ id, title, image, name, comment }) =>
                                (
                                    <div className="post">
                                        <h2><Link to={`/blogdetail/${id}`}>{title}</Link></h2>
                                        <p className="author-category">By <a href="#">{name}</a> in <a href>Fashion and style</a></p>
                                        <hr />
                                        <p className="date-comments"><a href="#"><i className="fa fa-calendar-o" /> August 12, 2020</a><a href="#"><i className="fa fa-comment-o" /> 0 Comments</a></p>
                                        <div className="image"><a href="3"><img src={image} alt="Example blog post alt" className="img-fluid" /></a></div>
                                        <p className="intro">{comment}</p>
                                        <p className="read-more"><a href="#" className="btn btn-primary">Continue reading</a></p>
                                    </div>
                                ))}
                            <div className="pager d-flex justify-content-between">
                                <div className="previous"><a href="#" className="btn btn-outline-primary">← Older</a></div>
                                <div className="next disabled"><a href="#" className="btn btn-outline-secondary disabled">Newer →      </a></div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card sidebar-menu mb-4">
                                <div className="card-header">
                                    <h3 className="h4 panel-title">Blog</h3>
                                </div>
                                <div className="card-body">
                                    <ul className="nav flex-column nav-pills">
                                        <li><a href="blog.html" className="nav-link">About us</a></li>
                                        <li><a href="blog.html" className="nav-link">Fashion</a></li>
                                        <li><a href="blog.html" className="nav-link">News and gossip</a></li>
                                        <li><a href="blog.html" className="nav-link">Design</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="banner"><a href="#"><img src="https://ordixi.com/wp-content/uploads/2019/08/giay-adidas-alphabounce-beyond-w-xanh-b4361814.jpg" alt="sales 2014" className="img-fluid" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
BlogManagement.propTypes = {
}

export default BlogManagement

