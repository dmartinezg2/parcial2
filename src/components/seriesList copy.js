import React, {useState, useEffect} from 'react';
import Serie from "./series";
import {FormattedMessage} from 'react-intl';

const Series=()=>{
    const [series, setSeries]= useState([]);

    function getBrowserLang(){
      const lang =  navigator.language || navigator.userLanguage;
      console.log(lang);
      return lang;
    }
    useEffect(()=>{
        let URL="";
        let lang =getBrowserLang();
        if(lang === "en"){
          URL="https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
        }
        else{
          URL="https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
        }

        if(!navigator.onLine){
            if(localStorage.getItem("series")===null){
                setSeries("Error while connecting with the server of series. Try again....");
            }
            else{
              setSeries(localStorage.getItem("series"));
            }
        }else{
            fetch(URL).then(res => res.json().then(res=>{
              setSeries(res);
              localStorage.setItem("series",res)
            })) 
        } 
    },[]);
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
          {series.map((serie) => {return <Serie key={series.id} serie={series}></Serie>;})}
          </tbody>
        </table>
      </div>
    )
}

export default Series;