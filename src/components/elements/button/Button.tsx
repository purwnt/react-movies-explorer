interface ButtonProps {
  text?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  disabled = false,
  onClick,
}: ButtonProps) => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onClick(event);
  }

  return (
    <>
      <button
        disabled={disabled}
        onClick={handleClick}
        className='bg-sky-500 text-white px-4 py-2 rounded-xl disabled:cursor-not-allowed'
      >
        {text}
      </button>
    </>
  );
};

export default Button;
