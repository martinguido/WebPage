import React from 'react';
import logo from './img/logo.png';
import logoFB from './img/logoFB.png';
import logoTW from './img/logoTW.png';
import logoLI from './img/logoLI.png';
import logoIG from './img/logoIG.png';
import 'bootstrap/dist/css/bootstrap.min.css'

 export class Start extends React.Component {
    render(){
        return <>
        <Header />
        <Footer />
        </>;
    }
}
export class Header extends React.Component {
    render(){
        return <><div>
                <h1>Fundación Arbolar</h1>
            </div>
            <div>
                <img src={logo} alt='Logo Fundacion Arbolar'/>
            
            </div>
        <Menu/>
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

export class Footer extends React.Component {
    render(){
        return <>
        <div>
            <h1>Conectate y Seguinos:</h1>
            <img src={logoFB} alt='Logo de Facebook'/>
            <img src={logoTW} alt='Logo de Twitter'/>
            <img src={logoLI} alt='Logo de LinkedIn'/>
            <img src={logoIG} alt='Logo de Instagram'/>
        </div>
        <SubscribeNewsletter/>
        </>;
    }
}
export class SubscribeNewsletter extends React.Component {
    render(){
        return <>
        <div>
            <h1>Subscribite para recibir más información</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputName1">Nombre</label>
                    <input type="name" class="form-control" id="exampleInputName1" placeholder="Ingresa tu nombre"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Dirección de Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email"/>
                    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie.</small>
                </div>

                <button type="submit" class="btn btn-primary">Subscribirme</button>
            
            </form>
        </div>
        </>;
    }
}
