
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form';

const index = () => {
    // const { register, handleSubmit, errors } = useForm();

    // let history = useHistory();

    // const [contact, setContact] = useState({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     subject: "",
    //     message:""
    // });

    // const { firstname, lastname, email, subject, message} = contact;

    // const onInputChange = e => {
    //     setContact({ ...contact, [e.target.name]: e.target.value });
    // };

    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:3005/contact", contact);
    //     swal("Added successfully !", "", "success");
    // };
    return (
        <div id="contact" className="box">
            <h1>Contact</h1>
            <hr />
            <p className="lead">Are you curious about something? Do you have some kind of problem with our products?</p>
            <p>Please feel free to contact us, our customer service center is working for you 24/7.</p>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <h3><i className="fa fa-map-marker" />Address</h3>
                    <p>Don Nguyen 3 - KTX My Dinh II<br />Nguyen Co Thach<br />My Dinh II<br />Nam Tu Liem<br /> Ha Noi <br /><strong>Viet Nam</strong></p>
                </div>
                <div className="col-md-4">
                    <h3><i className="fa fa-phone" /> Call center</h3>
                    <p className="text-muted">This number is toll free if calling from Viet Nam otherwise we advise you to use the electronic form of communication.</p>
                    <p><strong>+84 325 041 555</strong></p>
                </div>
                <div className="col-md-4">
                    <h3><i className="fa fa-envelope" /> Electronic support</h3>
                    <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                    <ul>
                        <li><strong><a href="lyvanhieu.031997@gmail.com">lyvanhieu.031997@gmail.com</a></strong></li>
                        <li><strong><a href="#">Ticketio</a></strong> - our ticketing support platform</li>
                    </ul>
                </div>
            </div>
            <hr />
            <h2>Contact form</h2>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="firstname">Firstname</label>
                            <input
                                id="firstname"
                                type="text"
                                className="form-control"
                                name="firstname"
                            // value = {firstname}
                            // onChange = {e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="lastname">Lastname</label>
                            <input
                                id="lastname"
                                type="text"
                                className="form-control"
                                name="lastname"
                            // value = {lastname}
                            // onChange = {e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="text"
                                className="form-control"
                                name="email"
                            // value = {email}
                            // onChange = {e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                className="form-control"
                                name="subject"
                            // value = {subject}
                            // onChange = {e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="form-control"
                                defaultValue={""}
                                name="message"
                            // value = {message}
                            // onChange = {e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o" /> Send message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

index.propTypes = {

}

export default index


// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'
// import swal from 'sweetalert'
// import { useForm } from 'react-hook-form';



// const AddCt = () => {

//     const { register, handleSubmit, errors } = useForm();


//     const [contact, setContact] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         subject: "",
//         message: ""
//     });

//     const { firstname, lastname, email, subject, message } = contact;

//     const onInputChange = e => {
//         setContact({ ...contact, [e.target.name]: e.target.value });
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:3005/contact", contact);
//         swal("Comment successfully !", "", "success")
//     };

//     return (
//         <div>
//             <div className="card card-body my-3">
//                 <form onSubmit={e => onSubmit(e)} >
//                     <h6 className="m-0 font-weight-bold text-primary">Add Category</h6>
//                     <br></br>
//                     <div className="input-group">
//                         <input
//                             type="text"
//                             className="form-control mt-2"
//                             placeholder="Name"
//                             name="firstname"
//                             onChange={e => onInputChange(e)}
//                             value={firstname}
//                             aria-describedby="nameHelp"
//                             ref={register}
//                             required
//                         />
//                     </div>
//                     <small id="nameHelp" className="form-text text-danger">
//                         {errors.name && errors.name.type === "required" && <span>this field is required</span>}
//                     </small>
//                     <div className="input-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Image"
//                             name="lastname"
//                             onChange={e => onInputChange(e)}
//                             value={lastname}
//                             aria-describedby="imageHelp"
//                             ref={register({ required: true })}
//                             required
//                         />
//                     </div>
//                     <small id="imageHelp" className="form-text text-danger">
//                         {errors.image && <span>this field is required</span>}
//                     </small>
//                     <div className="input-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Image"
//                             name="email"
//                             onChange={e => onInputChange(e)}
//                             value={email}
//                             aria-describedby="imageHelp"
//                             ref={register({ required: true })}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Image"
//                             name="subject"
//                             onChange={e => onInputChange(e)}
//                             value={subject}
//                             aria-describedby="imageHelp"
//                             ref={register({ required: true })}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Image"
//                             name="message"
//                             onChange={e => onInputChange(e)}
//                             value={message}
//                             aria-describedby="imageHelp"
//                             ref={register({ required: true })}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary mt-3">Add</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// AddCt.propTypes = {
//     AddCt: PropTypes.func

// }

// export default AddCt

