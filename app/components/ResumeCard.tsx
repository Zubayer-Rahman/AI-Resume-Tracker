import React from "react";
import { Link } from "react-router";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
        <div className="flex flex-col">
            <h2 className="text-black! font-bold wrap-break-word">
                {resume.companyName}
            </h2>

            <h3 className="text-grey-500 text-lg wrap-break-word">
                {resume.jobTitle}
            </h3>
        </div>
    </Link>
  );
};

export default ResumeCard;
