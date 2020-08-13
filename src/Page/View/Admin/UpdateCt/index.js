import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'


const UpdateCt = () => {

    let history = useHistory();

    const { id } = useParams();

    const [category, setCategory] = useState({
        id: "",
        name: "",
        img: ""
    });


    const { name, img } = category;
    const onInputChange = e => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadCategory()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/categorys/${id}`, category);
        swal("Updated successfully!", "", "success");
        history.push('/admin/categorys');
    };

    const loadCategory = async () => {
        const result = await axios.get(`http://localhost:3005/categorys/${id}`);
        setCategory(result.data);
    };

    return (
        <div>
            <div className="card card-body my-3">
                <form onSubmit={e => onSubmit(e)}>
                    <h6 className="m-0 font-weight-bold text-primary">Edit Category</h6>
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
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Image"
                            name="img"
                            onChange={e => onInputChange(e)}
                            value={img} aria-describedby="nameHelp"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Edit</button>
                </form>
            </div>
        </div>
    )
}

UpdateCt.propTypes = {

}

export default UpdateCt
