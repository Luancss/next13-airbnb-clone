import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import { ListingClient } from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservation = await getReservations(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    <ClientOnly>
      <EmptyState />
    </ClientOnly>;
  }

  return (
   <ClientOnly>
    <ListingClient
      listing={listing}
      reservations={reservation}
      currentUser={currentUser}
    />
   </ClientOnly>
  )
};

export default ListingPage;
