import React from 'react';
import Job from "./series";
import {FormattedMessage} from 'react-intl';
export default class JobsList extends React.Component {

  
  enState = { 
  	"offers": [
        {
          "id": 1,
          "name": "Breaking Bad",
          "channel": "AMC",
          "seasons": 5,
          "description": "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
          "webpage": "https://www.amc.com/shows/breaking-bad",
          "poster": "https://i.imgur.com/GGje0vc.jpg"
        },
        {
          "id": 2,
          "name": "Orange Is the New Black",
          "channel": "Netflix",
          "seasons": 6,
          "description": "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
          "webpage": "https://www.netflix.com/co/title/70242311",
          "poster": "https://i.imgur.com/EvKe48G.jpg"
        },
        {
          "id": 3,
          "name": "Game of Thrones",
          "channel": "HBO",
          "seasons": 7,
          "description": "American fantasy drama",
          "webpage": "https://www.hbo.com/game-of-thrones",
          "poster": "https://i.imgur.com/TDCEV1S.jpg"
        },
        {
          "id": 4,
          "name": "The Big Bang Theory",
          "channel": "CBS",
          "seasons": 12,
           "description": "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
          "webpage": "https://www.cbs.com/shows/big_bang_theory/about/",
          "poster": "https://i.imgur.com/uAEpVWk.jpg"
        },
        {
          "id": 5,
          "name": "Sherlock",
          "channel": "BBC",
          "seasons": 4,
          "description": "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
          "webpage": "https://www.bbc.co.uk/programmes/b018ttws",
          "poster": "https://i.imgur.com/02B7qhj.jpg"
        },
        {
          "id": 6,
          "name": "A Very English Scandal",
          "channel": "BBC",
          "seasons": 2,
          "description": "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
          "webpage": "https://www.bbc.co.uk/programmes/p065smy4",
          "poster": "https://i.imgur.com/D4y3DrQ.jpg"
        }
      ]
  };

  esState = { 
  	"offers": [
      {
        "id": 1,
        "name": "Breaking Bad",
        "channel": "AMC",
        "seasons": 5,
        "description": "Ambientada y filmada en Albuquerque, Nuevo México, la serie cuenta la historia de Walter White, un profesor de química de escuela secundaria deprimido y en apuros a quien se le diagnostica cáncer de pulmón.",
        "webpage": "https://www.amc.com/shows/breaking-bad",
        "poster": "https://i.imgur.com/GGje0vc.jpg"
      },
      {
        "id": 2,
        "name": "Orange Is the New Black",
        "channel": "Netflix",
        "seasons": 6,
        "description": "La serie gira en torno a Piper Chapman, una mujer de unos treinta años que vive en la ciudad de Nueva York y que es sentenciada a 15 meses en la penitenciaría de Litchfield.",
        "webpage": "https://www.netflix.com/co/title/70242311",
        "poster": "https://i.imgur.com/EvKe48G.jpg"
      },
      {
        "id": 3,
        "name": "Juego de Tronos",
        "channel": "HBO",
        "seasons": 7,
        "description": "Serie inspirada en la saga Canción de hielo y fuego, escrita por George R. R. Martin. Relata las vivencias de un grupo de personajes de distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y gobernar los siete reinos que conforman el territorio.",
        "webpage": "https://www.hbo.com/game-of-thrones",
        "poster": "https://i.imgur.com/TDCEV1S.jpg"
      },
      {
        "id": 4,
        "name": "The Big Bang Theory",
        "channel": "CBS",
        "seasons": 12,
         "description": "En el curso de la serie se muestra la dificultad de los protagonistas masculinos para relacionarse con personas de fuera de su entorno, principalmente de sexo femenino, dando lugar a situaciones cómicas.",
        "webpage": "https://www.cbs.com/shows/big_bang_theory/about/",
        "poster": "https://i.imgur.com/uAEpVWk.jpg"
      },
      {
        "id": 5,
        "name": "Sherlock",
        "channel": "BBC",
        "seasons": 4,
        "description": "Sherlock representa al detective consultor Sherlock Holmes resolviendo varios misterios en el Londres actual.",
        "webpage": "https://www.bbc.co.uk/programmes/b018ttws",
        "poster": "https://i.imgur.com/02B7qhj.jpg"
      },
      {
        "id": 6,
        "name": "A Very English Scandal",
        "channel": "BBC",
        "seasons": 2,
        "description": "Narra uno de los eventos más llamativos de la política inglesa de la segunda mitad del siglo XX.",
        "webpage": "https://www.bbc.co.uk/programmes/p065smy4",
        "poster": "https://i.imgur.com/D4y3DrQ.jpg"
      }
    ]
  };
  render() {
    let state="";
    function getBrowserLang(){
      const lang =  navigator.language || navigator.userLanguage;
      console.log(lang);
      return lang;
    }
    let lang =getBrowserLang();
        if(lang === "en"){
          state=this.esState;
        }
        else{
          state=this.enState;
        }
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Name"/></th>
              <th scope="col"><FormattedMessage id="Channel"/></th>
              <th scope="col"><FormattedMessage id="Description"/></th>
            </tr>
          </thead>
          <tbody>
              {this.esState.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}