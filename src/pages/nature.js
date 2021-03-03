
import React, { useState } from 'react'

import Header from '../components/header'
import Farmer from '../images/nature-one.jpg'

import Leaf from '../components/leaf'

import ModalOne from '../components/modalnature'
import Modalricola from '../components/modalricola'
import Modalbusiness from '../components/modalbusiness'
import Modalpeople from '../components/modalpeople'
import ModalPeople from '../components/modalpeople'

import Line from '../images/line1.svg'

const Nature = () => {
 
for(let i = 0; i < document.querySelectorAll('.modal').length; i += 2){
  document.querySelectorAll('.modal')[i].style.backgroundColor = 'red';

}
    return(

        <div>
          
          

            <div className='main-bg' style={{ backgroundImage: `url(${Farmer})` }}>
            <Header/>
       
            <Leaf/>

                <div className='circle-subpage'>
                   
                    <div className='yellow-button' id='business' >
                        <div className='circle-text'>
                            <span>N</span>
                            <br></br>
                            Nature
                        </div>
                    </div>

                 
                   
                    <div className='modal-main'>
                    <img src={Line} className='line' />
                     <ModalOne title='nature' cssClass='modal-first'/>
                     <img src={Line} className='line'/>
                     <ModalOne title='ricola' cssClass='modal-second' >
                       <h3>h3</h3>
                     </ModalOne>
                     <img src={Line} className='line'/>
                     <ModalOne title='new' cssClass='modal-third'/>
                    
                    </div>
                </div>

                
            </div>
        </div>
    )
}



export default Nature
