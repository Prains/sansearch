"use client";

export default function ErrorWrapper({ error }) {
  console.log(error);
  return <h1>ERROR {error.message}</h1>;
}
