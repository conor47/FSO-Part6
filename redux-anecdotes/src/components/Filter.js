import React from "react";
import { addFilter } from "../reducers/filterreducer";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    let value = event.target.value;
    dispatch(addFilter(value));
  };
  return (
    <div>
      <form>
        <div>
          filter name : <input onChange={handleFilter} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
