import Form from "./components/Form";

export default function Home() {
  return (
    <main>
      <div className="mt-11 w-4/5 m-auto flex flex-col items-center text-center">
        {/* Introduction */}

        <h1 className="font-bold text-3xl">Event Ticket System</h1>
        <h4>Demo</h4>
        <a
          href="https://github.com/MantasKontautas/ticket_system"
          className="underline"
        >
          https://github.com/MantasKontautas/ticket_system
        </a>
        <p className="mt-10 max-w-[30rem]">
          No actual money will be spent. Type in your mock event data and
          press Generate. Then, you will be redirected to checkout. Input the
          demo card 4242 4242 4242 4242. Other data can be anything.
        </p>
      </div>

      <Form />
    </main>
  );
}
