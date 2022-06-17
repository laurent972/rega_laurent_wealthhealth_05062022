
import React, { useState } from 'react';
import { Requirements } from 'another_p14_modalbox';


const Form = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [department, setDepartment] = useState('');
    const form = document.getElementById('createEmployee');
    const [isDisplayed, setDisplayed] = useState(false);
    const AddEmployee = (e) =>{
        e.preventDefault();
        const employeeData = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
                firstName,
                lastName,
                dateBirth, 
                dateStart,
                address,
                city,
                state,
                zip,
                department
        }

        employeeData.push(employee);
        localStorage.setItem('employees', JSON.stringify(employeeData));
        setDisplayed(true); 
        
        form.reset();   
    }

    return (
        <>
        <div className="container global-width">
            <form id='createEmployee' onSubmit={AddEmployee} className='row g-3'>
                <div className="row g-3">
                <div className="col">
                <label htmlFor="firstName" className="form-label">First name</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setFirstName(e.target.value)} required="required"/>
                </div>
                <div className="col">
                <label htmlFor="lastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setlastName(e.target.value)} required="required" />
                </div>
                </div>
                <div className="row g-3">
                <div className="col">
                <label htmlFor="birth" className="form-label">Date of birth</label>
                    <input type="date" className="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setDateBirth(e.target.value)} required="required"/>
                </div>
                <div className="col">
                <label htmlFor="Start" className="form-label">Start Date</label>
                    <input type="date" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setDateStart(e.target.value)} required="required"/>
                </div>
                </div>
               
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} required="required"/>
                </div>
              
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} required="required"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select" onChange={(e) => setState(e.target.value)} required="required">
                    <option defaultValue>Choose...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option valuevalue="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="number" className="form-control" id="inputZip" onChange={(e) => setZip(e.target.value)} required="required"/>
                </div>
                <label htmlFor="inputZip" className="form-label">Department</label>
                <select className="form-select mt-0" multiple aria-label="multiple select example" onChange={(e) => setDepartment(e.target.value)} required="required">
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
              
                <div className="col-12 mb-5 text-center">
                    <button type="submit" className="btn btn-primary btn-lg m-auto">Save</button>
                </div>
            </form>
            </div>

            {isDisplayed ? (
                <Requirements setShow={setDisplayed}/>
            ): ''} 
            
        </>
    );
};

export default Form;