import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'


const UpdateProduct = () => {

    let history = useHistory();

    const { id } = useParams();

    const [product, setProduct] = useState({
        id: "",
        name: "",
        image: "",
        price: "",
        description: "",
        quantity: ""
    });

    
    const { name, image, price, description, quantity } = product;
    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadProduct()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/products/${id}`, product);
        swal("Updated successfully!","","success");
        history.push('/admin/products');
    };

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:3005/products/${id}`);
        setProduct(result.data);
    };

    return (
        <div>
            <div className="card card-body my-3">
                <form onSubmit={e => onSubmit(e)}>
                    <h6 className="m-0 font-weight-bold text-primary">Edit A Products</h6>
                    <br></br>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Name"
                            name="name"
                            onChange={e => onInputChange(e)}
                            value={name} aria-describedby="nameHelp"
                            required
                             />
                    </div>
                    {/* <div className="input-group">
                        <input 
                        type="text" 
                        className="form-control mt-2" 
                        placeholder="Image" 
                        name="image"
                        onChange={e => onInputChange(e)}
                        value={image} aria-describedby="nameHelp"
                        required
                         />
                    </div> */}
                    <div className="input-group">
                        <input
                            type="number"
                            className="form-control mt-2"
                            placeholder="Price"
                            name="price"
                            onChange={e => onInputChange(e)}
                            value={price} aria-describedby="priceHelp"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="number"
                            className="form-control mt-2"
                            placeholder="Quantity"
                            name="quantity"
                            onChange={e => onInputChange(e)}
                            value={quantity} aria-describedby="quantityHelp"
                            required
                             />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Description"
                            name="description"
                            onChange={e => onInputChange(e)}
                            value={description} aria-describedby="priceHelp"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Edit</button>
                </form>
            </div>
        </div>
    )
}

UpdateProduct.propTypes = {

}

export default UpdateProduct
