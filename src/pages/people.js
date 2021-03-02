import React from "react"


import Header from '../components/header'
import PeopleImg from '../images/people.jpg'
import Modalpeople from '../components/modalpeople'


const People = () => {

return (

<div>
    <div className='main-bg' style={{ backgroundImage: `url(${PeopleImg})` }}>
          <Header/>
        
            <div className='circle-subpage'>
             <div className='yellow-button'>
                <div className='circle-text'>
                    <span>P</span>
                    <br></br>
                    People
                </div>
            </div>

            <div className='modal-main'>
                  <Modalpeople/>
                  <Modalpeople/>
                  <Modalpeople/>
                  <Modalpeople/>
            </div>

        </div>
    </div>
</div>

)

}
export default People