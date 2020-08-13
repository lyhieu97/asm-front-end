
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get("http://localhost:3005/products");
        setProduct(result.data);
    }
    return (
        <div id="all">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="box">
                                <h1>SHOP MINI</h1>
                                <hr />
                                <p>In our Shop mini department we offer wide selection of the best products we have found and carefully selected worldwide.</p>
                            </div>
                            <div className="box info-bar">
                                <div className="row">
                                    <div className="col-md-12 col-lg-4 products-showing">Showing <strong>12</strong> of <strong>25</strong> products</div>
                                    <div className="col-md-12 col-lg-7 products-number-sort">
                                        <form className="form-inline d-block d-lg-flex justify-content-between flex-column flex-md-row">
                                            <div className="products-number"><strong>Show</strong><a href="#" className="btn btn-sm btn-primary">12</a><a href="#" className="btn btn-outline-secondary btn-sm">24</a><a href="#" className="btn btn-outline-secondary btn-sm">All</a><span>products</span></div>
                                            <div className="products-sort-by mt-2 mt-lg-0"><strong>Sort by</strong>
                                                <select name="sort-by" className="form-control">
                                                    <option>Price</option>
                                                    <option>Name</option>
                                                    <option>Sales first</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row products">
                                {product.map(({ id, name, image, price, quantity }, index) =>
                                    (
                                        <div className="col-lg-3 col-md-4">
                                            <div className="product">
                                                <div className="flip-container">
                                                    <a><img src={image} alt="" className="img-fluid" /></a>
                                                </div>
                                                <div className="text">
                                                    <h3><a>{name}</a></h3>
                                                    <p className="price">
                                                        <del />{price}$
                                                    </p>
                                                    <p className="buttons"><Link to={`/detail/${id}`} className="btn btn-outline-secondary">View detail</Link><Link to={`/cart/${id}`} className="btn btn-primary"><i className="fa fa-shopping-cart" />Add to cart</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="pages">
                                <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                                    <ul className="pagination">
                                        <li className="page-item"><a href="#" aria-label="Previous" className="page-link"><span aria-hidden="true">«</span><span className="sr-only">Previous</span></a></li>
                                        <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                                        <li className="page-item"><a href="#" className="page-link">4</a></li>
                                        <li className="page-item"><a href="#" className="page-link">5</a></li>
                                        <li className="page-item"><a href="#" aria-label="Next" className="page-link"><span aria-hidden="true">»</span><span className="sr-only">Next</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home
