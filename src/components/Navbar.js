import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ThinkPlus</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
