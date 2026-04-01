"use client";

import { useState } from "react";
import { Layers, Pencil, DollarSign, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const subscriptions = [
  {
    type: "Monthly",
    price: "$14.99",
    description: "Total Subscribed Legal Service Provider",
    count: 250,
  },
  {
    type: "Yearly",
    price: "$144.99",
    description: "Total Subscribed Legal Service Provider",
    count: 250,
  },
];

export default function ZoomSubscriptions() {
  const [editOpen, setEditOpen] = useState(false);
  const [editType, setEditType] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const handleEdit = (type: string, price: string) => {
    setEditType(type);
    setEditPrice(price.replace("$", ""));
    setEditOpen(true);
  };

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold text-[#1B2A4A]">Zoom Subscriptions</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((sub) => (
          <div
            key={sub.type}
            className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white">
                  <Layers className="size-4 text-[#2DD4BF]" />
                </div>
                <span className="text-sm font-semibold text-[#1B2A4A]">{sub.type}</span>
              </div>
              <button
                onClick={() => handleEdit(sub.type, sub.price)}
                className="text-[#9CA3AF] hover:text-[#6B7280]"
              >
                <Pencil className="size-4" />
              </button>
            </div>

            {/* Price */}
            <p className="mb-3 text-2xl font-bold text-[#1B2A4A]">{sub.price}</p>

            {/* Stats */}
            <p className="mb-1 text-xs text-[#6B7280]">{sub.description}</p>
            <p className="text-lg font-bold text-[#1B2A4A]">{sub.count}</p>
          </div>
        ))}
      </div>

      {/* Update Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-sm rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Update Zoom Subscription
            </DialogTitle>
            <button
              onClick={() => setEditOpen(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <p className="mt-2 text-xs font-medium text-red-500">
            The Updated Price Will Take Effect Form Next Month
          </p>

          <div className="mt-4">
            <p className="mb-2 text-sm text-[#6B7280]">{editType} Subscription</p>
            <div className="relative">
              <Input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm"
              />
              <DollarSign className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button
              onClick={() => setEditOpen(false)}
              className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() => setEditOpen(false)}
              className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
