import React from "react";

const FilterButton = ({ index, name, items, setPageNumber, action }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check p-0">
        <input
        onClick={(event) => {

          // set the result to the page 1
          setPageNumber(1)

          // set the action (setStatus, setGender, setSpecies) to the item which has been defined in each filter)
          action(items)}}

          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
      {/*       <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="btn btn-outline-primary" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div> */}
    </div>
  );
};

export default FilterButton;
