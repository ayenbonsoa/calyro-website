

export default function CTA() {
    return (
        <div className="px-6 sm:px-24 pt-24 text-white bg-white relative">
         <div className="flex justify-center bg-red-500"> <img src="/images/calyro_logo.png" alt="transfering worldwide" className="h-32 absolute -top-0"/></div>
          <div className="font-clash-display py-24 bg-blue-600 rounded-3xl">
            <div className="flex justify-center">
            <div className="bg-pink-500 text-white rounded-full px-6 py-1">#1 Online Banking Platform</div>
          </div>
          <div className="flex justify-center px-6 sm:px-24">
            <div className="lg:w-7/12 py-6 space-y-6">
              <h1 className="text-3xl sm:text-6xl font-medium text-center">Ready to send money to your loved ones?</h1>
              <h2 className="text-lg lg:text-2xl text-center">Fast, secure, and reliable transfers <br /> anytime you need them.</h2>
              <div className="flex justify-center">
                  <div className="lg:flex space-y-3 sm:space-y-0 lg:space-x-6">
                      <div className="flex justify-center">
                          <button className="bg-white text-blue-600 text-lg px-4 py-2 rounded-full">Send money now</button>
                      </div>
                      <div className="flex justify-center">
                          <button className="border border-2 border-white text-lg text-white px-4 py-2 rounded-full">View Rates & fees</button>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }