
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
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Blog Management</h6>
                </div>
                <br />
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Comment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blog.map(({ id, title, image, name, email, comment }, index) =>
                                    (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{title}</td>
                                            <td>
                                                <img src={image} width="50px" height="50" />
                                            </td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{comment}</td>
                                            <td>
                                                <Link className="fa fa-trash-o mr-4" onClick={() => deleteBlog(id)}></Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
BlogManagement.propTypes = {
}

export default BlogManagement

