import { fetchUsers } from "./fetchUsers";

export default async function Home() {
  const users = await fetchUsers(20);

  const getZodiacSignMessage = (zodiacSign: string) => {
    return `Your zodiac sign is ${zodiacSign}.`;
  };

  const getTailwindReaction = (tailwind: string) => {
    if (tailwind === "love") return "😍";
    if (tailwind === "haet") return "😡";
  };

  return (
    <main className="flex min-h-svh w-full flex-col items-center">
      <header className="flex w-full justify-evenly border-b-2 border-gray-500 p-4">
        <h1 className="text-4xl font-bold">Zod Demo</h1>
      </header>

      <div className="flex flex-wrap justify-evenly gap-4 px-4 py-6">
        {users.map((user) => {
          return (
            <div
              className="flex w-96 flex-col items-start gap-1 truncate border-2 border-gray-500 px-3 py-1"
              key={user.id}
            >
              <p className="text-lg">#{user.id + 1}</p>
              <h2 className="text-xl font-bold">Name: {user.name}</h2>
              <p className="text-gray-500">Email: {user.email}</p>
              <p className="text-gray-500">
                {getZodiacSignMessage(user.zodiacSign)}
              </p>
              <p className="text-gray-500">
                Tailwind: {getTailwindReaction(user.tailwind)}
              </p>
              <p className="text-gray-500">
                Favorite Color: {user.favoriteColor}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
