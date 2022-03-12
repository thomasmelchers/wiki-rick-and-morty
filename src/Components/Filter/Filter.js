import React from "react";
import Gender from "./Category/Gender";
import Species from './Category/Species'
import Status from './Category/Status'

const Filter = ({setGender, setStatus, setSpecies, setPageNumber}) => {

  // This function will reset all the state to null
  const clear = () => {
    setGender('')
    setStatus('')
    setSpecies('') 
    setPageNumber('')
    window.location.reload(false)
  }

  return (
    <div className="col-12 col-lg-3 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        className="text-center text-decoration-underline text-primary mb-5"
        style={{ cursor: "pointer" }}
        onClick={clear}
      >
        Clear all Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filter;
