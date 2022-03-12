import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import InputGroup from "../Components/Filter/Category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
          Episode: {""}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}{" "}
        </h5>
      </div>
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup total={51} name="Episode - " setId={setId} />
        </div>
        <div className="col-12 col-lg-8">
          <div className="row">
            <Card page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
