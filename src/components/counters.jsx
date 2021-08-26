import React from "react";
import Counter from "./counter";

const Counters = ({
  handleReset,
  counters,
  handleIncrement,
  handleDecrement,
  hendleDelete,
}) => {
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onPlus={handleIncrement}
          onMinus={handleDecrement}
          onDelete={hendleDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
