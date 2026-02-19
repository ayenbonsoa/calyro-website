'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Nos services', href: '/#services', current: false },
  { name: 'Temoignages', href: '/#testimony', current: false },
  { name: "Programme d'affiliation", href: '/#affiliation', current: false },
]

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const targetId = href.split('#')[1]
    if (!targetId) return

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Disclosure as="nav" className="pt-6 fixed top-0 left-1/2 -translate-x-1/2 w-11/12 sm:w-full z-50 font-clash-display justify-center">
      <div 
        className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border border-3 border-white rounded-full text-black transition-colors transition-opacity duration-300 ease-out ${
          isScrolled ? 'bg-white opacity-100 shadow-md' : 'bg-white/60 opacity-100'
        }`}
      >
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center sm:justify-center sm:items-stretch sm:justify-start">
            <a href="/" className="flex shrink-0 items-center ml-12 lg:ml-0">
              <img
                alt="Calyro"
                src="/images/calyro_logo.png"
                className="h-8 w-auto"
              />
            </a>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    title={item.name}
                    key={item.name}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-blue-500 font-bold' : 'font-medium text-[#C2983E] hover:text-black/50',
                      'px-3 py-2 text-lg',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href='https://wa.me/message/HVS3TCM4KASIM1' target='_blank' title='Support WhatsApp' rel='noopener noreferrer' aria-label='Support WhatsApp' className="bg-[#C2983E] text-lg text-white px-4 py-2 rounded-full flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border-3 border-white">
                <img src="/images/whatsapp.jpg" alt="whatsapp" className="h-6 w-6 rounded-full object-cover object-top" />
              </div>
              <div className="text-white">
                <span className='hidden sm:inline'>Support </span>
                 WhatsApp</div>
            </a>
          </div>
        </div>
      </div>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform opacity-0 -translate-y-2"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 -translate-y-2"
      >
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 bg-white shadow-md border border-3 border-white rounded-2xl mt-2">
            {navigation.map((item, index) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                onClick={(event: any) => handleNavClick(event, item.href)}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : `text-[#C2983E] border-0 ${index !== navigation.length - 1 ? 'border-b-1' : ''} hover:bg-white/5 hover:text-white`,
                  'block px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  )
}
