import React from "react";

const Counter = ({ value, name, id, onPlus, onMinus, onDelete }) => {
  const formValue = value === 0 ? "Ноль" : value;
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      <h4>{name}</h4>
      <span className={getBageClasses()}>{formValue}</span>
      <button
        onClick={() => {
          onPlus(id);
        }}
        className="btn m-2 btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => {
          onMinus(id);
        }}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
      <br />
    </>
  );
};

export default Counter;
