import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import InputGroup from "../Components/Filter/Category/InputGroup";

const Locations = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let { type, dimension, name } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;
  console.log(api)

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center mb-3">
          Location: {""}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension {dimension === "" ? "Unknown" : dimension}{" "}
        </h5>
        <h6 className="text-center">
          Type {type === "" ? "Unknown" : type}{" "}
        </h6>
      </div>
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup total={126} name="Location - " setId={setId} />
        </div>
        <div className="col-12 col-lg-8">
          <div className="row">
            <Card page='/locations/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
