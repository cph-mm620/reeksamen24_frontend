import React from "react";
import { readDriverUrl } from "../settings";
import { useState, useEffect } from "react";


const FetchReadJr = (props) => {
  const [driverList, setDriverList] = useState([]);
  
  useEffect(() => {
    const getDriver = async () => {
      let driverIds = [];
      for (let i = 0; i <= 2; i++) {
        const fromAPI = await getDrivers(i);
        //tror jeg har fundet problemmet, jeg glemte at det skal være ! først fordi den skal kun hvis den er ikke includeret
        if (!driverIds.includes(fromAPI.id)) {
          driverList.push(fromAPI);
          //glemte også at tilføje det til listen ellers er den altid tom
          driverIds.push(fromAPI.id);
          console.log(fromAPI);
        }
      } 
    };
    getDriver();
  }, []);

  const getDrivers = async (i) => {
     const res = await fetch(readDriverUrl + i);
    const data = await res.json();
    console.log("data, i");// hvis det virker slet det her
    console.log(data.id + ", " + i);// også det her
    return data;
  };

  // console.log(props.props);
  // console.log(props.props.id);
  // console.log(props.props.name);
  // console.log(props.props.otherManySides);
  // console.log(props.props.otherManySides[0].id);
  // console.log(props.props.otherManySides[0].name);


  return (
    
    <div style={{ borderBottom: "solid 2px black" }}>
      <h1>Race</h1>
      <ul><h3>
        {props.props.races.map((element, index) => {
          return <li key={index}>Race name: {element.name}</li>;
        })}
        </h3>
      </ul> 
      <h3>Car: {props.props.brand} {props.props.name}</h3>
      <h3>{driverList.length !== 0 && driverList.map((element, index) => {
        console.log("element");//hvis det virker fjern mig
         console.log(element);//og mig
         return <li key={index}>Driver: {element.name}</li>;
        })}</h3>
    </div>
  )
};

export default FetchReadJr;
