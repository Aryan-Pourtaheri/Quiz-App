'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  BarChart3,
  Settings,
  LayoutDashboard,
  Bell,
  Search,
  TrendingUp,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const sidebarData = {
    title: "Admin",
    initials: "A",
    links: [
      { label: "Dashboard", href: "#", icon: LayoutDashboard },
      { label: "Users", href: "#", icon: Users },
      { label: "Quizzes", href: "#", icon: FileText },
      { label: "Reports", href: "#", icon: BarChart3 },
      { label: "Settings", href: "#", icon: Settings },
    ],
  };

  const stats = [
    { label: "Total Users", value: 1200, color: "#3b82f6", icon: Users },
    { label: "Active Quizzes", value: 34, color: "#fbbf24", icon: FileText },
    { label: "Reports", value: 5, color: "#3b82f6", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-64 bg-white shadow-lg border-r border-gray-200 flex-shrink-0"
      >
        <div className="p-6 border-b border-gray-200 flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {sidebarData.initials}
            </span>
          </div>
          <h1 className="text-lg font-bold text-gray-800">{sidebarData.title}</h1>
        </div>

        <nav className="flex flex-col mt-4 space-y-1 px-4">
          {sidebarData.links.map((link) => {
            const IconComponent = link.icon;
            return (
              <motion.button
                key={link.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveLink(link.label)}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  activeLink === link.label
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <IconComponent size={20} />
                <span>{link.label}</span>
              </motion.button>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 p-6"
      >
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <motion.button
              whileHover={{ rotate: 15 }}
              className="relative p-2 rounded-full hover:bg-gray-100"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </motion.button>
          </div>
        </header>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md border"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                    <Icon size={24} style={{ color: stat.color }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.main>
    </div>
  );
};

export default AdminDashboard;
