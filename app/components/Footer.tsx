
export default function Footer() {
    return (
         <div className="relative bg-white">
            <div className="px-6 sm:px-32 pt-12 pb-12 lg:flex w-full space-y-12 text-[#C2983E]">
                <div className="w-full lg:w-6/12 space-y-6">
                    <h3 className="text-lg font-base">Calyro propose une solution sous la forme d’un service intermédiaire de retrait
                        et de transfert. Le client perçoit ses gains sur la plateforme concernée, nous
                        procédons ensuite à la connexion de notre compte PayPal Business vérifiée afin
                        d’effectuer le retrait, puis nous transférons les fonds au client via un service de
                        transfert international virement local ou tout autre moyen de paiement
                        disponible.
                    </h3>
                    <div className="lg:flex justify-between text-lg">
                        <ul className="list-none space-y-3">
                            <li className="text-xs"><sup>1</sup> La vitesse du transfert et la disponibilité des fonds peuvent être affectées par divers facteurs, tels que le choix du service, le montant, la destination, la devise, la réglementation, les exigences en matière d'identité et la disponibilité du système de nos partenaires bancaires. Non disponible pour toutes les transactions. Voir les conditions générales pour plus de détails.</li>
                            <li className="text-xs"><sup>2</sup> Des frais supplémentaires peuvent être facturés par des tiers.</li>
                            <li className="text-xs"><sup>3</sup> Calyro tire perçoit 10% sur chaque transaction effectuée. Les frais et les taux ne seront jamais modifée sans préavis </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 space-y-12 md:space-y-0">
                    <div className="w-full lg:flex lg:justify-center">
                        <ul className="list-none">
                            <li className="text-2xl font-medium"><a href="mail:hellocalyro@proton.me">hellocalyro@proton.me</a></li>
                            <li className="text-2xl font-medium"><a href="tel:+1(802)5385348">+1 (802) 538-5348</a></li>
                        </ul>
                    </div>
                    <a id="affiliation" href="https://wa.me/18025385348?text=Bonjour, je suis interessé par le programme d'affiliation, pouvez-vous m'en dire plus?" className="h-64 w-full lg:flex lg:justify-center pt-12">
                        <img src="/images/programme_affiliation.png" alt="programme_affiliation" />
                    </a>
                </div>
            </div>
        </div>
    )
  }