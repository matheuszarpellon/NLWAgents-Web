import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });
  return (
    <div>
      <h1>Create Room</h1>

      {isLoading && <p>Carregando...</p>}

      {data?.map((room) => (
        <div key={room.id}>
          <Link to={`/room/${room.id}`}>{room.name}</Link>
        </div>
      ))}

      <Link className="underline" to="/room">
        Acessar Sala
      </Link>
    </div>
  );
}
