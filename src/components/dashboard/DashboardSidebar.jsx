import {
  Bars,
  Bell,
  Briefcase,
  Gear,
  House,
  Magnifier,
  Person,
} from '@gravity-ui/icons';
import { Button, Drawer } from '@heroui/react';
import Link from 'next/link';

export function DashboardSidebar() {
  const navItems = [
    {
      icon: House,
      href: '/dashboard/recruiter',
      label: 'DashBoard',
    },
    {
      icon: Magnifier,
      href: '/dashboard/recruiter/jobs',
      label: 'Jobs',
    },
    {
      icon: Bell,
      href: '/dashboard/recruiter/jobs/new',
      label: 'Create A Job',
    },
    {
      icon: Briefcase,
      href: '/dashboard/recruiter/company',
      label: 'Company Profile',
    },
    {
      icon: Person,
      href: '/',
      label: 'Profile',
    },
    {
      icon: Gear,
      href: '/dashboard/recruiter/settings',
      label: 'Settings',
    },
  ];

  const navContent = (
    <nav className="flex flex-col gap-1.5">
      {navItems.map(item => (
        <Link
          key={item.label}
          href={item.href}
          className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-white/[0.05] text-gray-400 transition-colors group-hover:bg-blue-500/10 group-hover:text-blue-300">
            <item.icon className="size-5" />
          </span>
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-xl shadow-black/20 lg:block">
        <div className="mb-6 border-b border-white/10 px-2 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Recruiter
          </p>
          <h2 className="mt-2 text-lg font-bold text-white">Dashboard</h2>
        </div>
        {navContent}
      </aside>

      <Drawer>
        <Button
          variant="secondary"
          className="mr-4 border border-white/10 bg-white/[0.06] text-white lg:hidden"
        >
          <Bars />
          Sidebar
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Header>
                <Drawer.Heading>Menu</Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body className="bg-[#05070d] text-white">
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
