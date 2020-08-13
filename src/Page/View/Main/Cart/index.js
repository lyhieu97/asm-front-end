
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const View = () => {

    const [product, setProduct] = useState({
        name: "",
        image: "",
        price: "",
        quantity: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:3005/products/${id}`, product);
        setProduct(result.data);
    };

    return (
        <div id="all">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div id="basket" className="col-lg-9">
                            <div className="box">
                                <form method="post" action="checkout1.html">
                                    <h1>Shopping cart</h1>
                                    {/* <p className="text-muted">You currently have 3 item(s) in your cart.</p> */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Quantity</th>
                                                    <th>Unit price</th>
                                                    <th colSpan={2}>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{id}</td>
                                                    <td>{product.name}</td>
                                                    <td><img src={product.image} width="50" height="50" /></td>
                                                    <td>
                                                        <input type="number" className="form-control" />
                                                    </td>
                                                    <td>{product.price}$</td>
                                                    <td></td>
                                                    <td><a href="#"><i className="fa fa-trash-o" /></a></td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={5}>Total</th>
                                                    <th colSpan={2}></th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                                        <div className="left"><Link to={'/'} className="btn btn-outline-secondary"><i className="fa fa-chevron-left" /> Continue shopping</Link></div>
                                        <div className="right">
                                            <button className="btn btn-outline-secondary"><i className="fa fa-refresh" /> Update cart</button>
                                            <button type="submit" className="btn btn-primary">Proceed to checkout <i className="fa fa-chevron-right" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="order-summary" className="box">
                                <div className="box-header">
                                    <h3 className="mb-0">Order summary</h3>
                                </div>
                                <p className="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Order subtotal</td>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <td>Shipping and handling</td>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <td>Tax</td>
                                                <th></th>
                                            </tr>
                                            <tr className="total">
                                                <td>Total</td>
                                                <th></th>
                                            </tr>
                                        </tbody>
                                    </table>
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