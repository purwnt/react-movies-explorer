import Button from '@/components/elements/button/Button';
import Input from '@/components/elements/input/Input';

interface SearchFormProps {
  keyword: string;
  onChange: (value: string) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  keyword = '',
  onChange,
  onClick,
  onReset,
}: SearchFormProps) => {
  return (
    <>
      <form className='flex justify-center gap-2 md:-mt-20 md:pt-2'>
        <Input
          value={keyword}
          onChange={onChange}
          onReset={onReset}
          placeholder='Enter keyword'
        ></Input>
        <div className='w-20'>
          <Button disabled={!keyword} onClick={onClick} text='Search'></Button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
