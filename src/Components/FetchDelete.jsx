import React from "react";
import { readDriverUrl } from "../settings";
import { readUrl } from "../settings";
import { useState, useEffect } from "react";


const FetchDelete = () => {
  const [carList, setCarList] = useState([]);
  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    const getCar = async () => {
      const fromAPI = await getCars();
      setCarList(fromAPI);
    };
    const getDriver = async () => {
      const fromAPI = await getDrivers();
      setDriverList(fromAPI);
    };
    getCar();
    getDriver();
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


 

  return (
  <div>
  
  <table className="table">
    <thead>
  <tr>
    
    <th>Car</th>
    <th>Brand</th>
    <th>Driver</th>
    <th>Drivers id</th>
  </tr>
  </thead>
  <tbody>
 
  
      {carList.length > 0 &&
        carList.map((car, index) => {
          driverList.map((driver, index) => {
          return  <tr key={index}><td> {car.brand}</td><td> {car.name}</td><td> {car.sponsor}</td><td> {driver.id}</td><td> {driver.name}</td></tr>
        })        
          //return  <tr key={index}><td> {element.id}</td><td> {element.name}</td><
        })
      }
    {

      }

  </tbody>
</table>
</div>
  )
};

export default FetchDelete;
