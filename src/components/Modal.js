import React from 'react';
import '../style/component/_modal.css'
const img = "https://img.icons8.com/ios/50/undefined/ok--v1.png"

const title = 'Success !';
const text = 'The user have been added !';


const Modal = ({title,text,setShow}) => {

   
    
    return (
        <>
      
         <div className= 'displayBlock'>
              <div className='modal-box'>
              <div className='text'>
              <img src={img} alt="success"/>
              <p className='title'>{title}</p>
              {text}
              </div>
              <button className='closeOne'  onClick={() => setShow(false)}>
                  X
              </button>
            </div>
        </div>
     

         </>
       
    );
};

export default Modal;