import TestimonialsCards from "./TestimonialsCard";

export default function Testimonies() {
    return (
      <div id="testimony" className="font-clash-display pt-12 bg-white">
        <div className="flex justify-center px-6 sm:px-24 text-[#C2983E]">
          <div className="lg:w-3/6 py-6 space-y-5">
            <h1 className="text-3xl sm:text-6xl font-medium text-center">Ce que disent <br/> nos clients</h1>
          </div>
        </div>
        <TestimonialsCards />
      </div>
    )
  }