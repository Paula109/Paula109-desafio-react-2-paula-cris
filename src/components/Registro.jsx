// import React, { useState } from 'react'
import Formulario from './Formulario'
import Alerta from './Alerta'
import SocialButton from './SocialButton'

const Registro = ({alert, setAlert}) => {

  return (
    <div className='divContainer'>
      <h1 >Crea una cuenta</h1>
            <div className='d-flex justify-content-center py-3'>
                <SocialButton icono="fa-brands fa-facebook fa-2x" />
                <SocialButton icono="fa-brands fa-github fa-2x" />
                <SocialButton icono="fa-brands fa-linkedin fa-2x" />
            </div>
      <Formulario setAlert={setAlert}  />
      {alert.msg !== ''&& <Alerta msg ={alert.msg} color = {alert.color}/>}
    </div>
  )
}

export default Registro