import React from "react";

export default function SearchBar(props) {
  const { value, submitHandle, changeHandle } = props;
  return (
    <div className="form-wrapper">
      <form onSubmit={submitHandle} className="form">
        <input
          type="text"
          className="form__text-input"
          id="search-movie"
          onChange={changeHandle}
          value={value}
        />
        <input type="submit" className="btn" value="Search" />
      </form>
    </div>
  );
}
