import { Suspense } from "react";
import Ticket from "./components/Ticket";

export default function Paid({ searchParams }) {
  const status = searchParams.status;
  return (
    <div>
      <p className=" mt-10 max-w-[30rem] px-10 m-auto">
        For demonstration purposes payment callbacks are not verified/linked to
        the user. In a real-world scenario there should be a database involved,
        payment {"providers'"} callback analysed.
      </p>
      <p className="text-center m5 text-violet-500">Payment status: {status}</p>
      <p className="text-center m-5 font-bold">
        To scan the ticket, open ticket_scanner.github.io/scan on mobile.
      </p>

      {status === "success" ? (
        <Ticket />
      ) : (
        <h2 className="font-bold text-center text-red-500">
          Ticket generation failed. Try again
        </h2>
      )}
    </div>
  );
}
