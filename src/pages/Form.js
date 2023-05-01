import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        title: "",
        status: ""
    });

    const { title, status } = form;

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <h1>Ini adalah Form</h1>
            <form onSubmit={() => alert(JSON.stringify(form))}>
                <div className='form-group'>
                    <label>Title</label>
                    <input name="title" value={title} onChange={(e) => onChange(e)} type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Status</label>
                    <select name="status" value={status} onChange={(e) => onChange(e)} className='form-control'>
                        <option value="" holder>Select Status</option>
                        <option value="done">Done</option>
                        <option value="noteDone">Note Done</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <button type="submit" className='btn btn-sm btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form