import React, { Fragment } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Modal.scss'

const Modal = ({userModal,setUserModal}) => {
  return (
    <Fragment>
        <div className='modal'>
        <div className='modal__overli' onClick={()=>setUserModal(null)}></div>
            <div className='modal__boxes'>
                <button onClick={()=>setUserModal(null)} className='modal__close-btn'>
                    <IoIosCloseCircleOutline className='modal__close'/>
                </button>
                <div className='modal__card'>
                    <div className='modal__card-img'>
                        <img src={userModal.img} alt="Modal img" />
                    </div>
                    <div className='modal__info-card'>
                        <h3 className="modal__ful-name">
                            {userModal.fname.slice(0, 1).toUpperCase() +
                                userModal.fname.slice(1).toLowerCase() +
                                " " +
                                userModal.lname.slice(0, 1).toUpperCase() +
                                userModal.lname.slice(1).toLowerCase()}
                        </h3>
                        <p className='modal__date'>{userModal.brithDate}</p>
                        <p className='modal__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vero placeat molestiae beatae repellat, laudantium expedita id libero quia mollitia, excepturi delectus facilis magnam explicabo! Fuga rerum rem quia incidunt!</p>
                        <p className='modal__tel'>{userModal.tel}</p>
                        <p className="modal__address">{userModal.address}</p>
                        <p className="modal__gender">{userModal.gender}</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Modal