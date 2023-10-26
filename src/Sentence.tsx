import React from "react";

interface SentenceProps {
  sentence: string;
}

const Sentence: React.FC<SentenceProps> = ({ sentence }) => {
  return (
    <>
      <div className="chat-bubble">{sentence}</div>
    </>
  );
};

export default Sentence;
