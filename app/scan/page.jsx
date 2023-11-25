import QrScanner from "./components/QrScanner";
import Button from "@/app/components/Button";
export default function Scan() {
    return (
        <div className="mt-20 flex flex-col items-center gap-4">
            <h2 className="text-4xl text-center w-4/5 m-auto">Scan your generated ticket</h2>
            <Button label={"Don't have one? Generate a Ticket"} href="/"/>
            <QrScanner />
        </div>
    );
}