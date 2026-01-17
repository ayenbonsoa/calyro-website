export default function Hero() {
  return (
    <div className="font-clash-display">
      <div className="flex justify-center">
        <div className="lg:w-3/6 py-6 space-y-5">
          <h1 className="text-5xl sm:text-8xl font-bold lg:font-medium text-center">Send money online with Snap</h1>
          <h2 className="text-center text-lg xl:text-xl">Transfer money internationally across 100+ currencies with no hidden fees.
          Receive funds securely using convenient delivery options.</h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-lg text-white px-4 py-2 rounded-full">Recevoir de l'argent</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/images/worldwide.png" alt="transfering worldwide" />
      </div>
    </div>
  )
}