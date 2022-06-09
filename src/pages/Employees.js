import React from 'react';
import { useSelector } from 'react-redux';
import EmployeesList from '../components/EmployeesList';

const Employees = () => {

    return (
        <div className="container employee-width">
            <h3 className='pt-3'>Current Employees</h3>
            <EmployeesList />
        </div>
    );
};

export default Employees;