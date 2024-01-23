'use client'

import { useRouter } from "next/navigation";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removign some of your filters",
  showReset
}) => {
  const router = useRouter();

  return (
    <div>Empty</div>
  )
}

export default EmptyState