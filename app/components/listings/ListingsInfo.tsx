'use client'

import { SafeUser } from "@/app/types"

interface ListingsInfoProps {
  user: SafeUser;
  category: any
  description: string
  roomCount: number
  guestCount: number
  bathroomCount: number
  locationValue: string
}

const ListingsInfo: React.FC<ListingsInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue
}) => {
  return (
    <div>Listings Info</div>
  )
}

export default ListingsInfo