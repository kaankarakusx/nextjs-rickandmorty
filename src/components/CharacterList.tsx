import { useCharacterStore } from "../store/characterStore";

function CharacterList() {
  const characters = useCharacterStore((state) => state.characters);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className="bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center transform hover:scale-105 transition-transform"
        >
          <img
            src={character.image}
            alt={character.name}
            className="rounded-full border-4 border-purple-600 shadow-md"
          />
          <h3 className="text-lg font-semibold mt-4 text-white">
            {character.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Status: {character.status}
          </p>
          <p className="text-sm text-gray-400">Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
