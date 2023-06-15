import { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
  onReset: () => void;
}

const Input: React.FC<InputProps> = ({
  value = '',
  placeholder = '',
  type = 'text',
  onChange,
  onReset,
}: InputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.code === 'Escape') {
      onReset();
    }
  }

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='bg-slate-800 rounded-xl px-4 py-2 focus:outline-none text-white w-full md:w-60'
      />
    </>
  );
};

export default Input;
