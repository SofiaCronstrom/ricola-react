import React from "react"


import Header from '../components/header'
import PeopleImg from '../images/people.jpg'


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
                 
            </div>

        </div>
    </div>
</div>

)

}
export default People