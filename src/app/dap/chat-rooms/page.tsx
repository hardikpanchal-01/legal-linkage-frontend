"use client";

import { useState } from "react";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { id: "1", name: "Steve Cardano", time: "14 mins ago" },
  { id: "2", name: "Steve Cardano", time: "14 mins ago" },
  { id: "3", name: "Steve Cardano", time: "14 mins ago" },
  { id: "4", name: "Steve Cardano", time: "14 mins ago" },
  { id: "5", name: "Steve Cardano", time: "14 mins ago" },
  { id: "6", name: "Steve Cardano", time: "14 mins ago" },
  { id: "7", name: "Steve Cardano", time: "14 mins ago" },
];

type ChatTab = "lawyer" | "client" | "group";

const messages = [
  { id: "1", sender: "Steve Cardano", isMe: false, texts: ["1st message comes here", "this is a second message"], time: "7:30 PM, Sunday, Nov.09,2025" },
  { id: "2", sender: "You", isMe: true, texts: ["1st message comes here", "this is a second message"], time: "7:30 PM, Sunday, Nov.09,2025" },
];

export default function DisputeChatRooms() {
  const [selectedContact, setSelectedContact] = useState("1");
  const [chatTab, setChatTab] = useState<ChatTab>("group");

  return (
    <div className="flex h-[calc(100vh-7rem)] gap-4">
      {/* Contact list */}
      <div className="w-80 shrink-0 rounded-xl bg-white p-4 shadow-sm">
        <div className="relative mb-4">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-[#D1D5DB] py-2.5 pl-9 pr-4 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:outline-none"
          />
        </div>

        <div className="space-y-1 overflow-y-auto">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                selectedContact === contact.id
                  ? "bg-[#F3F4F6]"
                  : "hover:bg-[#F9FAFB]"
              }`}
            >
              <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#6B7280]">
                <User className="size-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1B2A4A]">{contact.name}</p>
                <p className="text-xs text-[#9CA3AF]">{contact.time}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col rounded-xl bg-white shadow-sm">
        {/* Chat header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-3">
          <p className="text-sm font-semibold text-[#1B2A4A]">Dispute ID #00214</p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-9 rounded-lg border-[#E9A319] px-4 text-xs font-medium text-[#E9A319] hover:bg-[#E9A319]/5"
            >
              Resolve Dispute
            </Button>
            <Button className="h-9 rounded-lg bg-[#1B2A4A] px-4 text-xs font-medium text-white hover:bg-[#2A3D66]">
              Mark as Unresolved
            </Button>
          </div>
        </div>

        {/* Chat tabs */}
        <div className="flex gap-2 border-b border-[#E5E7EB] px-5 py-3">
          {(["lawyer", "client", "group"] as ChatTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setChatTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                chatTab === tab
                  ? "bg-[#1B2A4A] text-white"
                  : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F9FAFB]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}>
                {!msg.isMe && (
                  <div className="mb-1 flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[#6B7280]">
                      <User className="size-4 text-white" />
                    </div>
                  </div>
                )}
                <p className={`mb-1 text-xs font-medium ${msg.isMe ? "text-right text-[#1B2A4A]" : "text-[#1B2A4A]"}`}>
                  {msg.sender}
                </p>
                <div className="space-y-1.5">
                  {msg.texts.map((text, i) => (
                    <div
                      key={i}
                      className={`max-w-md rounded-lg px-4 py-2.5 text-sm ${
                        msg.isMe
                          ? "bg-[#1B2A4A] text-white"
                          : "bg-[#F3F4F6] text-[#1B2A4A]"
                      }`}
                    >
                      {text}
                    </div>
                  ))}
                </div>
                <p className="mt-1 text-[10px] text-[#9CA3AF]">{msg.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locked message */}
        <div className="border-t border-[#E5E7EB] px-5 py-3 text-center">
          <p className="text-xs text-[#9CA3AF]">
            The Chat has marked as un resolved so now the chat room is locked
          </p>
        </div>
      </div>
    </div>
  );
}
