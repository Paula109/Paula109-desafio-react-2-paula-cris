import { useState } from 'react'

const Formulario = ({ setAlert }) => {

    // estados
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    // funciones para ser llamadas con onChange
    const valorInputNombre = (e) => setNombre(e.target.value)
    const valorInputEmail = (e) => setEmail(e.target.value)
    const valorInputPassword = (e) => setPassword(e.target.value)
    const valorInputConfirm = (e) => setConfirm(e.target.value)


    // función que valida Password que es llamada por onSubmit
    const validarPassword = (e) => {
        e.preventDefault()

        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
             return setAlert({msg: 'Todos los campos son obligatorios', color: 'warning' })
        }
        if (password !== confirm) {
            return setAlert({msg: 'Registro denegado. Contraseñas no coinciden :(', color: 'danger' })
        }
        if( password === confirm){
            setAlert({msg: '  Registro exitoso :)', color: 'success' })
            setNombre('')
            setEmail('')
            setPassword('')
            setConfirm('')
        }
    }

    return (
        <div>

            <form onSubmit={validarPassword}>
                <div className="mb-3">
                    <input onChange={valorInputNombre}
                    placeholder='Nombre' type="text" className="form-control" value={nombre}/>
                </div>


                <div className="mb-3">
                    <input onChange={valorInputEmail} placeholder='tuemail@ejemplo.com' type="email" className="form-control " value={email} />
                </div>


                <div className="mb-3">
                    <input onChange={valorInputPassword} placeholder='Contraseña' type="password" className="form-control"  value={password}/>
                </div>

                <div className="mb-3">
                    <input onChange={valorInputConfirm} placeholder='Confirma tu contraseña' type="password" className="form-control" value={confirm} />
                </div>

                <button type="submit" className="btn btn-success">Registrarse</button>
            </form>
            <br />
            <p>{nombre} - {email} - {password}- {confirm}</p>
        </div>
    )
}

export default Formulario