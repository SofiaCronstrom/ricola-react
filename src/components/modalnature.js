
import React, { useState } from 'react'
import Accordion from '../components/popup'
import Modal from 'react-modal'

const ModalOne = () => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

      
    return(

        <div>

      <button className='open-modal' onClick={()=> setmodalIsOpen(true)}></button>
      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
    
      className='modal'
      style={
        {
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        }
      }
      >

      <div>
        <button className='close-modal' onClick={() => setmodalIsOpen(false) }>Close</button>
      </div>
  
          <h2>ddhhhdd</h2>
          <h2>dddd</h2>
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
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
      />
    </div>
      
      </Modal>
    
  
        </div>
    )
}



export default ModalOne
