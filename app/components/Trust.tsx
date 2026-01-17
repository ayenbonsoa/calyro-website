import { ClockIcon, ChatBubbleLeftEllipsisIcon, ShieldCheckIcon} from '@heroicons/react/24/outline'

export default function Trust() {
    return (
      <div className="font-clash-display space-y-12 pt-12 px-6 sm:px-24 bg-white">
        <div className="flex justify-center">
          <div className="lg:w-3/6 py-6 space-y-5">
            <h1 className="text-2xl sm:text-6xl font-medium text-center">Find out why millions worldwide trust Snap</h1>
          </div>
        </div>
        <div className="lg:flex lg:gap-24 space-y-6">
            <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="h-16 w-16 bg-gray-300 rounded-full flex justify-center items-center">
                      <ClockIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-center">On-time delivery</h2>
                <h3 className='text-md sm:text-xl text-center'>We promise every money transfer is delivered on time, or we'll refund your fees.</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                  <div className="h-16 w-16 bg-gray-300 rounded-full flex justify-center items-center">
                      <ChatBubbleLeftEllipsisIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-center">24/7 Customer Support</h2>
                <h3 className='text-md sm:text-xl text-center'>Our dedicated support team is available around the clock to assist you with any inquiries.</h3>
            </div>
            <div className="space-y-3">
                <div className="justify-center flex">
                  <div className="h-16 w-16 bg-gray-300 rounded-full flex justify-center items-center">
                        <ShieldCheckIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-center">Secure transactions</h2>
                <h3 className='text-md sm:text-xl text-center'>We use advanced encryption to ensure that your transactions are safe and secure.</h3>
            </div>
        </div>
      </div>
    )
  }