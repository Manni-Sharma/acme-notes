import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ description, title }) => {
  return (
    <div className="bg-black max-w-sm p-6 border border-gray-100 rounded-lg shadow hover:bg-gray-800 transition-colors">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
