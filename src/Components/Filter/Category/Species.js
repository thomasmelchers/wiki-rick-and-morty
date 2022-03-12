import React from "react";
import FilterButton from "../FilterButton";

const Species = ({setSpecies, setPageNumber}) => {

  // the value of the filter which will be asign to the setSpecies when you click on it
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap justify-content-center gap-3">
          {species.map((items, index) => (
            <FilterButton
              key={index}
              name="species"
              index={index}
              items={items}
              // asign the value of specie to an action
              action={setSpecies}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
