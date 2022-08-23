// Libraries and hooks
import React, { Fragment, useState } from "react"
import { useRouter } from "next/router"
// Components
import Image from "next/image"
import Link from "next/link"
import Icon, { IconProps } from "@components/icon"
import { Dialog, Transition } from "@headlessui/react"
import {
  Bars3CenterLeftIcon as MenuAlt1Icon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline"
import Head from "next/head"
// Helper functions
import { classNames } from "@utils/helper-functions"
// Assets
import logo from "@assets/logo-white.svg"
// Types
import { BlitzLayout } from "@blitzjs/next"

/**
 * TODO: set navigation items in context depending on whether a user, vendor or admin is logged in
 */
const navigation = [
  { label: "Home", href: "/", name: "home" as const, current: true },
  { label: "Shop", href: "/shop", name: "shopping-bag" as const, current: false },
  {
    label: "Services",
    href: "/services",
    name: "briefcase" as const,
    current: false,
  },
  {
    label: "Offerings",
    href: "/offerings",
    name: "collection" as const,
    current: false,
  },
]

const secondaryNavigation = [
  {
    label: "Cart",
    href: "/cart",
    name: "shopping-cart" as const,
    current: false,
  },
  {
    label: "Orders",
    href: "/orders",
    name: "receipt-refund" as const,
    current: false,
  },
  {
    label: "Appointments",
    href: "/appointments",
    name: "calendar" as const,
    current: false,
  },
  {
    label: "Help",
    href: "/help",
    name: "question-mark-circle" as const,
    current: false,
  },
]

interface NavItemProps extends Omit<IconProps, "className"> {
  label: string
  href: string
  current: boolean
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const { label, href, name } = props

  const router = useRouter()

  const current = router.pathname.split("/")[1] === href.split("/")[1]

  return (
    <Link href={href}>
      <a
        key={label}
        className={classNames(
          current
            ? "bg-secondary-light text-secondary-default border-r-4 border-secondary-default"
            : "text-primary-light hover:text-white hover:bg-primary-mid",
          "group flex items-center px-2 py-3 text-sm leading-6 font-medium"
        )}
        aria-current={current ? "page" : undefined}
      >
        <Icon
          name={name}
          className={classNames(
            current ? "text-secondary-default" : "text-primary-light",
            "mr-4 flex-shrink-0 h-6 w-6 "
          )}
          aria-hidden="true"
        />
        {label}
      </a>
    </Link>
  )
}

const LogoutButton: React.FC = () => {
  return (
    <div className="flex-shrink-0 flex px-2">
      <button className="group flex items-center px-2 py-2 text-sm leading-6 font-medium bold rounded-md w-full text-primary-light hover:text-white hover:bg-primary-mid">
        <Icon
          name="logout"
          className={classNames("text-primary-light", "mr-4 flex-shrink-0 h-6 w-6 ")}
          aria-hidden="true"
        />
        Sign Out
      </button>
    </div>
  )
}

const DashboardLayout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{title || "Hollard Concierge Desk"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-default">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Image className="h-4 w-auto" src={logo} alt="Hollard logo" />
                  </div>
                  <nav
                    className="mt-5 flex-shrink-0 h-full divide-y divide-primary-mid overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div>
                      {navigation.map((item) => (
                        <NavItem
                          key={item.label}
                          current={item.current}
                          href={item.href}
                          name={item.name}
                          label={item.label}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="space-y-1">
                        {secondaryNavigation.map((item) => (
                          <NavItem
                            key={item.label}
                            current={item.current}
                            href={item.href}
                            name={item.name}
                            label={item.label}
                          />
                        ))}
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-primary-default pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Image className="h-8 w-auto" src={logo} alt="Hollard logo" />
            </div>
            {/* Profile details component */}
            <div className="mx-2 mt-4 group rounded-md px-3.5 py-2 text-sm text-left font-medium text-primary-light">
              <span className="flex w-full justify-between items-center">
                <span className="flex min-w-0 items-center justify-between space-x-3">
                  <img
                    className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="flex-1 flex flex-col min-w-0">
                    <span className="text-white text-sm font-medium truncate">Jessy Schwarz</span>
                    <span className="text-primary-light text-sm truncate">@jessyschwarz</span>
                  </span>
                </span>
              </span>
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-primary-mid overflow-y-auto"
              aria-label="Sidebar"
            >
              <div>
                {navigation.map((item) => (
                  <NavItem
                    key={item.label}
                    current={item.current}
                    href={item.href}
                    name={item.name}
                    label={item.label}
                  />
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div>
                  {secondaryNavigation.map((item) => (
                    <NavItem
                      key={item.label}
                      current={item.current}
                      href={item.href}
                      name={item.name}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            </nav>

            <LogoutButton />
          </div>
        </div>

        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="relative z-10 flex-shrink-0 flex justify-between items-center h-16 bg-primary-default lg:hidden">
            <Image className="h-4 w-auto" src={logo} alt="Hollard logo" />
            <button
              type="button"
              className="px-4 text-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 pb-8">
            {/* <PageHeader /> */}
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
