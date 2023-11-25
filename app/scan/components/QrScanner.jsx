"use client";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
export default function QrScanner() {
  const [data, setData] = useState("No Result");
  const [visible, setVisible] = useState(
    <div className="w-96 m-auto">
    <QrReader
      onResult={(result, error) => {
        if (result) {
          setData(result);
          window.location.href="/scanned?scan="+result;
        }

        if (error) {
          console.info(error);
        }
      }}
      constraints={{ facingMode: "environment" }}
    />
    </div>
  );
  return (
    <div className="">
      {visible}
    </div>
  );
}
