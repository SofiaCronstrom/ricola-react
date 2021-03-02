
import React, { useState } from 'react'

import Header from '../components/header'
import Farmer from '../images/nature-one.jpg'

import Leaf from '../components/leaf'

import ModalOne from '../components/modalnature'
import Modalricola from '../components/modalricola'
import Modalbusiness from '../components/modalbusiness'
import Modalpeople from '../components/modalpeople'




const Nature = () => {

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
                      <ModalOne />
                      <Modalricola/>
                      <Modalbusiness/>
                      <Modalpeople/>
                    </div>
                </div>

                
            </div>
        </div>
    )
}



export default Nature
