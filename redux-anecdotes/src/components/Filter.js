import React from "react";
import { addFilter } from "../reducers/filterreducer";
import { connect } from "react-redux";

const Filter = (props) => {
  const handleFilter = (event) => {
    let value = event.target.value;
    props.addFilter(value);
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

const mapDispatchToProps = {
  addFilter,
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
