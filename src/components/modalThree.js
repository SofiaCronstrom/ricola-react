
import React, { useState, useEffect } from 'react'
import Accordion from './popup'
import Modal from 'react-modal'



const ModalThree = (props) => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    const modal1 = document.querySelector('.modal-first')

    function changeAnimation(){
      
      document.querySelector('.svg3').style.visibility = 'visible';
    
    }

    function removeAnimation(){
      document.querySelector('.svg3').style.visibility = "hidden";
   
    }

;
    
    //{props.children}
      
    return(
        
        <div>

      
      <button className='open-modal one' onClick={()=> setmodalIsOpen(true)} onMouseOver={changeAnimation} onMouseLeave={removeAnimation} ></button>

      
      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
      className={props.cssClass}
      
      
      style={
        {
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        }
      }
      >

      <div className='header-modal'>
        <button className='close-modal' onClick={() => setmodalIsOpen(false) }>-</button>
    
      </div>

          
          <div className="App">
      <Accordion
        title="What is your return policy?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        
      />
      <Accordion
        title="How do I track my order?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Can I purchase items again?"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     
        "
      />
    </div>
      
      </Modal>
    
  
        </div>
    )
}



export default ModalThree
