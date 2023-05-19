import React from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobDuties;
