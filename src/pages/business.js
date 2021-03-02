import React from 'react';

import Header from '../components/header'
import BusinessImg from '../images/business.jpg'
import Modalbusiness from '../components/modalbusiness'
const Business = () => {

    return(

        <div>
            <div className='main-bg' style={{ backgroundImage: `url(${BusinessImg})` }}>
            <Header/>
                <div className='circle-subpage'>
                    <div  className='yellow-button' id='business' >
                        <div className='circle-text'>
                            <span>B</span>
                            <br></br>
                            Business
                        </div>
                    </div>

                    <div className='modal-main'>
                        <Modalbusiness/>
                        <Modalbusiness/>
                        <Modalbusiness/>
                        <Modalbusiness/>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Business;