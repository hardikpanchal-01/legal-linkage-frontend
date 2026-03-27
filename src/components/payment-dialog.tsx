"use client";

import { useState } from "react";
import { X, CreditCard, DollarSign, Building2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type PaymentMethod = "card" | "cashapp" | "bank";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
}

export function PaymentDialog({ open, onOpenChange, onSubmit }: PaymentDialogProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-2xl border-none bg-white p-6 shadow-2xl sm:max-w-md">
        <DialogTitle className="sr-only">Payment Information</DialogTitle>

        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 left-4 text-[#9CA3AF] hover:text-[#6B7280]"
        >
          <X className="size-5" />
        </button>

        <h2 className="mt-2 mb-5 text-lg font-bold text-[#1B2A4A]">
          Add your payment information
        </h2>

        {/* Payment method tabs */}
        <div className="mb-5 grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setPaymentMethod("card")}
            className={`flex flex-col items-start gap-1 rounded-lg border p-3 text-xs transition-all ${
              paymentMethod === "card"
                ? "border-[#3B82F6] bg-[#EFF6FF] text-[#3B82F6]"
                : "border-[#E5E7EB] text-[#6B7280]"
            }`}
          >
            <CreditCard className="size-4" />
            Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("cashapp")}
            className={`flex flex-col items-start gap-1 rounded-lg border p-3 text-xs transition-all ${
              paymentMethod === "cashapp"
                ? "border-[#3B82F6] bg-[#EFF6FF] text-[#3B82F6]"
                : "border-[#E5E7EB] text-[#6B7280]"
            }`}
          >
            <DollarSign className="size-4" />
            Cash App Pay
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod("bank")}
            className={`flex flex-col items-start gap-1 rounded-lg border p-3 text-xs transition-all ${
              paymentMethod === "bank"
                ? "border-[#3B82F6] bg-[#EFF6FF] text-[#3B82F6]"
                : "border-[#E5E7EB] text-[#6B7280]"
            }`}
          >
            <Building2 className="size-4" />
            US Bank Account
          </button>
        </div>

        {/* Card information */}
        {paymentMethod === "card" && (
          <div className="space-y-4">
            <div>
              <Label className="mb-2 text-sm font-medium text-[#6B7280]">Card information</Label>
              <div className="overflow-hidden rounded-lg border border-[#D1D5DB]">
                <div className="flex items-center border-b border-[#D1D5DB] px-3">
                  <Input
                    placeholder="Card number"
                    className="h-11 border-0 text-sm shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-0"
                  />
                  <div className="flex items-center gap-1">
                    <span className="rounded bg-[#1A1F71] px-1.5 py-0.5 text-[8px] font-bold text-white">VISA</span>
                    <span className="rounded bg-[#EB001B] px-1 py-0.5 text-[8px] font-bold text-white">MC</span>
                    <span className="rounded bg-[#006FCF] px-1 py-0.5 text-[8px] font-bold text-white">AMEX</span>
                  </div>
                </div>
                <div className="flex">
                  <Input
                    placeholder="MM / YY"
                    className="h-11 rounded-none border-0 border-r border-[#D1D5DB] text-sm shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-0"
                  />
                  <div className="flex items-center">
                    <Input
                      placeholder="CVC"
                      className="h-11 rounded-none border-0 text-sm shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-0"
                    />
                    <Lock className="mr-3 size-4 shrink-0 text-[#9CA3AF]" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-2 text-sm font-medium text-[#6B7280]">Billing address</Label>
              <div className="overflow-hidden rounded-lg border border-[#D1D5DB]">
                <div className="border-b border-[#D1D5DB]">
                  <Select defaultValue="us">
                    <SelectTrigger className="h-11 rounded-none border-0 text-sm shadow-none">
                      <div>
                        <span className="text-xs text-[#9CA3AF]">Country or region</span>
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  placeholder="ZIP Code"
                  className="h-11 rounded-none border-0 text-sm shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-0"
                />
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={onSubmit}
          className="mt-6 h-12 w-full rounded-lg bg-[#3B82F6] text-sm font-medium text-white hover:bg-[#2563EB]"
        >
          Subscribe for $15/month
          <Lock className="ml-2 size-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
