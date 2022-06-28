import React from "react";
import { readUrl } from "../settings";
import { useState, useEffect } from "react";
import FetchReadJr from "./FetchReadJr";


const FetchRead = () => {
  const [raceList, setRaceList] = useState([]);

  useEffect(() => {
    const getRace = async () => {
      const fromAPI = await getRaces();
      setRaceList(fromAPI);
    };
    getRace();
  }, []);

  const getRaces = async () => {
    const res = await fetch(readUrl);
    const data = await res.json();
    return data;
  };


  return (
    <div>
      {raceList.length > 0 ? (
        raceList.map((element, index) => {
          return <FetchReadJr key={index} props={element} />;
        })
      ) : (
        <h2>There are no many sides</h2>
      )}
    </div>
  );
};

export default FetchRead;
