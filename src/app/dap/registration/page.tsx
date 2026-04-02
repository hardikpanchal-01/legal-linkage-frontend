"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Tab = "clients" | "providers";
type Status = "Pending" | "Active" | "Inactive";

const clients = [
  { id: "1", name: "Irving Purdy", username: "@Irving.Purdy77", email: "Lila.Ward@hotmail.com", date: "12 Jun, 2025", type: "Organization", status: "Pending" as Status },
  { id: "2", name: "Frances Leannon", username: "@Frances47", email: "Dennis.Stark@yahoo.c...", date: "12 Jun, 2025", type: "individual", status: "Pending" as Status },
  { id: "3", name: "Garrett Nicolas", username: "@Garrett71", email: "Becky_Harber30@gm...", date: "12 Jun, 2025", type: "Individual", status: "Active" as Status },
  { id: "4", name: "Sheryl Macejkovic", username: "@Sheryl33", email: "Robin.Romaguera87@...", date: "12 Jun, 2025", type: "Organization", status: "Active" as Status },
  { id: "5", name: "Alberto Johnston", username: "@Alberto.Johnston", email: "Verna.Kris44@yahoo.c...", date: "12 Jun, 2025", type: "individual", status: "Inactive" as Status },
  { id: "6", name: "Colleen Emmerich", username: "@Colleen38", email: "Philip.Huel72@gmail.c...", date: "12 Jun, 2025", type: "individual", status: "Pending" as Status },
  { id: "7", name: "Doyle Durgan", username: "@Doyle.Durgan", email: "Elizabeth82@gmail.co...", date: "12 Jun, 2025", type: "individual", status: "Active" as Status },
  { id: "8", name: "Vera Larkin", username: "@Vera.Larkin", email: "Gregory.Spencer@hot...", date: "12 Jun, 2025", type: "Organization", status: "Inactive" as Status },
  { id: "9", name: "Joel Rodriguez", username: "@Joel2", email: "Lora35@gmail.com", date: "12 Jun, 2025", type: "individual", status: "Active" as Status },
  { id: "10", name: "Lela Hammes", username: "@Lela47", email: "Moses.Kulas4@hotma...", date: "12 Jun, 2025", type: "Organization", status: "Active" as Status },
  { id: "11", name: "Sam Bashirian", username: "@Sam.Bashirian", email: "Janice.Brown@hotmai...", date: "12 Jun, 2025", type: "Organization", status: "Inactive" as Status },
];

const providerSubTabs = ["All", "Paralegal", "RCIC", "Notary Public", "Commissioner for Oaths", "Arbitrator", "Mediator", "Legal Consultant"];

const providers = [
  { id: "p1", name: "Leigh Kunze", username: "@Leigh_Kunze", email: "Leigh45@yahoo.co...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Pending" as Status },
  { id: "p2", name: "Kelli Olson", username: "@Kelli32", email: "Kelli_Olson80@gm...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Active" as Status },
  { id: "p3", name: "Ismael Hamill", username: "@Ismael_Hamill", email: "Ismael_Hamill@yah...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Inactive" as Status },
  { id: "p4", name: "Kerry Langworth", username: "@Kerry.Langworth42", email: "Kerry_Langworth@...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Active" as Status },
  { id: "p5", name: "Leticia Witting", username: "@Leticia23", email: "Leticia_Witting@g...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Inactive" as Status },
  { id: "p6", name: "Ted Pacocha", username: "@Ted.Pacocha92", email: "Ted_Pacocha76@ya...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Active" as Status },
  { id: "p7", name: "Juana Hackett", username: "@Juana.Hackett", email: "Juana50@yahoo.co...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Active" as Status },
  { id: "p8", name: "Jeremiah Stark", username: "@Jeremiah.Stark5", email: "Jeremiah41@gmail...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Pending" as Status },
  { id: "p9", name: "Phyllis Gleason", username: "@Phyllis6", email: "Phyllis.Gleason19@...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Pending" as Status },
  { id: "p10", name: "Alfonso Kiehn", username: "@Alfonso_Kiehn", email: "Alfonso75@hotmail...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Inactive" as Status },
  { id: "p11", name: "Kathleen Streich", username: "@Kathleen43", email: "Kathleen.Streich35...", date: "12 Jun, 2025", specialties: ["Lawyer", "Notaries (QC)"], extra: "+2", status: "Inactive" as Status },
];

const statusColors: Record<Status, string> = {
  Pending: "bg-[#E9A319] text-white",
  Active: "bg-[#22C55E] text-white",
  Inactive: "bg-red-500 text-white",
};

export default function DAPRegistration() {
  const [tab, setTab] = useState<Tab>("clients");
  const [providerSubTab, setProviderSubTab] = useState("All");
  const [entries, setEntries] = useState("13");
  const [openAction, setOpenAction] = useState<string | null>(null);
  const [showReject, setShowReject] = useState(false);

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-xl font-bold text-[#1B2A4A]">User Management</h1>

      {/* Tabs */}
      <div className="mb-5 flex gap-2">
        <button onClick={() => setTab("clients")} className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${tab === "clients" ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F9FAFB]"}`}>Clients</button>
        <button onClick={() => setTab("providers")} className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${tab === "providers" ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F9FAFB]"}`}>Legal Service Providers</button>
      </div>

      {/* Provider sub-tabs */}
      {tab === "providers" && (
        <div className="mb-5 flex gap-1 border-b border-[#E5E7EB]">
          {providerSubTabs.map((st) => (
            <button key={st} onClick={() => setProviderSubTab(st)} className={`px-4 py-3 text-sm font-medium transition-colors ${providerSubTab === st ? "border-b-2 border-[#1B2A4A] text-[#1B2A4A]" : "text-[#6B7280] hover:text-[#1B2A4A]"}`}>{st}</button>
          ))}
        </div>
      )}

      {/* Top bar */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          Show
          <select value={entries} onChange={(e) => setEntries(e.target.value)} className="rounded-lg border border-[#D1D5DB] px-2 py-1 text-sm text-[#1B2A4A]"><option>13</option><option>25</option><option>50</option></select>
          Entries
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search here..." className="rounded-lg border border-[#D1D5DB] py-2 pl-9 pr-4 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:outline-none" />
          </div>
          <Button className="h-10 gap-2 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"><SlidersHorizontal className="size-4" />Filter</Button>
        </div>
      </div>

      {/* Clients Table */}
      {tab === "clients" && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
                <th className="pb-3">Customer Name</th><th className="pb-3">Email</th><th className="pb-3">Registration Date</th><th className="pb-3">Client Type</th><th className="pb-3">Status</th><th className="pb-3 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((row) => (
                <tr key={row.id} className="border-b border-[#F3F4F6] last:border-0">
                  <td className="py-3"><p className="text-sm font-medium text-[#1B2A4A]">{row.name}</p><p className="text-xs text-[#9CA3AF]">{row.username}</p></td>
                  <td className="py-3 text-sm text-[#1B2A4A]">{row.email}</td>
                  <td className="py-3 text-sm text-[#6B7280]">{row.date}</td>
                  <td className="py-3 text-sm"><span className={row.type === "Organization" ? "font-medium text-[#E9A319]" : "text-[#22C55E]"}>{row.type}</span></td>
                  <td className="py-3"><span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${statusColors[row.status]}`}>{row.status}</span></td>
                  <td className="relative py-3 text-right">
                    <button onClick={() => setOpenAction(openAction === row.id ? null : row.id)} className="text-[#9CA3AF] hover:text-[#6B7280]"><MoreHorizontal className="size-5" /></button>
                    {openAction === row.id && (
                      <div className="absolute right-0 top-10 z-10 w-40 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                        <a href={row.status === "Active" ? "/dap/registration/active-client-details" : "/dap/registration/client-details"} className="block w-full px-4 py-2 text-left text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]">View</a>
                        {row.status === "Pending" && (
                          <>
                            <button className="block w-full px-4 py-2 text-left text-sm text-[#22C55E] hover:bg-[#F3F4F6]">Accept Request</button>
                            <button onClick={() => { setOpenAction(null); setShowReject(true); }} className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-[#F3F4F6]">Reject Request</button>
                          </>
                        )}
                        {row.status === "Active" && (
                          <><button className="block w-full px-4 py-2 text-left text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]">Edit</button><button className="block w-full px-4 py-2 text-left text-sm text-[#E9A319] hover:bg-[#F3F4F6]">Deactivate</button></>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Providers Table */}
      {tab === "providers" && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
                <th className="pb-3">Lawyer Name</th><th className="pb-3">Email</th><th className="pb-3">Registration Date</th><th className="pb-3">Legal Speciality</th><th className="pb-3">Status</th><th className="pb-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((row) => (
                <tr key={row.id} className="border-b border-[#F3F4F6] last:border-0">
                  <td className="py-3"><p className="text-sm font-medium text-[#1B2A4A]">{row.name}</p><p className="text-xs text-[#9CA3AF]">{row.username}</p></td>
                  <td className="py-3 text-sm text-[#1B2A4A]">{row.email}</td>
                  <td className="py-3 text-sm text-[#6B7280]">{row.date}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      {row.specialties.map((s) => (
                        <span key={s} className="rounded-full bg-[#3B82F6]/10 px-2.5 py-0.5 text-[10px] font-medium text-[#3B82F6]">{s}</span>
                      ))}
                      <span className="rounded-full bg-[#3B82F6]/10 px-2 py-0.5 text-[10px] font-medium text-[#3B82F6]">{row.extra}</span>
                    </div>
                  </td>
                  <td className="py-3"><span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${statusColors[row.status]}`}>{row.status}</span></td>
                  <td className="relative py-3 text-right">
                    <button onClick={() => setOpenAction(openAction === row.id ? null : row.id)} className="text-[#9CA3AF] hover:text-[#6B7280]"><MoreHorizontal className="size-5" /></button>
                    {openAction === row.id && (
                      <div className="absolute right-0 top-10 z-10 w-40 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                        <a href={row.status === "Active" ? "/dap/registration/active-provider-details" : "/dap/registration/provider-details"} className="block w-full px-4 py-2 text-left text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]">View</a>
                        {row.status === "Pending" && (
                          <>
                            <button className="block w-full px-4 py-2 text-left text-sm text-[#22C55E] hover:bg-[#F3F4F6]">Accept Requests</button>
                            <button onClick={() => { setOpenAction(null); setShowReject(true); }} className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-[#F3F4F6]">Reject Request</button>
                          </>
                        )}
                        {row.status === "Active" && (
                          <><button className="block w-full px-4 py-2 text-left text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]">Edit</button><button className="block w-full px-4 py-2 text-left text-sm text-[#E9A319] hover:bg-[#F3F4F6]">Deactivate</button></>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-[#1B2A4A]">Showing Results: 2-10</p>
        <div className="flex items-center gap-1">
          <button className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]">&lt;</button>
          {[1, 2, 3, 4].map((p) => (<button key={p} className={`flex size-8 items-center justify-center rounded text-sm ${p === 2 ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"}`}>{p}</button>))}
          <span className="px-1 text-[#6B7280]">...</span>
          <button className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-sm text-[#6B7280] hover:bg-[#F3F4F6]">10</button>
          <button className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]">&gt;</button>
        </div>
      </div>

      {/* Reason for Rejection Dialog */}
      <Dialog open={showReject} onOpenChange={setShowReject}>
        <DialogContent className="max-w-md rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">Reason for Rejection</DialogTitle>
            <button onClick={() => setShowReject(false)} className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"><X className="size-4" /></button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-sm text-[#6B7280]">Enter reason for rejection</p>
            <textarea placeholder="Message" rows={5} className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Button onClick={() => setShowReject(false)} className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]">Send</Button>
            <Button variant="outline" onClick={() => setShowReject(false)} className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50">Cancel</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
