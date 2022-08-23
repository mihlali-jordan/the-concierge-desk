import React from "react"
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  BriefcaseIcon,
  ReceiptRefundIcon,
  CalendarIcon,
  RectangleStackIcon,
  ArrowRightOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline"

export interface IconProps {
  name:
    | "home"
    | "shopping-bag"
    | "briefcase"
    | "collection"
    | "shopping-cart"
    | "receipt-refund"
    | "calendar"
    | "question-mark-circle"
    | "logout"
  className: string
}

const Icon: React.FC<IconProps> = (props) => {
  switch (props.name) {
    case "home":
      return <HomeIcon className={props.className} />
    case "shopping-bag":
      return <ShoppingBagIcon className={props.className} />
    case "briefcase":
      return <BriefcaseIcon className={props.className} />
    case "collection":
      return <RectangleStackIcon className={props.className} />
    case "shopping-cart":
      return <ShoppingCartIcon className={props.className} />
    case "receipt-refund":
      return <ReceiptRefundIcon className={props.className} />
    case "calendar":
      return <CalendarIcon className={props.className} />
    case "question-mark-circle":
      return <QuestionMarkCircleIcon className={props.className} />
    case "logout":
      return <LogoutIcon className={props.className} />
    default:
      return null
  }
}

export default Icon
