import React from "react";
import CardConsejos from "./cardConsejos/CardConsejos.js";

const ConsejosVerdes = () => {
  return (
    <div className="consejos">
      <h1>Consejos Verdes</h1>

      <div className="consejosDiv">
        <div className="consejosDivRow">
          <CardConsejos
            text="Utilice tecnologías renovables y eficientes como paneles solares o luces LED"
            n="1"
          />
          <CardConsejos
            text="Consume de forma consciente los recursos naturales"
            n="2"
          />
          <CardConsejos text="Tome duchas cortas y evite pérdidas" n="3" />
          <CardConsejos
            text="Use transporte público o bicicletas siempre que pueda"
            n="4"
          />
          <CardConsejos
            text="Consume productos locales y de tempoarada"
            n="5"
          />
        </div>
        <div className="consejosDivRow">
          <CardConsejos
            text="Siempre que pueda utilice envases renovables"
            n="6"
          />
          <CardConsejos text="Disminuye el consumo de carnes rojas" n="7" />
          <CardConsejos
            text="Recicle la mayor cantidad de residuos en tu hogar"
            n="8"
          />
          <CardConsejos
            text="Use productos para limpiar naturales y ecológicos"
            n="9"
          />
          <CardConsejos
            text="Participe como voluntario en campañas de reforestación"
            n="10"
          />
        </div>
        <div className="consejosDivRow">
          <CardConsejos text="Reduce el uso de papel" n="11" />
          <CardConsejos text="Done ropa que no utilices" n="12" />
          <CardConsejos
            text="Apague las computadoras que no se usen en su trabajo"
            n="13"
          />
          <CardConsejos
            text="Use videoconferencias para disminuir viajes de negocios."
            n="14"
          />
          <CardConsejos
            text="Consume productos con envases reciclables"
            n="15"
          />
        </div>
        <div className="consejosDivRow">
          <CardConsejos
            text="Use equipos electrónicos con eficiencia energética A o superior"
            n="16"
          />
          <CardConsejos text="Participe en limpiezas de ríos o mares" n="17" />
          <CardConsejos text="Consume cosméticos naturales" n="18" />
          <CardConsejos text="Apoye la educación ambiental" n="19" />
          <CardConsejos
            text="Implemente reglas de sostenibilidad en su oficina"
            n="20"
          />
        </div>
        <div className="consejosDivRow">
          <CardConsejos
            text="Aumenta la conciencia en tu comunidad cercana"
            n="21"
          />
          <CardConsejos
            text="Continue informandose acerca del cuidado del ambiente"
            n="22"
          />
        </div>
      </div>

      <div className="mobileConsejos">
        <CardConsejos
          text="Utilice tecnologías renovables y eficientes como paneles solares o luces LED"
          n="1"
        />
        <CardConsejos
          text="Consume de forma consciente los recursos naturales"
          n="2"
        />
        <CardConsejos text="Tome duchas cortas y evite pérdidas" n="3" />
        <CardConsejos
          text="Use transporte público o bicicletas siempre que pueda"
          n="4"
        />
        <CardConsejos text="Consume productos locales y de tempoarada" n="5" />
        <CardConsejos
          text="Siempre que pueda utilice envases renovables"
          n="6"
        />
        <CardConsejos text="Disminuye el consumo de carnes rojas" n="7" />
        <CardConsejos
          text="Recicle la mayor cantidad de residuos en tu hogar"
          n="8"
        />
        <CardConsejos
          text="Use productos para limpiar naturales y ecológicos"
          n="9"
        />
        <CardConsejos
          text="Participe como voluntario en campañas de reforestación"
          n="10"
        />
        <CardConsejos text="Reduce el uso de papel" n="11" />
        <CardConsejos text="Done ropa que no utilices" n="12" />
        <CardConsejos
          text="Apague las computadoras que no se usen en su trabajo"
          n="13"
        />
        <CardConsejos
          text="Use videoconferencias para disminuir viajes de negocios."
          n="14"
        />
        <CardConsejos text="Consume productos con envases reciclables" n="15" />
        <CardConsejos
          text="Use equipos electrónicos con eficiencia energética A o superior"
          n="16"
        />
        <CardConsejos text="Participe en limpiezas de ríos o mares" n="17" />
        <CardConsejos text="Consume cosméticos naturales" n="18" />
        <CardConsejos text="Apoye la educación ambiental" n="19" />
        <CardConsejos
          text="Implemente reglas de sostenibilidad en su oficina"
          n="20"
        />
        <CardConsejos
          text="Aumenta la conciencia en tu comunidad cercana"
          n="21"
        />
        <CardConsejos
          text="Continue informandose acerca del cuidado del ambiente"
          n="22"
        />
      </div>
    </div>
  );
};

export default ConsejosVerdes;
