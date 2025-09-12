export default function AdminPage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#1e293b] via-[#3b82f6] to-[#fbbf24]">
      {/* Sidebar */}
      <aside className="w-64 bg-white/90 shadow-lg flex flex-col p-6 min-h-screen">
        <div className="flex items-center gap-2 mb-10">
          <span className="bg-[#fbbf24] rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#1e293b] text-xl">A</span>
          <span className="text-[#1e293b] text-2xl font-bold tracking-wide">Admin</span>
        </div>
        <nav className="flex flex-col gap-4 text-[#1e293b] font-medium">
          <a href="#" className="hover:text-[#3b82f6]">Dashboard</a>
          <a href="#" className="hover:text-[#3b82f6]">Users</a>
          <a href="#" className="hover:text-[#3b82f6]">Quizzes</a>
          <a href="#" className="hover:text-[#3b82f6]">Reports</a>
          <a href="#" className="hover:text-[#3b82f6]">Settings</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-[#1e293b] mb-8">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
          {/* Stat Cards */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4 border-[#3b82f6]">
            <span className="text-sm text-gray-500 mb-2">Total Users</span>
            <span className="text-2xl font-bold text-[#1e293b]">1,200</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4 border-[#fbbf24]">
            <span className="text-sm text-gray-500 mb-2">Active Quizzes</span>
            <span className="text-2xl font-bold text-[#1e293b]">34</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start border-l-4 border-[#3b82f6]">
            <span className="text-sm text-gray-500 mb-2">Reports</span>
            <span className="text-2xl font-bold text-[#1e293b]">5</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Activity Log */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Activity Log</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Quiz &quot;Math Final&quot; created by Teacher A</li>
              <li>Student B completed &quot;Science Quiz&quot;</li>
              <li>Teacher C reviewed results for &quot;History Quiz&quot;</li>
              <li>New user registered: Student D</li>
            </ul>
          </div>
          {/* Upcoming Meetings */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Upcoming Meetings</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Staff Meeting - Sep 15, 10:00 AM</li>
              <li>Quiz Review - Sep 18, 2:00 PM</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
