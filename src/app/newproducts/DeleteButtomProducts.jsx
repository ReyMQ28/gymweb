"use client";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ productId }) {
  const router = useRouter();

  return (
    <div>
      <button
        className=" flex justify-center items-center w-9 h-9 text-lg bg-red-500 rounded-full"
        onClick={async () => {
          if (confirm("are you sure that you want to delete this client?")) {
            const res = await axios.delete("/api/products/" + productId);
            console.log(res);
            if (res.status === 200) {
              router.refresh();
            }
          }
        }}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
}

export default Buttons;
