interface Props {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  className: string;
}

const Input = ({ className, id, name, placeholder, type }: Props) => {
  return (
    <>
      <input
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
