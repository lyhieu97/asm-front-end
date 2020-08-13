import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form';



const AddCt = () => {

    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();

    const [category, setCategory] = useState({
        id: "",
        name: "",
        img: ""
    });

    const { name, img} = category;

    const onInputChange = e => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3005/categorys", category);
        swal("Added successfully !", "", "success");
        history.push('/admin/categorys');
    };

    return (
        <div>
            <div className="card card-body my-3">
                <form onSubmit= { e => onSubmit(e) } >
                    <h6 className="m-0 font-weight-bold text-primary">Add Category</h6>
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
                            name="img"
                            onChange={e => onInputChange(e)}
                            value={img}
                            aria-describedby="imageHelp"
                            ref={register({ required: true })}
                            required
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">
                        {errors.image && <span>this field is required</span>}
                    </small>
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </form>
            </div>
        </div>
    )
}

AddCt.propTypes = {
    AddCt: PropTypes.func

}

export default AddCt

