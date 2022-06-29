import React from "react";
import { readDriverUrl } from "../settings";
import { readRaceUrl } from "../settings";
import { readUrl } from "../settings";
import { useState, useEffect } from "react";


const FetchDelete = () => {
  const [carList, setCarList] = useState([]);
  const [driverList, setDriverList] = useState([]);
  const [raceList, setRaceList] = useState([]);


  useEffect(() => {
    const getCar = async () => {
      const fromAPI = await getCars();
      setCarList(fromAPI);
    };
    const getDriver = async () => {
      const fromAPI = await getDrivers();
      setDriverList(fromAPI);
    };
    const getRace = async () => {
      const fromAPI = await getRaces();
      setRaceList(fromAPI);
    };
    getCar();
    getDriver();
    getRace();
  }, []);


  const getCars = async () => {

    const res = await fetch(readUrl);
    const data = await res.json();
    console.log(data);
    return data;
  };
  const getDrivers = async () => {

    const res = await fetch(readDriverUrl);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const getRaces = async () => {

    const res = await fetch(readRaceUrl);
    const data = await res.json();
    console.log(data);
    return data;
  };


 

  return (
  <div>
  
  <table className="table">
    <thead>
  <tr>
    
    <th>Car</th>
    <th>Brand</th>
    <th>Status</th>
  </tr>
  </thead>
  <tbody>
      {carList.length > 0 &&
        carList.map((index) => {
          return  <tr key={index}><td> {index.brand}</td>
          <td> {index.name}</td>
          <td><button>Delete</button></td></tr>
        }) }        
  </tbody>
</table>
<table className="table">
    <thead>
  <tr>
  <th>Driver</th>
<th>Drivers id</th>
<th>Status</th>
  </tr>
  </thead>
  <tbody>
      {driverList.length > 0 &&
        driverList.map((index) => {
          return  <tr key={index}><td> {index.name}</td>
          <td> {index.id}</td>
          <td><button>Delete</button></td></tr>
        })         
        }
  </tbody>
</table>
<table className="table">
    <thead>
  <tr>
  <th>Place</th>
  <th>Round</th>
<th>Duration</th>
<th>Status</th>
  </tr>
  </thead>
  <tbody>
      {raceList.length > 0 &&
        raceList.map((index) => {
          return  <tr key={index}><td> {index.location}</td>
          <td> {index.name}</td>
          <td> {index.duration}</td>
          <td><button>Delete</button></td></tr>
        })        
          
        }
  </tbody>
</table>
</div>
  )
};

export default FetchDelete;

{/* <th>Driver</th>
<th>Drivers id</th>
<th>Name</th>
<th>Location</th>
<th>Duration</th> */}