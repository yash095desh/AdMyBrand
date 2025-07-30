'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BarChart3,
  Users,
  Settings,
  PieChart,
  TrendingUp,
  Calendar,
  Bell
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    title: 'Overview',
    icon: BarChart3,
    href: '/dashboard',
    active: true
  },
  {
    title: 'Analytics',
    icon: TrendingUp,
    href: '/analytics'
  },
  {
    title: 'Campaigns',
    icon: PieChart,
    href: '/campaigns'
  },
  {
    title: 'Users',
    icon: Users,
    href: '/users'
  },
  {
    title: 'Calendar',
    icon: Calendar,
    href: '/calendar'
  },
  {
    title: 'Notifications',
    icon: Bell,
    href: '/notifications'
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings'
  }
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12 min-h-screen', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-8 w-8 mr-2 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              ADmyBRAND Insights
            </h1>
          </div>
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Navigation
            </h2>
            <ScrollArea className="h-[300px] px-1">
              {sidebarItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? 'secondary' : 'ghost'}
                  className={cn(
                    'w-full justify-start mb-1',
                    item.active && 'bg-secondary'
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}