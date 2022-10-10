import React from "react";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  skills: string[];
}
export default function SkillSets({ skills, className }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => {
        return (
          <p
            key={skill}
            className={`px-5 py-2 text-white bg-blue-600 rounded-md ${className}`}
          >
            {skill}
          </p>
        );
      })}
    </div>
  );
}
