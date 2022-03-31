import React from 'react';
import { Form } from 'react-bootstrap';
import logo from './img/logo.png';
import logoFB from './img/logoFB.png';
import logoTW from './img/logoTW.png';
import logoLI from './img/logoLI.png';
import logoIG from './img/logoIG.png';

 export class Start extends React.Component {
    render(){
        return <>
        <Header />
        <Menu />
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
        <SubscribeNewsletter />
        </>;
    }
}
export class SubscribeNewsletter extends React.Component {
    render(){
        return <>
        <div>
            <h1>Subscribite para recibir más información</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                    <Form.Text className="text-muted">No compartiremos este mail con nadie más</Form.Text>
                </Form.Group>

            </Form>
        </div>
        </>;
    }
}
