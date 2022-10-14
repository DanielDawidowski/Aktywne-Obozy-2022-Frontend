import React from "react";
import { useHistory } from "react-router-dom";

const GoBackButton = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => history.goBack()}>Wróć</button>
    </>
  );
};

export default GoBackButton;
