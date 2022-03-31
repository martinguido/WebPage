import React from 'react';

 export class Start extends React.Component {
    render(){
        return <>
        <Header />
        <Menu />
        </>;
    }
}
export class Header extends React.Component {
    render(){
        return <><div>
                <h1>Fundación Arbolar</h1>
            </div>
            <div>
                <img src='logo.png'></img>
            
            </div>
        </>;
    }
}

export class Menu extends React.Component {
    render(){
        return <>
        <div> 
            <ul>
                <li>Inicio</li>
                <li>Conocenos</li>
                <ul>
                    <li>Mision, Vision y Objetivo</li>
                    <li>Notas</li>

                </ul>
                <li>Campañas</li>
                <ul>
                    <li>Consejos Verdes</li>
                    <li>Nuestros Logros</li>
                </ul>
                <li>Actividades</li>
                <li>Noticias</li>
                <li>Voluntariado</li>
                <li>Testimonios</li>
                <li>Donaciones</li>
                <li>Contactanos</li>
                <ul>
                    <li>Preguntas Frecuentes</li>
                    <li>Conocenos en otras redes</li>
                    <li>Dejanos tu Consulta</li>
                </ul>
            </ul>
        </div>
    </>;
    }
}