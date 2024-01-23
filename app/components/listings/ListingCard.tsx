import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "@/app/types";

interface ListinCardProps {
  data: Listing;
  reservations?: Reservation
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}
const ListingCard: React.FC<ListinCardProps> = ({
  data,
  reservations,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser
}) => {
  return (
    <div>Listing Card</div>
  )
}

export default ListingCard