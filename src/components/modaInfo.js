
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

import LegendInfo from '../images/LegendInfo.svg'



const ModalInfo = (props) => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return(
        
        <div>

      
      <div className='legend' onClick={()=> {setmodalIsOpen(true)}}>
          <img className='legendInfo' src={LegendInfo}/>
          <p>Legend</p>
          </div>

      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
      className='modalInfo'
      style={
        {
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        }
      }
      >

      <div>
        <button className='close-info' onClick={() => setmodalIsOpen(false) }>-</button>
      </div>

        <div className='infoTextMain'>
          <p className='infoText'>
          Ricola footsteps
          <br></br><br></br>
          Initiatives
          <br></br><br></br>
          No poverty
          <br></br><br></br>
          Zero hunger
          <br></br><br></br>
          Good health and well-being
          <br></br><br></br>
          Quality education
          <br></br><br></br>
          Gender Equality
          <br></br><br></br>
          Clean water and sanitation
          <br></br><br></br>
          Affordable and clean energy
          <br></br><br></br>
          Decent work and economic growth
          </p>

          <p className='infoText'>
          Categoty
          <br></br><br></br>
          Industry, innovation and infrastructure
          <br></br><br></br>
          Reduce inequakities
          <br></br><br></br>
          Sustainable cities and communeties
          <br></br><br></br>
          Responsible consumption and production
          <br></br><br></br>
          Climate Action
          <br></br><br></br>
          Life below water
          <br></br><br></br>
          Life on land
          <br></br><br></br>
          Peace, justice and strong institutions
         
          </p>
          </div>

          
          <div className="App">

    </div>
      
      </Modal>
    
        </div>
    )
}



export default ModalInfo
