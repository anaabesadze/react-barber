import { Authorization } from "../styled/components/Authorization";
import { registerBarber } from "../db";
import { useState } from "react";

function RegisterBarber() {

    const initialFormValues = {
        email: '',
        name: '',
        address: '',
        phone: '',
        price: ''
    }

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerBarber(formValues)
        setFormValues(initialFormValues);
    }

    return (
        <Authorization>
            
            <h1>Register barber</h1>
            <div className="form-group">
                <p>Enter email</p>
                <input name="email" type="email" onChange={handleChange} value={formValues.email} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <p>Enter name</p>
                <input name="name" type="text" onChange={handleChange} value={formValues.name} placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <p>Enter phone</p>
                <input name="phone" type="text" onChange={handleChange} value={formValues.phone} placeholder="Enter phone"/>
            </div>
            <div className="form-group">
                <p>Enter address</p>
                <input name="address" type="text" onChange={handleChange} value={formValues.address} placeholder="Enter address"/>
            </div>
            <div className="form-group">
                <p>Enter price</p>
                <input name="price" type="text" onChange={handleChange} value={formValues.price} placeholder="Enter price"/>
            </div>
            <div className="form-group">
                <input type="submit" onClick={handleSubmit} value="Register barber"/>
            </div>

        </Authorization>
    )
}

export default RegisterBarber;