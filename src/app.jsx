import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const hendleDelete = (counterId) => {
    const newCounter = counters.filter((c) => c.id !== counterId);
    setCounters(newCounter);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (counterId) => {
    const nCounter = counters.map((c) => {
      if (c.id === counterId) {
        c.value++;
      }
      return c;
    });
    setCounters(nCounter);
  };

  const handleDecrement = (counterId) => {
    const nCounter = counters.map((c) => {
      if (c.id === counterId) {
        if (c.value > 0) {
          c.value--;
        }
      }
      return c;
    });
    setCounters(nCounter);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          hendleDelete={hendleDelete}
          handleReset={handleReset}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
