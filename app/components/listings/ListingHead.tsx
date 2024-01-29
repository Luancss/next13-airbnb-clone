import { SafeUser } from "@/app/types";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}
const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  return (
    <div>Listing Head</div>
  )
}

export default ListingHead