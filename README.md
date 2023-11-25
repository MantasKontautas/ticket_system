# Event Ticket System (Next.JS, Tailwind CSS)

This is a showcase of a ticket system, that was used similarly in one of my projects. It is intended to be simple, so no databases are used. The demo is hosted on [https://event-ticket-system.vercel.app/](https://event-ticket-system.vercel.app/).

## How does it work?

First, generate a mock event by typing in information of an event in the form fields. After clicking submit, you will be redirected to a demo stripe checkout. Input the demo card [`4242 4242 4242 4242`](https://stripe.com/docs/testing?testing-method=card-numbers#visa). Other data can be anything, it doesn't matter. After the payment, you will be redirected to a success page and your ticket will be generated. Here, you can download it to your local machine. On page close the ticket will not be saved. Event data is temporarily stored in the session storage.

---

To scan the ticket, open [https://event-ticket-system.vercel.app/scan](https://event-ticket-system.vercel.app/scan).

There, you will be asked for access to the camera. After scanning your QR-code, you will be redirected to another page, where the scanned data will be printed out on the screen.