import React from "react";
import { readUrl } from "../settings";
import { useState, useEffect } from "react";
import FetchReadJr from "./FetchReadJr";
import LoadingIcons from "react-loading-icons";

const FetchRead = () => {
  const [manySideList, setManySideList] = useState([]);

  useEffect(() => {
    const getMany = async () => {
      const fromAPI = await getManySides();
      setManySideList(fromAPI);
    };
    getMany();
  }, []);

  const getManySides = async () => {
    document.querySelector(".loading").style.display = "block";
    const res = await fetch(readUrl);
    const data = await res.json();
    document.querySelector(".loading").style.display = "none";
    return data;
  };

  return (
    <div>
      <LoadingIcons.ThreeDots className="loading" />
      {manySideList.length > 0 ? (
        manySideList.map((element, index) => {
          return <FetchReadJr key={index} props={element} />;
        })
      ) : (
        <h2>There are no many sides</h2>
      )}
    </div>
  );
};

export default FetchRead;
