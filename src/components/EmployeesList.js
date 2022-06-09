import { Search, Tune } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';



  const columns = [
    {
      name: 'First Name',
      selector: 'firstName',
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: 'lastName',
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: 'dateStart',
      sortable: true,
    },
    {
      name: 'Department',
      selector: 'department',
      sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: 'dateBirth',
        sortable: true,
      },
      {
        name: 'Street',
        selector: 'address',
        sortable: true,
      },
      {
        name: 'City',
        selector: 'city',
        sortable: true,
      },
      {
        name: 'State',
        selector: 'state',
        sortable: true,
      },
      {
        name: 'Zip Code',
        selector: 'zip',
        sortable: true,
      }
  ];

  
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
            
            <div className="App">     
                <DataTable
                pagination
                columns={columns}
                data={employees}
                highlightOnHover
                />
            </div>
        </>
      );
  };
  
  export default EmployeesList;