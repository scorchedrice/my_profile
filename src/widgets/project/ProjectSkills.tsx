<<<<<<< HEAD
// @ts-ignore
import * as React from 'react';
=======
>>>>>>> d256ce2e3063baeb99ce3abba9fda3e8ededb261
export default function ProjectSkills({skills} : { skills : string[]}) {

  return (
    <div className="flex flex-wrap gap-1 w-full">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-md px-2 py-0.5"
          >
            <span className="text-xs">{skill}</span>
          </div>
        );
      })}
    </div>
  );
}