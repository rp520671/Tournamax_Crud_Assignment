"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        const res = await fetch(`api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          if (router.asPath) {
            router.replace(router.asPath);
          } else {

            window.location.reload();
          }
        } else {
          console.error("Failed to delete topic: ", res.status);
        }
      } catch (error) {
        console.error("Error deleting topic: ", error);
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
