import React, { useState } from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, i) => (
        <button
          key={job.id}
          onClick={() => setCurrentItem(i)}
          className={i === currentItem ? "job-btn active-btn" : "job-btn"}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
