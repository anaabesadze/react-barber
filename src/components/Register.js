import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { Authorization } from "../styled/components/Authorization";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../db";

function Register({setActiveUser}) {
    const navigate = useNavigate();

    const initialFormValues = {
        email: '',
        password: '',
        cpassword: '',
    }

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValues.password === formValues.cpassword) {
            registerUser(formValues)
            localStorage.setItem('activeUser', JSON.stringify(formValues));
            setActiveUser({ email: formValues.email, password: formValues.pass });
            navigate('/home');
        }
    }

    return (
        <Authorization>
            
            <h1>Register user</h1>
            <div className="form-group">
                <p>Enter email</p>
                <input type="text" name="email" placeholder="Enter email" onChange={handleChange} value={toHaveFormValues.email}/>
            </div>
            <div className="form-group">
                <p>Enter password</p>
                <input type="password" name="password" placeholder="Enter password" onChange={handleChange} value={toHaveFormValues.password}/>
            </div>
            <div className="form-group">
                <p>Confirm password</p>
                <input type="password" name="cpassword" placeholder="Confirm password" onChange={handleChange} value={toHaveFormValues.cpassword}/>
            </div>
            <div className="form-group">
                <input type="submit" onClick={handleSubmit} value="Register"/>
            </div>

            <div className="linkTo">
                <span>already have an account? <a>Login</a></span>
            </div>
        </Authorization>
    )
}

export default Register;