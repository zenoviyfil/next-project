import React from "react";

const dashboard = () => {
  return (
    <div className="w-1/5 flex flex-col justify-between">
      <ul className="py-10 px-5">
        <li className="py-3">
          <button>Home</button>
        </li>
        <li className="py-3">
          <button>Gallery</button>
        </li>
        <li className="py-3">
          <button>About us</button>
        </li>
        <li className="py-3">
          <button>Contacts</button>
        </li>
      </ul>
      <button className="w-fit px-5 mb-5">Log out!</button>
    </div>
  );
};

export default dashboard;
