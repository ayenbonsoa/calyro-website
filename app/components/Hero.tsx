export default function Hero() {
  return (
    <div className="font-clash-display bg-cream">
      <div className="flex justify-center">
        <div className="lg:w-3/6 py-6 space-y-5  text-[#C2983E]">
          <h1 className="text-5xl sm:text-7xl font-medium lg:font-medium text-center">Conçu pour les créateurs de contenu</h1>
          <h2 className="text-center text-lg xl:text-xl">Calyro facilite le retrait de vos gains issus de TikTok, YouTube et autres plateformes, via un processus sécurisé, rapide et totalement transparent.</h2>
          <div className="flex justify-center">
            <a href="pdf/Calyro_Guide_de_service_&_de_transactions.pdf" target="_blank" title="Guide de service et de transfert" rel="noopener noreferrer" aria-label="Guide de service et de transfert" className="bg-[#C2983E] text-lg text-white px-4 py-2 rounded-full">
              <div className="text-white">Guide de service et de transfert</div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="max-w-3xl lg:max-w-full" src="/images/worldwide.png" alt="transfering worldwide" />
      </div>
    </div>
  )
}