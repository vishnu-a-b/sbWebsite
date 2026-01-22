'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  CreditCard,
  Users,
  Mail,
  Image,
  Video,
  FileText,
  Settings,
  LogOut,
  BarChart3,
  Home,
  Briefcase,
  Award,
  Newspaper,
  UserCircle,
  ListOrdered,
  Info,
  Heart,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function SidebarDropdown({ label, icon: Icon, items, currentPath }: any) {
    const isChildActive = items.some((item: any) => currentPath === item.href || currentPath.startsWith(item.href + '?'));
    const [isOpen, setIsOpen] = useState(isChildActive);
  
    // Auto-expand if a child is active
    // useEffect(() => {
    //   if (isChildActive) setIsOpen(true);
    // }, [isChildActive]);
  
    return (
      <div className="mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
            isChildActive || isOpen ? 'bg-white/10' : 'hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-secondary" />
            <span className="font-medium text-white">{label}</span>
          </div>
          {isOpen ? <ChevronDown className="w-4 h-4 text-white/70" /> : <ChevronRight className="w-4 h-4 text-white/70" />}
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pl-4 pt-1 space-y-1">
                {items.map((item: any) => {
                  const isActive = currentPath === item.href;
                  const ItemIcon = item.icon;
                  return (
                    <Link key={item.href} href={item.href}>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            isActive 
                            ? 'bg-white text-primary font-medium shadow-sm' 
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}>
                            <ItemIcon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-white/70'}`} />
                            <span className="text-sm">{item.label}</span>
                        </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin', category: 'main' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics', category: 'main' },

  // CMS Content Management
  { icon: Home, label: 'Homepage Sections', href: '/admin/homepage', category: 'cms' },
  { icon: Video, label: 'Hero Banners', href: '/admin/banners', category: 'cms' },
  { icon: Info, label: 'About Us', href: '/admin/about', category: 'cms' },
  { icon: ListOrdered, label: 'Services', href: '/admin/services', category: 'cms' },
  { icon: Briefcase, label: 'Featured Projects', href: '/admin/projects', category: 'cms' },
  { icon: Award, label: 'Awards & Recognition', href: '/admin/awards', category: 'cms' },
  { icon: Newspaper, label: 'News & Events', href: '/admin/news-events', category: 'cms' },
  { icon: Briefcase, label: 'Benevity Projects', href: '/admin/benevity-projects', category: 'cms' },
  { icon: Heart, label: 'Benevity Impact', href: '/admin/banners?location=benevity', category: 'cms' },
  { icon: UserCircle, label: 'Team Members', href: '/admin/team', category: 'cms' },
  { icon: Image, label: 'Gallery', href: '/admin/gallery', category: 'cms' },

  // Operations
  { icon: CreditCard, label: 'Donations', href: '/admin/payments', category: 'operations' },
  { icon: Users, label: 'Volunteers', href: '/admin/volunteers', category: 'operations' },
  { icon: Mail, label: 'Contact Messages', href: '/admin/messages', category: 'operations' },

  // Settings
  { icon: Settings, label: 'Settings', href: '/admin/settings', category: 'settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-gradient-to-br from-primary via-primary to-primary/95 text-white min-h-screen flex flex-col shadow-2xl relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Logo/Header */}
      <div className="relative p-6 border-b border-white/20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-white rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">❤️</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              Shanthibhavan
            </h2>
            <p className="text-xs text-secondary/90 font-medium">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 p-4 space-y-1 overflow-y-auto">
        {/* Main Section */}
        {menuItems.filter(item => item.category === 'main').map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white text-primary shadow-lg font-semibold'
                    : 'hover:bg-white/15 backdrop-blur-sm'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-secondary'}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}

        {/* CMS Dropdown */}
        <SidebarDropdown 
            label="CMS Content" 
            icon={FileText}
            items={menuItems.filter(item => item.category === 'cms')}
            currentPath={pathname}
        />

        {/* Operations Section */}
        <div className="pt-4 pb-2">
          <p className="text-xs font-semibold text-secondary/80 uppercase tracking-wider px-4 mb-2">Operations</p>
        </div>
        {menuItems.filter(item => item.category === 'operations').map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white text-primary shadow-lg font-semibold'
                    : 'hover:bg-white/15 backdrop-blur-sm'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-secondary'}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}

        {/* Settings Section */}
        <div className="pt-4 pb-2">
          <p className="text-xs font-semibold text-secondary/80 uppercase tracking-wider px-4 mb-2">Settings</p>
        </div>
        {menuItems.filter(item => item.category === 'settings').map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white text-primary shadow-lg font-semibold'
                    : 'hover:bg-white/15 backdrop-blur-sm'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-secondary'}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="relative p-4 border-t border-white/20">
        <button className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-500/20 w-full transition-all text-left border border-white/10 hover:border-red-400/50 group">
          <LogOut className="w-5 h-5 text-secondary group-hover:text-red-300" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
