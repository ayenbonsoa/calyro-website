export default function Calculator() {
    return (
      <div className="font-clash-display pt-24 bg-white">
         <div className="flex justify-center">
        <div className="bg-pink-500 text-white rounded-full px-6 py-1">Comment ça marche?</div>
      </div>
        <div className="flex justify-center px-6 sm:px-24">
          <div className="lg:w-3/6 py-6 space-y-5">
            <h1 className="text-3xl sm:text-6xl font-medium text-center">Choose & Calculate</h1>
            <h2 className="text-center text-lg xl:text-xl">Transfer money internationally across 100+ currencies with no hidden fees.
          Receive funds securely using convenient delivery options.</h2>
          </div>
        </div>
        <div className="flex justify-center">
            <img src="/images/calculator.png" alt="transfering worldwide" className=""/>
        </div>
      </div>
    )
  }