import { Outlet } from 'react-router-dom';

// Component
import Lazy from '@/components/Lazy';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants';
import { SidebarNav } from '../sidebar-nav';

const sidebarNavItems = [
  {
    title: 'Soi Cây',
    href: ROUTES.TREE_SCREENING,
  },
  {
    title: 'Phát Mô',
    href: ROUTES.TISSUE_DEVELOPMENT,
  },
  {
    title: 'Nhật Kí Cấy',
    href: ROUTES.ROOT,
  },
  {
    title: 'Nhập Mẫu Nhiễm',
    href: ROUTES.ENTER_INFECTED_SAMPLE_INFORMATION,
  },
  {
    title: 'Quét Mẫu Nhiễm',
    href: ROUTES.SCAN_FOR_INFECTED_SAMPLES,
  },
];

const Layout = () => {
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
