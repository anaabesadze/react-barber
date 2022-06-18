import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import RegisterBarber from './components/RegisterBarber';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import BarbersCatalog from './components/BarbersCatalog';
import NavbarComponent from './components/NavbarComopnent';
import { UnauthorizedRoute } from './Guard';
import { useState } from 'react';
import { Review } from './styled/components/Review';
import { addBarberReview } from './db';

function App() {
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')));
  const [review, setReview] = useState(null);
  const initialFormValues = { rate: 0, text: '' };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBarberReview(review, formValues);
    setReview(null);
    setFormValues(initialFormValues);
  }
  
  const handleCancel = (e) => {
    e.preventDefault()
    setReview(null);
    setFormValues(initialFormValues);
  }

  

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent activeUser={activeUser} setActiveUser={setActiveUser} />
        {
          review !== null
          ? <Review>
               <div>
                <p>Enter review for barber</p>
                <label htmlFor="rate">Selected rate is: {formValues.rate}/10</label>
                <input id="rate" name="rate" type="range" min="0" max="10" value={formValues.rate} onChange={handleChange}/>
                <label htmlFor="text">Enter description</label>
                <textarea id="text" placeholder='type..' rows="5" name="text" value={formValues.text} onChange={handleChange} ></textarea>
                <ul className="buttons">
                  <button onClick={handleSubmit}>Submit</button>
                  <button onClick={handleCancel}>Cancel</button>
                </ul>
              </div>
            </Review>
          : ''
        }

        <Routes>
          <Route path='*' element={<Navigate to="/home"/>} />
          <Route path="/login" element={
          <UnauthorizedRoute activeUser={activeUser}>
            <Login setActiveUser={setActiveUser} />
          </UnauthorizedRoute>
          }> </Route>
          <Route path="/register" element={
            <UnauthorizedRoute activeUser={activeUser}>
              <Register setActiveUser={setActiveUser}/>
            </UnauthorizedRoute>
          }> </Route>
          <Route path="/register-barber" element={
            <UnauthorizedRoute>
              <RegisterBarber />
            </UnauthorizedRoute>
          }></Route>
          <Route path="/home" element={<BarbersCatalog activeUser={activeUser} setReview={setReview} />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
