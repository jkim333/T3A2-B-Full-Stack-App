import React from "react";

const Header = () => {
  return (
    <div className="text-lg grid grid-cols-3 col:auto  text-center mt-1 text-blue-200 ">
      <div>Sets</div>
      <div>Weights(kgs)</div>
      <div>Reps</div>
    </div>
  );
};

const Row = (props) => {
  return (
    <div className="grid grid-cols-3 col:auto  text-center mt-1 text-blue-200 text-lg rounded-sm mb-1 bg-gradient-to-b from-sky-800 to-sky-700 opacity-75">
      <div>{1}</div>
      <div>{20}</div>
      <div>{12}</div>
    </div>
  );
};

const Table = (props) => {
  return (
    <div className=" p-0.5 rounded w-11/12 mx-auto my-7 ">
      <p className="text-blue-200 text-center text-xl border-b border-sky-800 pt-10">
        {"Abs crunch"}
      </p>
      <Header />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export { Row, Header, Table };
