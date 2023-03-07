import React from "react";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <pre>Id = {props.match.params.id}</pre>
  );
};

export default EditExpensePage;