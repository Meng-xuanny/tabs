import React from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, title, id, duties } = jobs[currentItem];
  return (
    <div>
      <article key={id}>
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <JobDuties duties={duties} />
      </article>
    </div>
  );
};

export default JobInfo;
