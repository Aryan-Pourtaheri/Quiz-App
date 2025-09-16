'use client';
import React, { useState } from "react";
import {
  Users,
  FileText,
  BarChart3,
  Settings,
  LayoutDashboard,
  Bell,
  Search,
  Calendar,
  Activity,
  TrendingUp,
  CheckCircle,
  Clock,
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

  const activityLog = [
    'Quiz "Math Final" created by Teacher A',
    'Student B completed "Science Quiz"',
    'Teacher C reviewed results for "History Quiz"',
    "New user registered: Student D",
  ];

  const upcomingMeetings = [
    "Staff Meeting - Sep 15, 10:00 AM",
    "Quiz Review - Sep 18, 2:00 PM",
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-lg border-r border-gray-200 flex-shrink-0">
        <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">{sidebarData.initials}</span>
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-800">{sidebarData.title}</h1>
              <p className="text-sm text-gray-500 hidden lg:block">Dashboard</p>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col mt-4 space-y-1 px-2 lg:px-6">
          {sidebarData.links.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => setActiveLink(link.label)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
                  activeLink === link.label
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium text-sm lg:text-base">{link.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600 text-sm sm:text-base">Welcome back! Heres what&apos;s happening today.</p>
          </div>

          {/* Search + Notification */}
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative w-full sm:w-64 lg:w-80 transition-all duration-300 group">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 shadow-sm placeholder-gray-400 text-gray-700
                          focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 hover:shadow-md focus:shadow-lg transition-all duration-300"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value.toLocaleString()}</p>
                  </div>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                    <IconComponent size={24} style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="flex items-center mt-2 text-xs sm:text-sm">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <span className="text-green-600 font-medium">+12%</span>
                  <span className="text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activity & Meetings */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
          {/* Activity Log & Upcoming Meetings code remains same but responsive text & spacing */}
        </div>
      </main>
    </div>


  );
};

export default AdminDashboard;
