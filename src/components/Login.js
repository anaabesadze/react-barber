import { useState } from "react";
import { loginUser } from "../db";
import { Authorization } from "../styled/components/Authorization";
import { useNavigate } from "react-router-dom";

function Login({setActiveUser}) {
    const navigate = useNavigate();
    const initialFormValues = {
        email: '',
        password: ''
    }
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedUser = loginUser(formValues) !== -1;

        if(loggedUser) {
            localStorage.setItem('activeUser', JSON.stringify(formValues));
            setActiveUser(formValues);
            navigate('/home');
        }
    }

    return (
        <Authorization>
            
            <h1>Login user</h1>
            <div className="form-group">
                <p>Enter email</p>
                <input type="text" placeholder="Enter email" name="email" onChange={handleChange} value={formValues.email}/>
            </div>
            <div className="form-group">
                <p>Enter password</p>
                <input type="password" placeholder="Enter password" name="password" onChange={handleChange} value={formValues.password}/>
            </div>
            <div className="form-group">
                <input type="submit" value="Login" onClick={handleSubmit}/>
            </div>

            <div className="linkTo">
                <span>Don't have an account? <a>Register</a></span>
            </div>
        </Authorization>
    )
}

export default Login;