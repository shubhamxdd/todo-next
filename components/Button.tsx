"use client";

interface Props {
  text: string;
  onClick?: () => void;
}

const Button = ({ text }: Props) => {
  const onClick = () => {
    console.log("clicked");
  };
  // TODO: Add classes
  return (
    <button className="" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
