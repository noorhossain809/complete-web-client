import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const TestimonialForm = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)

    const handleBur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('description', info.description)

        fetch('https://sleepy-atoll-80753.herokuapp.com/addATestimonial', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 p-5">
                <h2 className="text-center text-uppercase text-danger">This is review page</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBur} type="email" class="form-control" name="email" placeholder="Enter email" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input onBlur={handleBur} type="text" class="form-control" name="name" placeholder="name" />
                </div>
                <div className="form-group">
                    <textarea onBlur={handleBur} name="description" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Upload image</label>
                    <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="picture" />
                </div>

                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default TestimonialForm;