'use client';
import React, { useState } from 'react';
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
  Clock
} from "lucide-react";

const AdminDashboard = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');
  
  const sidebarData = {
    title: "Admin",
    initials: "A",
    links: [
      { label: "Dashboard", href: "#", icon: LayoutDashboard },
      { label: "Users", href: "#", icon: Users },
      { label: "Quizzes", href: "#", icon: FileText },
      { label: "Reports", href: "#", icon: BarChart3 },
      { label: "Settings", href: "#", icon: Settings }
    ]
  };

  const stats = [
    { label: "Total Users", value: 1200, color: "#3b82f6", icon: Users },
    { label: "Active Quizzes", value: 34, color: "#fbbf24", icon: FileText },
    { label: "Reports", value: 5, color: "#3b82f6", icon: BarChart3 }
  ];

  const activityLog = [
    "Quiz \"Math Final\" created by Teacher A",
    "Student B completed \"Science Quiz\"",
    "Teacher C reviewed results for \"History Quiz\"",
    "New user registered: Student D"
  ];

  const upcomingMeetings = [
    "Staff Meeting - Sep 15, 10:00 AM",
    "Quiz Review - Sep 18, 2:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">{sidebarData.initials}</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{sidebarData.title}</h1>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          {sidebarData.links.map((link) => {
            const IconComponent = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => setActiveLink(link.label)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors duration-200 ${
                  activeLink === link.label
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{link.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-800">{stat.value.toLocaleString()}</p>
                    </div>
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <IconComponent size={24} style={{ color: stat.color }} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <TrendingUp size={16} className="text-green-500 mr-1" />
                    <span className="text-green-600 font-medium">+12%</span>
                    <span className="text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Activity Log */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Activity className="mr-2 text-blue-600" size={20} />
                  Recent Activity
                </h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {activityLog.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{activity}</p>
                      <p className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 60) + 1} minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Meetings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Calendar className="mr-2 text-purple-600" size={20} />
                  Upcoming Meetings
                </h3>
                <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                  Schedule
                </button>
              </div>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <Clock className="text-purple-600 flex-shrink-0" size={18} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{meeting.split(' - ')[0]}</p>
                      <p className="text-xs text-gray-600">{meeting.split(' - ')[1]}</p>
                    </div>
                    <CheckCircle className="text-purple-600 cursor-pointer hover:text-purple-800" size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Create Quiz", icon: FileText, color: "bg-blue-500" },
                { label: "Add User", icon: Users, color: "bg-green-500" },
                { label: "Generate Report", icon: BarChart3, color: "bg-purple-500" },
                { label: "System Settings", icon: Settings, color: "bg-gray-500" }
              ].map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
                  >
                    <div className={`${action.color} p-3 rounded-lg mb-2`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;