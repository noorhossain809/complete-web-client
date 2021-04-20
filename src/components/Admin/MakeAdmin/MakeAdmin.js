import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
     const [info, setInfo] = useState({});

    const { register,  watch, formState: { errors } } = useForm();

    const handleBur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const  handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', info.email)

        fetch('http://localhost:5001/AddMakeAdmin', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    };
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4 p-5">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <input onBlur={handleBur} type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <input  class="btn btn-danger mt-2" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;