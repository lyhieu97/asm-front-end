
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'


const View = () => {

    const [blog, setBlog] = useState({
        title: "",
        image: "",
        name: "",
        email: "",
        comment: ""
    });

    const { id } = useParams();

    // const { title, image, name, email, comment } = blog;

    // const onInputChange = e => {
    //     setBlog ({ ...blog, [e.target.name]: e.target.value});
    // };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:3005/blogs", blog);
    //     swal("Comment successfully !", "", "success");
    // };


    useEffect(() => {
        loadBlog();
    }, []);

    const loadBlog = async () => {
        const result = await axios.get(`http://localhost:3005/blogs/${id}`);
        setBlog(result.data);
    };

    return (
        <div id="all">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="box">
                                <h1>BLOG POST !!!</h1>
                            </div>
                        </div>
                        <div id="blog-post" className="col-lg-9">
                            <div className="box">
                                <h1>{blog.title}</h1>
                                <p className="author-date">By <a href="#">{blog.name}</a> |  August 12, 2020</p>
                                <p className="lead">{blog.comment}</p>
                                <div id="post-content">
                                    <p><img src={blog.image} alt="Example blog post alt" className="img-fluid" /></p>
                                </div>
                                <div id="comment-form">
                                    <h4>Leave comment</h4>
                                    <form>  
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name <span className="required">*</span></label>
                                                    <input 
                                                    id="name" 
                                                    type="text" 
                                                    className="form-control"
                                                    // name = "name"
                                                    // value = {name}
                                                    // onChange = {e => onInputChange(e)}
                                                    required
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                                    <input id="email" 
                                                    type="text" 
                                                    className="form-control"
                                                    // name = "email"
                                                    // value = {email}
                                                    // onChange = {e => onInputChange(e)}
                                                    required
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="comment">Comment <span className="required">*</span></label>
                                                    <textarea id="comment" 
                                                    rows={4} 
                                                    className="form-control" 
                                                    defaultValue={""}
                                                    // name = "comment"
                                                    // value = {comment}
                                                    // onChange = {e => onInputChange(e)}
                                                    required
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-right">
                                                <button className="btn btn-primary"><i className="fa fa-comment-o" /> Post comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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

export default View