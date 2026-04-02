"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const weeklyClientData = [
  { name: "Mon", value: 8000 },
  { name: "Tue", value: 12000 },
  { name: "Wed", value: 15000 },
  { name: "Thu", value: 9000 },
  { name: "Fri", value: 22000 },
  { name: "Sat", value: 28000 },
  { name: "Sun", value: 18000 },
];

const legalCategories = ["Criminal law", "Civil Litigation", "Civil Litigation", "Civil Litigation", "Civil Litigation", "Civil Litigation"];
const legalProviderData = (() => {
  const base = [
    350,370,360,380,370,390,400,395,385,405,
    380,390,410,400,420,410,395,385,400,415,
    390,380,370,365,375,385,395,410,420,440,
    450,430,420,410,430,450,470,460,440,430,
    420,440,460,480,500,520,540,560,580,550,
    530,510,490,500,520,540,530,510,500,490,
    470,450,430,420,410,400,390,385,380,375,
  ];
  return base.map((v, i) => ({
    name: i % (Math.floor(base.length / 6)) === 0 ? legalCategories[Math.min(Math.floor(i / (Math.floor(base.length / 6))), 5)] : "",
    value: v,
  }));
})();

const platformReport = {
  platformFee: "$34,100",
  dap: "$150",
  totalProfit: "$34,100",
  docusign: "$150",
  zoomFees: "$100",
  gmv: "$33,850",
  paySuccessRate: "68%",
  ttlPointsPurchased: "$33,850",
  ttlPointsSpent: "$33,850",
};

const filterOptions = ["Monthly", "Weekly"];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ReportsAnalysisPage() {
  const [timeFilter, setTimeFilter] = useState("Weekly");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    setShowPdfPreview(true);
  };

  const handlePrint = () => {
    if (printRef.current) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <html><head><title>Platform Based Reports</title>
          <style>
            body { font-family: sans-serif; padding: 40px; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; }
            .label { color: #6b7280; font-size: 14px; }
            .value { color: #1B2A4A; font-weight: 600; font-size: 14px; background: #f0fdf4; text-align: right; }
            .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
            .title { color: #1B2A4A; font-size: 18px; font-weight: bold; }
            .brand { font-size: 16px; font-weight: bold; color: #1B2A4A; }
            .subtitle { font-size: 11px; color: #6b7280; }
          </style></head><body>
          ${printRef.current.innerHTML}
          </body></html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Weekly Client Chart */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1B2A4A]">Weekly Client</h2>
            <div className="relative">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-600"
              >
                {timeFilter} <ChevronDown size={12} />
              </button>
              {showFilterDropdown && (
                <div className="absolute right-0 top-full z-10 mt-1 w-28 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                  {filterOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setTimeFilter(opt); setShowFilterDropdown(false); }}
                      className="block w-full px-3 py-1.5 text-left text-xs text-gray-600 hover:bg-gray-50"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weeklyClientData}>
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
                tickFormatter={(v) => `${v / 1000}K`}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#1B2A4A" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legal Service Providers Chart */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1B2A4A]">Legal service providers</h2>
            <button className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
              Download Report
            </button>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={legalProviderData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 700]}
              />
              <Tooltip />
              <defs>
                <linearGradient id="providerGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1B2A4A" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#1B2A4A" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1B2A4A"
                strokeWidth={2}
                fill="url(#providerGradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Platform Based Reports */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Platform based reports</h2>
          <button
            onClick={handleDownload}
            className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]"
          >
            Download Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Platform Fee</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">DAP</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total Profit (Bfr. Tax)</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Docusign</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Zoom Fees</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 relative">
                  GMV
                  <span className="ml-1 inline-block cursor-help rounded-full border border-gray-300 px-1 text-[10px] text-gray-400">i</span>
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Pay Success rate</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Ttl Points Purchased</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500">Ttl Points Spent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-green-200 bg-green-100">
                <td className="px-4 py-3 text-sm font-semibold text-[#1B2A4A]">{platformReport.platformFee}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.dap}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.totalProfit}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.docusign}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.zoomFees}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.gmv}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.paySuccessRate}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.ttlPointsPurchased}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{platformReport.ttlPointsSpent}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GMV Tooltip text */}
        <p className="mt-2 text-xs text-gray-400">(Platform Fee received+ points spending / GMV).</p>
      </div>

      {/* PDF Preview Modal */}
      {showPdfPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <p className="text-sm text-gray-500">pdf</p>
              <button
                onClick={() => setShowPdfPreview(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* PDF Content */}
            <div className="p-6" ref={printRef}>
              <div className="rounded-xl border border-gray-200 p-6">
                {/* Brand Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
                    <div>
                      <p className="text-sm font-bold text-[#1B2A4A]">LawLinkage™</p>
                      <p className="text-[10px] text-gray-400">Transparent legal help, connected.</p>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#1B2A4A]">Platform based reports</h3>
                </div>

                {/* Report Table */}
                <table className="w-full">
                  <tbody>
                    {[
                      { label: "Platform Fee", value: platformReport.platformFee },
                      { label: "DAP", value: platformReport.dap },
                      { label: "Total Profit (Bfr. Tax)", value: platformReport.totalProfit },
                      { label: "Docusign", value: platformReport.docusign },
                      { label: "Zoom Fees", value: platformReport.zoomFees },
                      { label: "Pay Success rate", value: platformReport.gmv },
                      { label: "Ttl Points Purchased", value: platformReport.paySuccessRate },
                      { label: "Ttl Points Spent", value: platformReport.ttlPointsPurchased },
                      { label: "GMV  (Platform Fee received+ points spending / GMV).", value: platformReport.ttlPointsSpent },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-sm text-gray-500">{row.label}</td>
                        <td className="py-3 pl-4 text-right text-sm font-semibold text-[#1B2A4A] bg-green-100">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setShowPdfPreview(false)}
                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={handlePrint}
                className="rounded-lg bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
