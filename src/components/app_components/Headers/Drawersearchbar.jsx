import React from "react";

function Drawersearchbar() {
  return (
    <form className="form-control flex flex-col space-x-2 space-y-4 text-accent ">
      <input
        type="text"
        placeholder="Search"
        className="w-auto p-3 font-Popins text-xl  border-accent border-2  placeholder:text-[cyan] focus:border-accent"
      />
      <button className="btn btn-accent ">SEARCH</button>
    </form>
  );
}

export default Drawersearchbar;
