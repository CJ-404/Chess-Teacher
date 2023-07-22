// row number square of a row.
// import React from "react";

interface Props {
  digit: number;
}

const RowNumber = ({ digit }: Props) => {
  return (
    <div className="wrapper-side text-light d-flex justify-content-center align-items-center">
      <div>{digit}</div>
    </div>
  );
};

export default RowNumber;
