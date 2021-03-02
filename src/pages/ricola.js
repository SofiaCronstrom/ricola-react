import React from "react"

import Header from '../components/header'
import RicolaImg from '../images/ricola.jpg'
import Modalricola from '../components/modalricola'

const Ricola = () => {

    return(

        <div>
            <div className='main-bg' style={{ backgroundImage: `url(${RicolaImg})` }}>
            <Header/>
                <div className='circle-subpage'>
                    <div className='yellow-button' id='business' >
                        <div className='circle-text'>
                            <span>R</span>
                            <br></br>
                            Ricola
                        </div>
                    </div>

                    
                    <div className='modal-main'>
                        <Modalricola />
                        <Modalricola/>
                        <Modalricola/>
                        <Modalricola/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Ricola