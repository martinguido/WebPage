import React from 'react';
import logo from './img/logo.png';
import logoFB from './img/logoFB.png';
import logoTW from './img/logoTW.png';
import logoLI from './img/logoLI.png';
import logoIG from './img/logoIG.png';
import './css/components.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 export function Start(){
    return <>
    <Header />
    <Footer />
    </>;
}
export function Header(){
    return <>
    <div>
        <h1>Fundación Arbolar</h1>
    </div>
    <div class='logoHeader'>
        <img src={logo} alt='Logo Fundacion Arbolar' class='logoArbolarBlur'/>
        <img src={logo} alt='Logo Fundacion Arbolar' class='logoArbolar'/>
    </div>
    <Menu/>
    </>;
}

export function Menu(){
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

export function Footer(){
    return <> 
    <div class='footerdiv networks'>
        <h1 class='footerh2'>Conectate y Seguinos:</h1>
        <div class='footerlogos'>
            <img src={logoFB} alt='Logo de Facebook' class='logo' />
            <img src={logoTW} alt='Logo de Twitter' class='logo' />
            <img src={logoLI} alt='Logo de LinkedIn' class='logo' />
            <img src={logoIG} alt='Logo de Instagram' class='logo'/>
        </div>
    </div>
    <SubscribeNewsletter/>
    </>
}

export function SubscribeNewsletter(){
    return <><div class="subscribe footerdiv">
	    <h2 class="subscribe__title">Mantenete en contacto</h2>
	    <p class="subscribe__copy">Subscribite para obtener la ultima información y noticias!</p>
        <div class="form">
		    <input type="name" class="form__name" placeholder="Ingresa tu nombre" />
	    </div>
        <div class="formSecondRow">
            <div class="form">
	            <input type="email" class="form__email" placeholder="Ingresa tu direccion de email" />
	            <button class="form__button">Subscribite</button>
	        </div>
	        <div class="notice">
	            <input type="checkbox"/>
		        <span class="notice__copy">Estoy de acuerdo con subscribirme al newsletter mensual.</span>
	        </div>
        </div>
    </div>  
    </> 
}
