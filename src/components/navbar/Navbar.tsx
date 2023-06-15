import { User } from '@/interfaces/user';

interface NavbarProps {
  user?: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }: NavbarProps) => {
  return (
    <>
      <nav className='flex mb-6 items-center justify-between text-white'>
        <div>
          <h2 className='text-2xl'>
            Hello
            <span className='font-bold'>
              {' '}
              {user ? user.firstName + user.lastName : 'Guest'}
            </span>
          </h2>
          <p className='text-sm opacity-50'>Search your favorite movies</p>
        </div>
        <img
          className='w-12 h-12 rounded-full'
          src={
            user
              ? user.avatarUrl
              : 'https://cdn.dribbble.com/users/5000931/avatars/small/bf628f78ed7baffd9845461de16a22a0.png?1662824196'
          }
          alt=''
        />
      </nav>
    </>
  );
};

export default Navbar;

