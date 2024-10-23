//* in next js evrything done by server

import Link from "next/link";

async function getTodos() {
  // await wait(2000);

  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

export default async function Home() {
  //* this api fetch in server
  const todos = await getTodos();

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos?.map((todo: { id: string; title: string }) => {
          return (
            <li key={todo?.id}>
              <Link href={`/todos/${todo?.id}`}>{todo?.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export const wait = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
