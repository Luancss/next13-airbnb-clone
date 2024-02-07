"use client";

import { useRouter } from "next/navigation";
import Modal from "./Modal";

import useSearchModal from "@/app/hooks/useSearchModal";
import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const searchModal = useSearchModal();

  const [step, setStep] = useState(STEPS.LOCATION);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  })

  const Map = useMemo(() => {
    dynamic(() => import('../Map'), {
      ssr: false
    })
  }, [])

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      title="Filters"
      actionLabel="Search"
    />
  );
};

export default SearchModal;
