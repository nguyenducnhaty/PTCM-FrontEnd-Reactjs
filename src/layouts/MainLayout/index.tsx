import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Component
import Lazy from '@/components/Lazy';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants';
import { SidebarNav } from '../sidebar-nav';

// Context
import { AppContext } from '@/provider/AppProvider';

const sidebarNavItems = [
  {
    title: 'Nhật kí cấy',
    href: ROUTES.ROOT,
  },
  {
    title: 'Soi cây',
    href: ROUTES.TREE_SCREENING,
  },
  {
    title: 'Phát Mô',
    href: ROUTES.TISSUE_DEVELOPMENT,
  },
];

const Layout = () => {
  const contextValue = useContext(AppContext);
  const { userState } = contextValue;
  let navigate = useNavigate();

  useEffect(() => {
    if (!userState.accessToken) {
      navigate('/auth/login');
    }
  }, [userState]);

  return (
    <>
      <div className="md:hidden">
        <img src="/examples/forms-light.png" width={1280} height={791} alt="Forms" className="block dark:hidden" />
        <img src="/examples/forms-dark.png" width={1280} height={791} alt="Forms" className="hidden dark:block" />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground"></p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-4xl">
            <Lazy>
              <Outlet />
            </Lazy>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
