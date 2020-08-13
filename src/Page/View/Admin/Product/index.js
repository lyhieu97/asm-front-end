
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import swal from 'sweetalert'


const ProductsManager = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get("http://localhost:3005/products");
    setProduct(result.data);
  }

  const deleteProduct = async (id) => {
    if (confirm('Are you sure ?')) {  //eslint-disable-line
      await axios.delete(`http://localhost:3005/products/${id}`);
      swal("Deleted successfully!","","success");
      loadProduct();
    }
  }
  
  const deleteallProduct = async () => {
    if (confirm('Are you sure ?')) {  //eslint-disable-line
      await axios.delete("http://localhost:3005/products");
      swal("Deleted successfully!","","success");
      loadProduct();
    }
  }

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Products Management</h6>
        </div>
        <br />
        <div>
          <Link to={"/admin/addproducts"} className="btn btn-primary mr-2">Add New Products</Link>
        </div>
        <br/>
        <div>
          <Link onClick={() => deleteallProduct()} className="btn btn-primary mr-2">Remove all</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  {/* <th>Description</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map(({ id, name, image, price, quantity, description }, index) =>
                  (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{name}</td>
                      <td>
                        <img src={image} width="50px" height="50" />
                      </td>
                      <td>{price}$</td>
                      <td>{quantity}</td>
                      {/* <td>{description}</td> */}
                      <td>
                        <Link  className="fa fa-trash-o mr-4" onClick={() => deleteProduct(id)}></Link>
                        <Link className="fa fa-pencil"  to={`/admin/updateproducts/${id}`}></Link>
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
ProductsManager.propTypes = {
}

export default ProductsManager
