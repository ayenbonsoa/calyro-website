import { ClockIcon, ChatBubbleLeftEllipsisIcon, ShieldCheckIcon} from '@heroicons/react/24/outline'

export default function Trust() {
    return (
      <div className="font-clash-display space-y-12 pt-12 px-6 sm:px-24 bg-white  text-[#C2983E]">
        <div className="flex justify-center">
          <div className="lg:w-3/6 py-6 space-y-5">
            <h1 className="text-2xl sm:text-4xl font-medium text-center">Découvrez pourquoi plus de 10.000 créateurs dans le monde font confiance à Calyro</h1>
          </div>
        </div>
        <div className="lg:flex lg:gap-24 space-y-6">
            <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="h-16 w-16 bg-[#C2983E] text-white rounded-full flex justify-center items-center">
                      <ClockIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-center">Livraison dans les délais</h2>
                <h3 className='text-md sm:text-xl text-center'>Nous nous engageons à ce que chaque transfert d'argent soit effectué dans les délais impartis.</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                  <div className="h-16 w-16 bg-[#C2983E] text-white rounded-full flex justify-center items-center">
                      <ChatBubbleLeftEllipsisIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-center">Assistance clientèle 24/7</h2>
                <h3 className='text-md sm:text-xl text-center'>Notre équipe d'assistance dédiée est disponible 24 heures sur 24 pour répondre à toutes vos questions.</h3>
            </div>
            <div className="space-y-3">
                <div className="justify-center flex">
                  <div className="h-16 w-16 bg-[#C2983E] text-white rounded-full flex justify-center items-center">
                        <ShieldCheckIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-center">Transactions sécurisées</h2>
                <h3 className='text-md sm:text-xl text-center'>Nous utilisons un cryptage avancé pour garantir la sécurité de vos transactions.</h3>
            </div>
        </div>
      </div>
    )
  }