"use client";

import { trpc } from "@desktop/app/_trpc/client";

export default function Home() {
  const { data, isLoading } = trpc.getUsers.useQuery();

  return (
    <div className="flex flex-col items-center w-full">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>{data?.map((user) => <h1 key={user.id}>{user.name}</h1>)}</>
      )}
    </div>
  );
}
