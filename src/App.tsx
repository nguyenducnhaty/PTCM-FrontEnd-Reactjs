import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

// Components
import { Toaster } from '@/components/ui/toaster';

// Routes
import { ROUTER } from './routes';

// Provider
import { AppProvider } from './provider/AppProvider';

const App = () => {
  const existedUserSession = JSON.parse(localStorage.getItem('token') || 'null');

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <AppProvider>
        <RouterProvider router={ROUTER} />
      </AppProvider>
      <Toaster />
    </SWRConfig>
  );
};

export default App;
