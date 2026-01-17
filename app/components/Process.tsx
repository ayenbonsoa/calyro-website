export default function Calculator() {
    return (
      <div className="font-clash-display px-6 sm:px-24 pt-24 bg-white">
         <div className="flex lg:inline justify-center">
            <span className="bg-pink-500 text-white rounded-full px-6 py-1">Plusieurs platformes</span>
         </div>
        <div className="sm:flex">
            <div className="w-full lg:w-8/12 py-6 space-y-5">
                <h1 className="text-3xl text-center sm:text-6xl lg:text-left font-medium">Sécurisée and Reliable</h1>
                <h2 className="text-lg xl:text-3xl text-center lg:text-left">Millions trust us with their transfers.</h2>
            </div>
            <div className="w-full lg:w-4/12 bg-red-green-500">
            <img src="/images/countries.png" alt="transfering worldwide" className="h-auto sm:h-32"/>
            </div>
        </div>
        <div className="mt-6 sm:flex justify-right space-y-6 sm:space-y-0 gap-x-6 pt-12 sm:pt-0">
            <div className="bg-cream px-6 py-12 space-y-24 lg:grayscale lg:hover:grayscale-0">
                <img src="/images/titkok-proc.png" alt="transfering worldwide" className="h-48"/>
                <div className="w-10/12 sm:w-full space-y-6">
                    <h2 className="text-xl font-bold">Tiktok</h2>
                    <h3 className="font-regular text-lg xl:text-3xl">Protected with advanced encryption and global regulatory standards..</h3>
                </div>
            </div>
            <div className="bg-cream px-6 py-12 space-y-24 lg:grayscale lg:hover:grayscale-0">
                <img src="/images/youtube-proc.png" alt="transfering worldwide" className="h-48"/>
                <div className="w-10/12 sm:w-full space-y-6">
                    <h2 className="text-xl font-bold">Youtube</h2>
                    <h3 className="font-regular text-lg xl:text-3xl">Trusted by millions of customers every month.</h3>
                </div>
            </div>
            <div className="bg-cream px-6 py-12 space-y-24 lg:grayscale lg:hover:grayscale-0">
                <img src="/images/facebook-proc.png" alt="transfering worldwide" className="h-48"/>
                <div className="w-10/12 sm:w-full space-y-6">
                    <h2 className="text-xl font-bold">Facebook</h2>
                    <h3 className="font-regular text-lg xl:text-3xl">On-time delivery guaranteed - or your fees back.</h3>
                </div>
            </div>
        </div>
      </div>
    )
  }