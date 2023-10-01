"use client";

interface Props {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const Button = ({ text, className, type = "button" }: Props) => {
  const onClick = () => {
  };
  // TODO: Add classes
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
