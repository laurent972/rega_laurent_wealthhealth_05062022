import { Search, Tune } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

const EmployeesList = () => {

    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    const [keyWord, setKeyWord] = useState('');

    const Search = (word) => {
        employees = employees.filter(
            employee => (
                employee.firstName.toLowerCase().includes(word.toLowerCase()) 
            ||  employee.lastName.toLowerCase().includes(word.toLowerCase()) 
            ||  employee.department.toLowerCase().includes(word.toLowerCase()) 
            ||  employee.address.toLowerCase().includes(word.toLowerCase())     
            ||  employee.city.toLowerCase().includes(word.toLowerCase())       
            ||  employee.state.toLowerCase().includes(word.toLowerCase())
            ||  employee.zip.includes(word)        
            ||  employee.dateBirth.includes(word)  
            ||  employee.dateStart.includes(word)
        )   
        );
       
        return employees;
     }
     
    if(keyWord != '')Search(keyWord)
     
    return (

        <>
        <form className="form-inline d-flex justify-content-end flex-row">
            <div className="form-group mx-sm-3 mb-2 flex-row">
                <input className="p-1" type="text"  placeholder="Search" onChange={(e)=> setKeyWord(e.target.value)}/>
            </div>
            
        </form>
        <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                </tr>
            </thead>
            <tbody>

            {employees.map((employee) => 
                <tr key={employees.indexOf(employee)}>
                    <td>
                        {employee.firstName}
                    </td>
                    <td>
                        {employee.lastName}
                    </td>
                    <td>
                        {employee.dateStart}
                    </td>
                    <td>
                        {employee.department}
                    </td>
                    <td>
                        {employee.dateBirth}
                    </td>
                    <td>
                        {employee.address}
                    </td>
                    <td>
                        {employee.city}
                    </td>
                    <td>
                        {employee.state}
                    </td>
                    <td>
                        {employee.zip}
                    </td>
                </tr>
             )}
             </tbody>
        </table>
        </>
    );
};

export default EmployeesList;