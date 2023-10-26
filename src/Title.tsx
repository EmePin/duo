import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <div className="header-div">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Title;
