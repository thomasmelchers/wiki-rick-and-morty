import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({setGender, setPageNumber}) => {
  
  // the value of the filter which will be asign to the setGender when you click on it
  let gender = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap justify-content-center gap-3">
          {gender.map((items, index) => (
            <FilterButton
              key={index}
              name="gender"
              index={index}
              items={items}
              // asign the value of gender to an action
              setPageNumber={setPageNumber}
              action={setGender}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
