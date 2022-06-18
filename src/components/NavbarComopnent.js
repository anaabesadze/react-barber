import { Link } from "react-router-dom";
import { Navbar } from '../styled/components/Navbar';
import { useNavigate } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

function NavbarComponent({ activeUser, setActiveUser }) {
    const navigate = useNavigate()
    const handleSignout = () => {
        setActiveUser(null);
        localStorage.removeItem('activeUser');
        navigate('home');
    } 

    return (
        <Navbar> 
          
        <Link to="home" style={linkStyle}>
            <h1>Barbershop</h1>
        </Link>
        
        {
            !activeUser 
            ?
            <ul>
            <Link to="login" style={linkStyle}>
              Login
            </Link>
            <Link to="register" style={linkStyle}>
              Register
            </Link>
            <Link to="register-barber" style={linkStyle}>
              Register barber
            </Link>
          </ul>
            :
            <ul>
                <li>
                    { activeUser.email }
                </li>
                <li onClick={handleSignout}>
                    Sign out
                </li>
            </ul>
        }

        </Navbar>
    )
}

export default NavbarComponent