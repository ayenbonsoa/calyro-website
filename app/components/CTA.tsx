

export default function CTA() {
    return (
        <div className="px-6 sm:px-24 pt-32 text-white bg-white relative">
         <div className="flex justify-center bg-red-500"> <img src="/images/calyro_logo.png" alt="transfering worldwide" className="h-32 absolute top-8"/></div>
          <div className="font-clash-display py-12 lg:py-24 bg-blue-600 rounded-3xl">
            <div className="flex justify-center">
            <div className="bg-pink-500 text-white rounded-full px-6 py-1">Plateforme de retrait No1</div>
          </div>
          <div className="flex justify-center px-6 sm:px-24">
            <div className="lg:w-8/12 py-6 space-y-6">
              <h1 className="text-3xl sm:text-6xl font-medium text-center">Prêt à faire vos premier retrait sans soucis ?</h1>
              <h2 className="text-lg lg:text-2xl text-center">Des transferts rapides, sécurisés et fiables <br className="hidden lg:inline"/> à tout moment, quand vous en avez besoin.</h2>
              <div className="flex justify-center">
                  <div className="lg:flex space-y-3 sm:space-y-0 lg:space-x-6">
                      <div className="flex justify-center">
                      <a href='https://wa.me/message/HVS3TCM4KASIM1' target='_blank' title='Support WhatsApp' rel='noopener noreferrer' aria-label='Support WhatsApp' className="bg-white text-blue-600 text-lg px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full border-3 border-blue-600">
                          <img src="/images/whatsapp.jpg" alt="whatsapp" className="h-6 w-6 rounded-full object-cover object-top" />
                        </div>
                        <div className="text-blue-600">
                          <span className='inline'>Support </span>
                          WhatsApp</div>
                      </a>
                      </div>
                      <div className="flex justify-center">
                          <button className="border border-2 border-white text-lg text-white px-4 py-2 rounded-full">10% de frais de service</button>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }