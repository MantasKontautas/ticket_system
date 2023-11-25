import Image from "next/image";
import Form from "./components/Form";

export default function Home() {
  return (
    <main>
      <div className="mt-11 w-4/5 m-auto">
        {/* Introduction */}
        <div className="mt-20">
          <h1 className="font-bold text-center text-3xl">
            Event Ticket System
          </h1>
          <h4 className="text-center">Demo</h4>
          <p className="text-center mt-20">
            No actual money will be spent. Please type in your event data and
            press Generate.
          </p>
        </div>
      </div>

      <Form />
    </main>
  );
}
