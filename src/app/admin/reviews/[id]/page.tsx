"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < Math.floor(rating)
              ? "fill-[#E9A319] text-[#E9A319]"
              : i < rating
                ? "fill-[#E9A319]/50 text-[#E9A319]"
                : "fill-[#E5E7EB] text-[#E5E7EB]"
          }`}
        />
      ))}
    </div>
  );
}

const jobPerformanceReviews = [
  { label: "Professional Expertise & Knowledge", rating: 5.0 },
  { label: "Communication & Responsiveness", rating: 4.5 },
  { label: "Achievement of Desired Outcome", rating: 5.0 },
  { label: "Overall Satisfaction", rating: 4.0 },
];

const platformExperienceReviews = [
  { label: "Ease of Use", rating: 5.0 },
  { label: "Finding a Lawyer / Client", rating: 4.5 },
  { label: "Security & Privacy", rating: 5.0 },
  { label: "Communication Tools", rating: 4.5 },
  { label: "Document Management & E-Signing", rating: 4.5 },
  { label: "Billing & Payment Tools", rating: 4.5 },
  { label: "Customer Support Responsiveness", rating: 4.5 },
];

const clientExperienceReviews = [
  { label: "Communication & Responsiveness", rating: 5.0 },
  { label: "Clarity of Instructions", rating: 4.5 },
  { label: "Provision of Information & Documents", rating: 5.0 },
  { label: "Realistic Expectations", rating: 4.5 },
  { label: "Timeliness of Payments", rating: 4.5 },
  { label: "Overall Professionalism", rating: 4.5 },
];

const dapProcessReviews = [
  { label: "overall effectiveness and fairness of the DAP process", rating: 5.0 },
];

const arbitratorReviews = [
  { label: "Overall Satisfaction with the Arbitrator", rating: 5.0 },
  { label: "Impartiality & Fairness", rating: 5.0 },
  { label: "Expertise & Preparation", rating: 5.0 },
  { label: "Process Management", rating: 5.0 },
  { label: "Clarity of Communication", rating: 5.0 },
];

export default function ReviewDetail() {
  const params = useParams();
  const id = String(params.id);
  const isPlatformReview = id.startsWith("p");
  const isClientReview = id.startsWith("c");
  const isDapReview = id.startsWith("d");
  const isArbitratorReview = id.startsWith("a");

  // Shared review detail layout for Platform, Client, DAP, Arbitrator
  if (isPlatformReview || isClientReview || isDapReview || isArbitratorReview) {
    const config = isPlatformReview
      ? { title: "Platform Experience Review", reviewedLabel: "Client Reviewed", reviews: platformExperienceReviews, hasWillWork: false }
      : isClientReview
        ? { title: "Client Experience Review", reviewedLabel: "Lawyer Reviewed", reviews: clientExperienceReviews, hasWillWork: true }
        : isDapReview
          ? { title: "DAP Process Feedback", reviewedLabel: "Lawyer Reviewed", reviews: dapProcessReviews, hasWillWork: false }
          : { title: "Arbitration Process Review", reviewedLabel: "User Reviewed", reviews: arbitratorReviews, hasWillWork: false };

    return (
      <div>
        <div className="mb-6">
          <Link href="/admin/reviews">
            <Button variant="outline" className="h-10 rounded-lg border-[#1B2A4A] px-5 text-sm font-medium text-[#1B2A4A]">
              Back
            </Button>
          </Link>
        </div>

        {/* Reviewer Info */}
        <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <User className="size-5 text-[#9CA3AF]" />
            <div>
              <p className="text-xs text-[#6B7280]">Reviewer</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">Sarah Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <User className="size-5 text-[#9CA3AF]" />
            <div>
              <p className="text-xs text-[#6B7280]">{config.reviewedLabel}</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">Michael Chen, LLB</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="size-5 text-[#9CA3AF]" />
            <div>
              <p className="text-xs text-[#6B7280]">Submission Date</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">October 8, 2025</p>
            </div>
          </div>
        </div>

        {/* Review Card */}
        <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-1 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1B2A4A]">{config.title}</h2>
            <div className="flex items-center gap-1 rounded-full bg-[#FFF8E7] px-3 py-1.5">
              <Star className="size-4 fill-[#E9A319] text-[#E9A319]" />
              <span className="text-lg font-bold text-[#1B2A4A]">4.8</span>
              <span className="text-sm text-[#6B7280]">/5.0</span>
            </div>
          </div>
          <p className="mb-6 text-xs text-[#6B7280]">ClientLawyerLink.com Platform Feedback</p>

          <div className="space-y-5">
            {config.reviews.map((review) => (
              <div key={review.label} className="flex items-center justify-between">
                <span className="text-sm text-[#1B2A4A]">{review.label}</span>
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-sm font-medium text-[#1B2A4A]">{review.rating.toFixed(1)}</span>
                </div>
              </div>
            ))}
            {config.hasWillWork && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#1B2A4A]">Willing to work with this client again?</span>
                <span className="text-sm font-medium text-[#1B2A4A]">Yes</span>
              </div>
            )}
          </div>
        </div>

        {/* Feedback */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Platform Feedback</h2>
          <div className="rounded-lg bg-[#F9FAFB] p-4">
            <p className="text-sm leading-relaxed text-[#4A4A4A]">
              Mr. Chen was exceptional throughout my case. He responded to all my emails within 24 hours and explained complex legal concepts in plain language. The only minor issue was a slight delay in filing one document due to court scheduling, but he kept me informed every step of the way. I would highly recommend his services to anyone seeking a knowledgeable and approachable lawyer.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Job Review Detail
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link href="/admin/reviews">
          <Button variant="outline" className="h-10 rounded-lg border-[#1B2A4A] px-5 text-sm font-medium text-[#1B2A4A]">
            Back
          </Button>
        </Link>
        <Button className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]">
          Make this review PUBLIC
        </Button>
      </div>

      {/* Job Info */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Job Info</h2>
        <div className="space-y-3">
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Job ID</span>
            <span className="text-sm font-medium text-[#1B2A4A]">DSP-1025</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Contract amount</span>
            <span className="text-sm font-bold text-[#1B2A4A]">$900</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Client</span>
            <span className="text-sm font-medium text-[#1B2A4A]">John Doe</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Lawyer</span>
            <span className="text-sm font-medium text-[#1B2A4A]">Fernando White</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Link to the Job</span>
            <a href="#" className="text-sm font-medium text-[#3B82F6] underline">
              Figma ipsum componentFigma ipsum component
            </a>
          </div>
        </div>
      </div>

      {/* Lawyer Performance Review */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Lawyer Performance Review</h2>
          <div className="flex items-center gap-1 rounded-full bg-[#FFF8E7] px-3 py-1.5">
            <Star className="size-4 fill-[#E9A319] text-[#E9A319]" />
            <span className="text-lg font-bold text-[#1B2A4A]">4.6</span>
            <span className="text-sm text-[#6B7280]">/5.0</span>
          </div>
        </div>
        <div className="space-y-5">
          {jobPerformanceReviews.map((review) => (
            <div key={review.label} className="flex items-center justify-between">
              <span className="text-sm text-[#1B2A4A]">{review.label}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={review.rating} />
                <span className="text-sm font-medium text-[#1B2A4A]">{review.rating.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Written Feedback */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Written Feedback</h2>
        <div className="rounded-lg bg-[#F9FAFB] p-4">
          <p className="text-sm leading-relaxed text-[#4A4A4A]">
            Mr. Chen was exceptional throughout my case. He responded to all my emails within 24 hours and explained complex legal concepts in plain language. The only minor issue was a slight delay in filing one document due to court scheduling, but he kept me informed every step of the way. I would highly recommend his services to anyone seeking a knowledgeable and approachable lawyer.
          </p>
        </div>
      </div>
    </div>
  );
}
