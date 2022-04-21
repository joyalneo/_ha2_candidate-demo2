import React, { useState, useEffect } from "react";
import CandidateList from "./CandidateList.js";
import "./Candidates.scss";

const Candidates = (props) => {
  return (
    <div className="float-left mt-6 w-full rounded-lg bg-[#fafafb] p-6">
      <CandidateList />
    </div>
  );
};

export default Candidates;
