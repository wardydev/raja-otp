import { useState } from "react";
import ICopy from "/icons/ICopy.svg";
import ICorrect from "/icons/ICorrect.svg";

const ButtonCopy = ({ textToCopy }: { textToCopy: number }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopyNumbe = (textToCopy: number) => {
    navigator.clipboard.writeText(textToCopy.toString());
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <button
      className={`${
        isCopied ? "bg-[#03b703]" : "bg-gradient-to-tr"
      } from-primary-100 hover:from-primary-200 to-secondary-100 hover:to-secondary-200 p-2 rounded`}
      onClick={() => handleCopyNumbe(textToCopy)}
    >
      {isCopied ? (
        <img src={ICorrect} alt="copy-icons" />
      ) : (
        <img src={ICopy} alt="copy-icons" />
      )}
    </button>
  );
};

export default ButtonCopy;
