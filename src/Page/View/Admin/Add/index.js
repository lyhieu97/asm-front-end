import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form';
// import { Editor } from '@tinymce/tinymce-react'
// import firebase from '../../../../Firebase'
// import Firebase from '../../../../Firebase'


const AddProduct = () => {

    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();

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
    // const handleImg = e => {
    //     if(e.target.files[0]){
    //         const image = (e.target.files[0]);
    //         const uploadTask = Storage.ref(`images/${image.name}`).push(image);
    //     }
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3005/products", product);
        swal("Added successfully !", "", "success");
        history.push('/admin/products');
    };

    return (
        <div>
            <div className="card card-body my-3">
                <form onSubmit={e => onSubmit(e)} >
                    <h6 className="m-0 font-weight-bold text-primary">Add Products</h6>
                    <br></br>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Name"
                            name="name"
                            onChange={e => onInputChange(e)}
                            value={name}
                            aria-describedby="nameHelp"
                            ref={register}
                            required
                        />
                    </div>
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>this field is required</span>}
                    </small>
                    <div className="input-group">
                        <input
                            type="file"
                            className="custom-file-input"
                            placeholder="Image"
                            name="image"
                            onChange={e => onInputChange(e)}
                            value={image}
                            aria-describedby="imageHelp"
                            ref={register({ required: true })}
                            required
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">
                        {errors.image && <span>this field is required</span>}
                    </small>
                    <div className="input-group">
                        <input
                            type="number"
                            className="form-control mt-2"
                            placeholder="Price"
                            name="price"
                            onChange={e => onInputChange(e)}
                            value={price}
                            aria-describedby="priceHelp"
                            ref={register({ required: true })}
                            required
                        />
                    </div>
                    <small id="priceHelp" className="form-text text-danger">
                        {errors.price && <span>this field is required</span>}
                    </small>
                    <div className="input-group">
                        <input
                            type="number"
                            className="form-control mt-2"
                            placeholder="Quantity"
                            name="quantity"
                            onChange={e => onInputChange(e)}
                            value={quantity}
                            aria-describedby="quantityHelp"
                            ref={register({ required: true })}
                            required
                        />
                    </div>
                    <small id="quantityHelp" className="form-text text-danger">
                        {errors.quantity && <span>this field is required</span>}
                    </small>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Description"
                            name="description"
                            onChange={e => onInputChange(e)}
                            value={description}
                            aria-describedby="descriptionHelp"
                            ref={register({ required: true })}
                            required
                        />
                    </div>
                    <small id="priceHelp" className="form-text text-danger">
                        {errors.description && <span>this field is required</span>}
                    </small>
                    {/* <div class="input-group mb-3 mt-2" placeholder="Category"> 
                        <select class="custom-select" id="inputGroupSelect01" >
                            <option value="1">Super Fake</option>
                            <option value="2">Fake 1</option>
                            <option value="3">Fake 2</option>
                            <option value="3">Fake 3</option>
                        </select>
                    </div> */}
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </form>
            </div>
        </div>
    )
}

AddProduct.propTypes = {
    AddProduct: PropTypes.func

}

export default AddProduct
