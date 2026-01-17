
export default function Footer() {
    return (
         <div className="relative bg-white">
            <div className="px-12 sm:px-32 pt-24 lg:flex w-full space-y-12">
                <div className="w-full lg:w-4/12 space-y-6">
                    <h3 className="text-2xl font-medium">Embrace the future of energy with our smart EV charging expertise.</h3>
                    <div className="flex justify-between">
                        <div><a href="">hello@calyro.com</a></div>
                        <div><a href="">+44 45 152 25 625</a></div>
                    </div>
                </div>
                <div className="w-full lg:w-8/12 lg:flex lg:justify-center">
                    <ul className="list-none">
                        <li className="text-2xl font-medium">Explore Chargers</li>
                        <li className="text-2xl font-medium">Solutions</li>
                        <li className="text-2xl font-medium">Mobile App</li>
                        <li className="text-2xl font-medium">About us</li>
                        <li className="text-2xl font-medium">Contact</li>
                        <li className="text-2xl font-medium">Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }