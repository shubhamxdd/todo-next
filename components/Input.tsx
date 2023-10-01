interface Props {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ className, id, name, placeholder, type }: Props) => {
  return (
    <>
      <input
        // onChange={onchange}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
