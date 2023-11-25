"use client";

import Button from "./Button";
import { createCheckOutSession } from "./Checkout";
import Input from "./Input";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const eventData = {
      title: formData.get("title"),
      price: formData.get("price"),
      location: formData.get("location"),
      time: formData.get("time"),
      date: formData.get("date"),
    };
    sessionStorage.setItem("eventData", JSON.stringify(eventData));
    createCheckOutSession(eventData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-96 sm:w-4/5 m-auto mt-5 gap-1 pb-20"
    >
      <Input label="Title:" name="title" type="text" required={true} />
      <Input label="Price:" name="price" type="number" required={true} />
      <Input label="Location:" name="location" type="text" required={true} />
      <Input label="Time:" name="time" type="time" required={true} />
      <Input label="Date:" name="date" type="date" required={true} />
      <div className="mt-4" />
      <Button type="submit" label="Generate" />
    </form>
  );
}
