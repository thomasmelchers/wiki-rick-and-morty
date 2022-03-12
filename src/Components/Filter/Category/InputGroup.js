import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(event) => setId(event.target.value)}
        className="form-select"
        id={name}
      >
        <option value='1' selected>Choose...</option>

        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name} {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
