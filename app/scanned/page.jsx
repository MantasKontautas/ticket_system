"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "../components/Button";
export default function Scanned() {
  const params = useSearchParams();
  const token = params.get("scan");
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await fetch(
          process.env.NEXT_PUBLIC_URL + "/api/decodeToken",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
            }),
            next: {
              revalidate: 0,
            },
          }
        );
        const { event } = await data.json();
        setEvent(event);
      } catch (e) {
        console.error(e);
      }
    };

    fetchEvent();
  }, [token]);
  if (loading && !event) {
    return (
      <div className="bg-violet-600 w-96 m-auto mt-20 p-5 text-white">
        <h2 className="font-bold text-2xl text-center">Loading...</h2>
      </div>
    );
  }
  return (
    <>
      {event ? (
        <div className="flex flex-col items-center gap-5">
          <div className="bg-violet-600 w-96 m-auto mt-20 p-5 text-white">
            <h2 className="font-bold text-2xl text-center">
              Ticket scanned successfully
            </h2>
            <h3 className="mt-4">Title: {event.title}</h3>
            <h3>Date: {event.date}</h3>
            <h3>Time: {event.time}</h3>
          </div>
          <Button label="Scan Again" href="/" className="mt-10" />
        </div>
      ) : (
        <div className="text-center mt-20">
          <h4 className="font-bold text-2xl">No result</h4>
          <p>Something went wrong. Try again</p>
        </div>
      )}
    </>
  );
}
