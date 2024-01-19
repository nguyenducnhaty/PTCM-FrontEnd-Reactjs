import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// Component
import Lazy from '@/components/Lazy';
import { Separator } from '@/components/ui/separator';
import { sidebarNavItems } from '@/constants';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Nav } from '../Nav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Layout = () => {
  const layout = localStorage.getItem('layout') || null;
  const collapsed = localStorage.getItem('collapsed') || null;
  const defaultLayout = layout ? JSON.parse(layout) : [265, 1095];
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const navCollapsedSize = 4;

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          localStorage.setItem('layout', JSON.stringify(sizes));
        }}
        className="h-full  items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onResize={(size: any) => {
            let isCollapsed = size < 10;
            setIsCollapsed(isCollapsed);
            localStorage.setItem('collapsed', JSON.stringify(isCollapsed));
          }}
          className={cn(isCollapsed && 'transition-all duration-300 ease-in-out')}
        >
          <div className="flex min-h-14 items-center p-2">
            <div
              className="w-full"
              // className={cn('w-full flex-1', isCollapsed ? 'w-full' : 'w-[80%]')}
            ></div>
          </div>
          <Separator />
          <Nav isCollapsed={isCollapsed} links={sidebarNavItems} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <div className="flex items-center justify-between px-4 py-2">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator />
          <Lazy>
            <Outlet />
          </Lazy>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default Layout;
