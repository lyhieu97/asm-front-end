
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const View = () => {

    const [product, setProduct] = useState({
        name: "",
        image: "",
        price: "",
        quantity: "",
        description: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:3005/products/${id}`);
        setProduct(result.data);
    };

    return (
        <div id="all">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div id="productMain" className="row">
                                <div className="col-md-6">
                                    <img src={product.image} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="box">
                                        <h1 className="text-center">{product.name}</h1>
                                        <p className="price">{product.price}$</p>
                                        <p className="text-center buttons"><Link to={`/cart/${id}`} className="btn btn-primary"><i className="fa fa-shopping-cart" /> Add to cart</Link><Link to={'/'} className="btn btn-outline-primary"><i className="fa fa-heart" />Back To Products</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div id="details" className="box">
                                <p />
                                <h4>Description</h4>
                                <p>{product.description}</p>
                                <hr />
                                <div className="social">
                                    <h4>Show it to your friends</h4>
                                    <p><a href="#" className="external facebook"><i className="fa fa-facebook" /></a><a href="#" className="external gplus"><i className="fa fa-google-plus" /></a><a href="#" className="external twitter"><i className="fa fa-twitter" /></a><a href="#" className="email"><i className="fa fa-envelope" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View