"use client";
import QRcode from "qrcode.react";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import Button from "@/app/components/Button";

export default function Ticket() {
  const [ticket, setTicket] = useState(null);
  const ticketHTML = useRef(null);
  const [imgData, setImgData] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {

    const fetchToken = async () => {
        const data = await fetch(process.env.NEXT_PUBLIC_URL+"/api/generateToken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event,
            }),
            next:{
                revalidate:0
            }
            });
            const { token } = await data.json();
            setToken(token);
    }
    const event = JSON.parse(sessionStorage.getItem("eventData"));
    if (!event) window.location.href = "/";
    if(!token) {
        fetchToken();
    }else{
        setTicket(
            <div
              className="w-[320px] h-[450px] flex flex-col p-5 pb-20 bg-violet-800 text-white"
              ref={ticketHTML}
              id="ticket"
            >
              <h2 className="text-center text-2xl">{event.title}</h2>
              <h3 className="text-center">{event.date}</h3>
              <h3 className="text-center">{event.time}</h3>
              <QRcode value={token} className="bg-white p-3 w-fit m-auto mt-20" />
            </div>
          );
    }
 
  
  
  }, [token]);

  useEffect(() => {
    if (ticket) {
      html2canvas(ticketHTML.current,{
        scale:3,
        windowWidth: 320,
        windowHeight: 450,
      }).then((canvas) => {
       const img = canvas.toDataURL("image/jpeg");
        setImgData(img);
        setTicket(
          <picture>
            <img
              src={img}
              alt="Ticket failed to load"
              className="m-auto h-auto w-[320px]"
            />
          </picture>
        );
      });
    }
  }, [ticket, imgData]);

//Best resolution this way
  const download = () => {
    const pdf = new jsPDF("p","px",[220,300]);
    pdf.addImage(imgData, "JPEG", 0, 0, 220,300);
    pdf.save("ticket.pdf");
  }

  if (ticket) {
    return <div className="mb-20 flex flex-col items-center gap-4">
          <Button label="Download Ticket" onClick={() =>download()} className="m-auto mt-10"/>
        {ticket}
  
 </div>;
  } else {
    return (
      <div className="w-96 m-auto mt-20 bg-violet-600 text-white rounded">
        <h2 className="text-center text-2xl">Loading...</h2>
      </div>
    );
  }
}
