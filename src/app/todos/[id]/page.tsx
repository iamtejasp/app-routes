import Example from "@/component/Example";
import { notFound } from "next/navigation";
import React from "react";

const getTodoDetails = async (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json()
  );
};

const page = async ({ params }: { params: { id: string } }) => {
  const todo = await getTodoDetails(params?.id);

  if (!todo?.id) return notFound();

  return (
    <>
      <div>{JSON.stringify(todo)}</div>;
      <Example />
    </>
  );
};

export default page;
