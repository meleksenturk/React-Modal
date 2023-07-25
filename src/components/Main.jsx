import React, { useState } from 'react'
import '../css/Main.css'
import Dropdown from './Dropdown.jsx'
import { Button } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons'
const Main = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    }
    return (
        <div className='mainDiv'>
            <div className=" dropdownDiv column">
                <Dropdown />
            </div>
            <div className="modal column">
                {openModal ? null : <Button className="showModalButton" type="primary" onClick={() => setOpenModal(true)}>Show Modal</Button>}
                {openModal && <div className='modalDiv'>
                    <div className='modalContent'>
                        <h4>Modal</h4>
                        <CloseCircleFilled style={{ fontSize: '30px' }} className='closeFilled' onClick={closeModal} />

                    </div>


                </div>}
            </div>

        </div>
    )
}

export default Main