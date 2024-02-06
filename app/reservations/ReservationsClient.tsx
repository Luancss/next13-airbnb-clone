import {toast} from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "../types";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

interface ReservationsClientProps {
  
}
const ReservationsClient = () => {
  return (
    <Container>
      <Heading
        title="Reservations"
        subtitle="Bookings on your properties"
      />
    </Container>
  )
};

export default ReservationsClient;
