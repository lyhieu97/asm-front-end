
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import swal from 'sweetalert'


const CategoryManager = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get("http://localhost:3005/categorys");
    setCategory(result.data);
  }

  const deleteCategory = async (ct_id) => {
    if (confirm('Are you sure ?')) {  //eslint-disable-line
      await axios.delete(`http://localhost:3005/categorys/${ct_id}`);
      swal("Deleted successfully!", "", "success");
      loadCategory();
    }
  }

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Category Management</h6>
        </div>
        <br />
        <div>
          <Link to={"/admin/addcategory"} className="btn btn-primary mr-2">Add New Category</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {category.map(({ id, name, img }, index) =>
                  (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{name}</td>
                      <td>
                        <img src={img} width="50px" height="50" />
                      </td>
                      <td>
                        <Link className="fa fa-trash-o mr-4" onClick={() => deleteCategory(id)}></Link>
                        <Link className="fa fa-pencil" to={`/admin/updatecategory/${id}`}></Link>
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
CategoryManager.propTypes = {
}

export default CategoryManager

