import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from '@/pages/Search';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-slate-900 md:bg-gradient-to-b md:from-slate-600 md:px-4 md:to-slate-800 py-0 md:py-10 px-0 min-h-screen'>
        <div className='bg-slate-900 max-w-5xl mx-auto p-4 md:p-8 md:min-h-[89vh] md:rounded-2xl'>
          <Search></Search>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
