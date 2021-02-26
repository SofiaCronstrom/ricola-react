
import React, { useState } from 'react'

import Header from '../components/header'
import Farmer from '../images/nature-one.jpg'

import Modal from 'react-modal'
import Accordion from '../components/popup'

const Nature = () => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return(

        <div>

      <button className='open-modal' onClick={()=> setmodalIsOpen(true)}>Open</button>
      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
      className='modal'
      >

      <div>
        <button className='close-modal' onClick={() => setmodalIsOpen(false) }>Close</button>
      </div>
  
          <h2>dddd</h2>
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
            <div className='main-bg' style={{ backgroundImage: `url(${Farmer})` }}>
            <Header/>
                <div className='circle-subpage'>
                    <div className='yellow-button' id='business' >
                        <div className='circle-text'>
                            <span>N</span>
                            <br></br>
                            Nature
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Nature
