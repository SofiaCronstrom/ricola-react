import React from 'react';
import Accordian from '../components/popup';
import Modal from 'react-modal';

const ModalInfo = (props) =>{
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const info  = document.querySelector('.modal-info');

    function changeAnimation(){
        document.querySelector('.openInfo').style.visibility = 'visible';
    }

    function removeAnimation(){
        document.querySelector('.closeInfo').style.visibility = 'hidden';
    }

}

