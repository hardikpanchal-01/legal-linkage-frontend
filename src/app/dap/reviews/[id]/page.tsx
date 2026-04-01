"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < Math.floor(rating) ? "fill-[#E9A319] text-[#E9A319]" : i < rating ? "fill-[#E9A319]/50 text-[#E9A319]" : "fill-[#E5E7EB] text-[#E5E7EB]"}`} />
      ))}
    </div>
  );
}

const lawyerReviews = [
  { label: "Responsiveness", rating: 5.0 },
  { label: "Clarity of Communication", rating: 4.5 },
  { label: "Professionalism", rating: 5.0 },
  { label: "Timeliness", rating: 4.0 },
  { label: "Overall Satisfaction", rating: 4.5 },
];

const clientReviews = [
  { label: "Responsiveness", rating: 5.0 },
  { label: "Clarity of Communication", rating: 4.5 },
  { label: "Professionalism", rating: 5.0 },
  { label: "Timeliness", rating: 4.0 },
  { label: "Overall Satisfaction", rating: 4.5 },
];

const platformReviews = [
  { label: "Ease of Use", rating: 5.0 },
  { label: "Payment Process", rating: 4.5 },
  { label: "Matching Process", rating: 5.0 },
  { label: "Reliability & Fairness", rating: 4.5 },
];

export default function DAPReviewDetail() {
  const params = useParams();
  const isPlatform = String(params.id).startsWith("p");

  if (isPlatform) {
    return (
      <div>
        <div className="mb-6">
          <Link href="/dap/reviews"><Button variant="outline" className="h-10 rounded-lg border-[#1B2A4A] px-5 text-sm font-medium text-[#1B2A4A]">Back</Button></Link>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3"><User className="size-5 text-[#9CA3AF]" /><div><p className="text-xs text-[#6B7280]">Reviewer</p><p className="text-sm font-semibold text-[#1B2A4A]">Sarah Johnson</p></div></div>
          <div className="flex items-center gap-3"><User className="size-5 text-[#9CA3AF]" /><div><p className="text-xs text-[#6B7280]">Lawyer Reviewed</p><p className="text-sm font-semibold text-[#1B2A4A]">Michael Chen, LLB</p></div></div>
          <div className="flex items-center gap-3"><Calendar className="size-5 text-[#9CA3AF]" /><div><p className="text-xs text-[#6B7280]">Submission Date</p><p className="text-sm font-semibold text-[#1B2A4A]">October 8, 2025</p></div></div>
        </div>

        <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-1 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1B2A4A]">Platform Experience Review</h2>
            <div className="flex items-center gap-1 rounded-full bg-[#FFF8E7] px-3 py-1.5"><Star className="size-4 fill-[#E9A319] text-[#E9A319]" /><span className="text-lg font-bold text-[#1B2A4A]">4.8</span><span className="text-sm text-[#6B7280]">/5.0</span></div>
          </div>
          <p className="mb-6 text-xs text-[#6B7280]">ClientLawyerLink.com Platform Feedback</p>
          <div className="space-y-5">
            {platformReviews.map((r) => (
              <div key={r.label} className="flex items-center justify-between"><span className="text-sm text-[#1B2A4A]">{r.label}</span><div className="flex items-center gap-2"><StarRating rating={r.rating} /><span className="text-sm font-medium text-[#1B2A4A]">{r.rating.toFixed(1)}</span></div></div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Platform Feedback</h2>
          <div className="rounded-lg bg-[#F9FAFB] p-4"><p className="text-sm leading-relaxed text-[#4A4A4A]">The ClientLawyerLink platform made finding a lawyer incredibly easy. The matching algorithm connected me with Mr. Chen who was perfect for my case. The payment system with the trust account was transparent and gave me confidence. The only improvement I&apos;d suggest is adding more payment options like cryptocurrency. Overall, a fantastic service that modernizes the legal industry.</p></div>
        </div>
      </div>
    );
  }

  // Job Review Detail
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link href="/dap/reviews"><Button variant="outline" className="h-10 rounded-lg border-[#1B2A4A] px-5 text-sm font-medium text-[#1B2A4A]">Back</Button></Link>
        <Button className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]">Make Review Public</Button>
      </div>

      {/* Job Info */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-[#1B2A4A]">Job Info</h2>
        <div className="space-y-3">
          <div className="flex gap-8"><span className="w-36 text-sm text-[#6B7280]">Job ID</span><span className="text-sm font-medium text-[#1B2A4A]">DSP-1025</span></div>
          <div className="flex gap-8"><span className="w-36 text-sm text-[#6B7280]">Contract amount</span><span className="text-sm font-bold text-[#1B2A4A]">$900</span></div>
          <div className="flex gap-8"><span className="w-36 text-sm text-[#6B7280]">Client</span><span className="text-sm font-medium text-[#1B2A4A]">John Doe</span></div>
          <div className="flex gap-8"><span className="w-36 text-sm text-[#6B7280]">Lawyer</span><span className="text-sm font-medium text-[#1B2A4A]">Fernando White</span></div>
          <div className="flex gap-8"><span className="w-36 text-sm text-[#6B7280]">Link to the Job</span><a href="#" className="text-sm font-medium text-[#3B82F6] underline">Figma ipsum componentFigma ipsum component</a></div>
        </div>
      </div>

      {/* Lawyer Performance Review */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Lawyer Performance Review</h2>
          <div className="flex items-center gap-1 rounded-full bg-[#FFF8E7] px-3 py-1.5"><Star className="size-4 fill-[#E9A319] text-[#E9A319]" /><span className="text-lg font-bold text-[#1B2A4A]">4.6</span><span className="text-sm text-[#6B7280]">/5.0</span></div>
        </div>
        <div className="space-y-5">
          {lawyerReviews.map((r) => (
            <div key={r.label} className="flex items-center justify-between"><span className="text-sm text-[#1B2A4A]">{r.label}</span><div className="flex items-center gap-2"><StarRating rating={r.rating} /><span className="text-sm font-medium text-[#1B2A4A]">{r.rating.toFixed(1)}</span></div></div>
          ))}
        </div>
        <div className="mt-5">
          <h3 className="mb-3 text-base font-bold text-[#1B2A4A]">Written Feedback</h3>
          <div className="rounded-lg bg-[#F9FAFB] p-4"><p className="text-sm leading-relaxed text-[#4A4A4A]">Mr. Chen was exceptional throughout my case. He responded to all my emails within 24 hours and explained complex legal concepts in plain language. The only minor issue was a slight delay in filing one document due to court scheduling, but he kept me informed every step of the way. I would highly recommend his services to anyone seeking a knowledgeable and approachable lawyer.</p></div>
        </div>
      </div>

      {/* Client Performance Review */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Client Performance Review</h2>
          <div className="flex items-center gap-1 rounded-full bg-[#FFF8E7] px-3 py-1.5"><Star className="size-4 fill-[#E9A319] text-[#E9A319]" /><span className="text-lg font-bold text-[#1B2A4A]">4.6</span><span className="text-sm text-[#6B7280]">/5.0</span></div>
        </div>
        <div className="space-y-5">
          {clientReviews.map((r) => (
            <div key={r.label} className="flex items-center justify-between"><span className="text-sm text-[#1B2A4A]">{r.label}</span><div className="flex items-center gap-2"><StarRating rating={r.rating} /><span className="text-sm font-medium text-[#1B2A4A]">{r.rating.toFixed(1)}</span></div></div>
          ))}
        </div>
        <div className="mt-5">
          <h3 className="mb-3 text-base font-bold text-[#1B2A4A]">Written Feedback</h3>
          <div className="rounded-lg bg-[#F9FAFB] p-4"><p className="text-sm leading-relaxed text-[#4A4A4A]">Mr. Chen was exceptional throughout my case. He responded to all my emails within 24 hours and explained complex legal concepts in plain language. The only minor issue was a slight delay in filing one document due to court scheduling, but he kept me informed every step of the way. I would highly recommend his services to anyone seeking a knowledgeable and approachable lawyer.</p></div>
        </div>
      </div>
    </div>
  );
}
