import React from "react";

interface Props {
  items: string[];
}

const AboutDetails = ({ items }: Props) => {
  return (
    <div className="space-y-6">
      {items.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </div>
  );
};

export default AboutDetails;
