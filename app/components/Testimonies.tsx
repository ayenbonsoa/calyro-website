import TestimonialsCards from "./TestimonialsCard";

export default function Testimonies() {
    return (
      <div className="font-clash-display pt-24 bg-white">
         <div className="flex justify-center">
        <div className="bg-pink-500 text-white rounded-full px-6 py-1">See from our beloved users</div>
      </div>
        <div className="flex justify-center px-6 sm:px-24">
          <div className="lg:w-3/6 py-6 space-y-5">
            <h1 className="text-3xl sm:text-6xl font-medium text-center">What our <br/> customers Say</h1>
          </div>
        </div>
        <TestimonialsCards />
      </div>
    )
  }