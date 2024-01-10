import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

// Components
import { Toaster } from '@/components/ui/toaster';

// Routes
import { ROUTER } from './routes';

const App = () => {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <RouterProvider router={ROUTER} />
      <Toaster />
    </SWRConfig>
  );
};

export default App;
