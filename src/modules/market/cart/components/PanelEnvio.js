import React from 'react'
import { useSelector } from 'react-redux';

export default function PanelEnvio() {
    const user = useSelector((state) => state.user);
    console.log(user.user.name);
    return (
        <section className="panel-envio">
            <h1 className="panel-envio-m">Envio</h1>
            <h3 className="panel-envio-mb">Nombre del Usuario: {user.user.name}</h3>
            <div className="panelflex ">
            <p className="panel-envio-m">Dirección: {user.user.address}</p>
            <button className="panel-envio-button">Cambiar </button>
            </div>
        </section>
    )
}
