import React from "react";

export type openButtonProps = {
  text: string;
  onClick: () => void;
};

//React.memo化
const OpenButton = React.memo(({ text, onClick }: openButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="mt-2 inline-block bg-yellow-500 p-1 text-center text-white"
      >
        {text}
      </button>
    </div>
  );
});

export default OpenButton;
