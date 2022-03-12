import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form action="" className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        type="text"
        className={styles.input}
        placeholder="Search for Characters"
        onChange={(event) => {
          setPageNumber(1)
          setSearch(event.target.value)
        }}
      />
      <button onClick={ (event) => {
          event.preventDefault() }} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
