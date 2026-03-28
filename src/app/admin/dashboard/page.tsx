"use client";

import { BarChart3, ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const overviewCards = [
  { label: "Total Legal Service Providers", value: 450 },
  { label: "Total individual providers registered", value: 450 },
  { label: "Total organizational providers registered", value: 450 },
  { label: "Total Clients", value: 450 },
  { label: "Total individual client registered", value: 450 },
  { label: "Total organizational client registered", value: 450 },
];

const filterableCards = [
  { label: "Total jobs posted", value: 450 },
  { label: "Total jobs hired", value: 450 },
];

const bottomCards = [
  { label: "Total Jobs Posted", value: 450 },
  { label: "Total Jobs Hired", value: 450 },
  { label: "Completed Jobs", value: 450 },
  { label: "Disputed Jobs", value: 450 },
];

const financialData = [
  { name: "Platform Fees", value: 14000 },
  { name: "Subscriptions", value: 5000 },
  { name: "Verification", value: 3500 },
  { name: "Dispute Fees", value: 2000 },
  { name: "Others", value: 1500 },
];

const disputeData = [
  { name: "Resolved", value: 55 },
  { name: "Pending", value: 25 },
  { name: "Escalated", value: 20 },
];

const DISPUTE_COLORS = ["#1B2A4A", "#3B6B9A", "#D4A843"];

const filterOptions = ["This week", "This Month", "This Year"];

const monthlyRegistrationData = [
  { name: "Jan", lawyers: 60, clients: 45 },
  { name: "Feb", lawyers: 75, clients: 50 },
  { name: "Mar", lawyers: 55, clients: 40 },
  { name: "Apr", lawyers: 50, clients: 55 },
  { name: "May", lawyers: 65, clients: 85 },
];

// Generate dense data points for a natural, jagged area chart
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const userGrowthData = (() => {
  const base = [
    380,410,390,420,400,385,395,415,405,430,  // Jan
    390,400,420,410,395,405,380,400,415,425,  // Feb
    385,395,410,400,420,405,390,415,430,410,  // Mar
    400,420,440,430,450,470,490,510,530,500,  // Apr
    480,520,560,540,510,490,470,440,420,400,  // May
    380,360,350,340,355,370,360,345,365,380,  // Jun
    370,360,380,390,375,385,370,355,365,380,  // Jul
    390,400,420,440,460,480,470,490,510,500,  // Aug
    480,500,530,510,490,470,480,460,450,440,  // Sep
    430,420,410,400,390,380,375,385,395,405,  // Oct
    390,380,370,365,375,385,380,370,360,375,  // Nov
    380,390,400,410,420,415,405,395,410,420,  // Dec
  ];
  return base.map((v, i) => ({
    name: i % 10 === 0 ? months[Math.floor(i / 10)] : "",
    month: months[Math.floor(i / 10)],
    value: v,
  }));
})();

/* ------------------------------------------------------------------ */
/*  Stat Card                                                          */
/* ------------------------------------------------------------------ */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        <BarChart3 size={22} className="text-[#1B2A4A]" />
      </div>
      <div>
        <p className="text-xs text-gray-500 leading-tight">{label}</p>
        <p className="mt-1 text-2xl font-bold text-[#1B2A4A]">{value}</p>
      </div>
    </div>
  );
}

function StatCardWithFilter({ label, value }: { label: string; value: number }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("This Month");

  return (
    <div className="relative flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        <BarChart3 size={22} className="text-[#1B2A4A]" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 leading-tight">{label}</p>
        <p className="mt-1 text-2xl font-bold text-[#1B2A4A]">{value}</p>
      </div>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-600"
        >
          {selected} <ChevronDown size={12} />
        </button>
        {open && (
          <div className="absolute right-0 top-full z-10 mt-1 w-32 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className="block w-full px-3 py-1.5 text-left text-xs text-gray-600 hover:bg-gray-50"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Filter Dropdown                                                    */
/* ------------------------------------------------------------------ */

function FilterDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("This Month");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-600"
      >
        {selected} <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-10 mt-1 w-32 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="block w-full px-3 py-1.5 text-left text-xs text-gray-600 hover:bg-gray-50"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress Bar                                                       */
/* ------------------------------------------------------------------ */

function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <p className="w-32 text-xs text-gray-600">{label}</p>
      <div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: value, backgroundColor: color }}
        />
      </div>
      <p className="w-10 text-right text-xs font-semibold text-[#1B2A4A]">{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  User Growth Filter Dropdown                                        */
/* ------------------------------------------------------------------ */

function GrowthFilterDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Clients");
  const options = ["Lawyers", "Clients"];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-600"
      >
        {selected} <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-10 mt-1 w-28 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="block w-full px-3 py-1.5 text-left text-xs text-gray-600 hover:bg-gray-50"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#1B2A4A]">Overview</h1>

      {/* Row 1 – 4 stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewCards.slice(0, 4).map((c) => (
          <StatCard key={c.label} {...c} />
        ))}
      </div>

      {/* Row 2 – 2 plain + 2 filterable */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewCards.slice(4).map((c) => (
          <StatCard key={c.label} {...c} />
        ))}
        {filterableCards.map((c) => (
          <StatCardWithFilter key={c.label} {...c} />
        ))}
      </div>

      {/* Row 3 – bottom cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bottomCards.map((c) => (
          <StatCard key={c.label} {...c} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Financial Overview */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg text-amber-500">$</span>
            <h2 className="text-lg font-bold text-[#1B2A4A]">Financial Overview</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#1B2A4A" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Dispute Resolution Status */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg">⚖️</span>
            <h2 className="text-lg font-bold text-[#1B2A4A]">Dispute Resolution Status</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={disputeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                dataKey="value"
                paddingAngle={2}
              >
                {disputeData.map((_, index) => (
                  <Cell key={index} fill={DISPUTE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value: string) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trust Account + New Registrations */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Trust Account */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500">Trust Account</h2>
          <p className="mt-2 text-3xl font-bold text-[#1B2A4A]">$17,500</p>
          <p className="mt-1 text-xs text-gray-400">Current balance</p>
        </div>

        {/* New Registrations */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-amber-500">👤</span>
              <h2 className="text-base font-bold text-[#1B2A4A]">New Registrations</h2>
            </div>
            <FilterDropdown />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Lawyers</p>
              <p className="text-xl font-bold text-[#1B2A4A]">72</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Clients</p>
              <p className="text-xl font-bold text-[#1B2A4A]">45</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Registration Trends + User Activity Status */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Monthly Registration Trends */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[#1B2A4A]">📈</span>
            <h2 className="text-base font-bold text-[#1B2A4A]">Monthly Registration Trends</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyRegistrationData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="lawyers"
                stroke="#1B2A4A"
                strokeWidth={2}
                dot={{ r: 4, fill: "#1B2A4A" }}
              />
              <Line
                type="monotone"
                dataKey="clients"
                stroke="#D4A843"
                strokeWidth={2}
                dot={{ r: 4, fill: "#D4A843" }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value: string) => (
                  <span className="text-xs text-gray-600">{value}</span>
                )}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Activity Status + Platform Ratings */}
        <div className="space-y-6">
          {/* User Activity Status */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1B2A4A]">User Activity Status</h2>
              <FilterDropdown />
            </div>
            <div className="space-y-3">
              <ProgressBar label="Active Lawyers" value="90%" color="#16A34A" />
              <ProgressBar label="Active Clients" value="90%" color="#16A34A" />
              <ProgressBar label="Inactive Lawyers" value="10%" color="#1B2A4A" />
              <ProgressBar label="Inactive Clients" value="10%" color="#1B2A4A" />
            </div>
          </div>

          {/* Platform Ratings */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Star size={18} className="text-amber-500 fill-amber-500" />
              <h2 className="text-base font-bold text-[#1B2A4A]">Platform Ratings</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Clients &gt; Lawyers</p>
                <div className="flex items-center gap-1">
                  <p className="text-base font-bold text-[#1B2A4A]">4.5</p>
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Lawyers &gt; Clients</p>
                <div className="flex items-center gap-1">
                  <p className="text-base font-bold text-[#1B2A4A]">4.7</p>
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Avg. Lawyers</p>
                <div className="flex items-center gap-1">
                  <p className="text-base font-bold text-[#1B2A4A]">4.6</p>
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Growth Over Time */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1B2A4A]">User Growth Over Time</h2>
          <GrowthFilterDropdown />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              domain={[100, 600]}
            />
            <Tooltip
              labelFormatter={(_, payload) => {
                const item = payload?.[0]?.payload as Record<string, string> | undefined;
                return item?.month || "";
              }}
            />
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1B2A4A" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#1B2A4A" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1B2A4A"
              strokeWidth={1.5}
              fill="url(#growthGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
