"use client";
import { useCharacterStore } from "../store/characterStore";

function Sidebar() {
  const {
    setStatus,
    setGender,
    fetchCharacters,
    setPage,
    status = [],
    gender = [],
  } = useCharacterStore();

  const handleStatusChange = (value: string) => {
    const updatedStatus = status.includes(value)
      ? status.filter((s) => s !== value)
      : [...status, value];
    setStatus(updatedStatus);
  };

  const handleGenderChange = (value: string) => {
    const updatedGender = gender.includes(value)
      ? gender.filter((g) => g !== value)
      : [...gender, value];
    setGender(updatedGender);
  };

  const handleApplyFilters = () => {
    setPage(1);
    fetchCharacters(status, gender, 1);
  };

  return (
    <aside>
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">
        Filters
      </h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-300">Status</h3>
        <div className="space-y-2 mt-4">
          {["Alive", "Dead", "unknown"].map((value) => (
            <div key={value} className="flex items-center">
              <input
                type="checkbox"
                name="status"
                value={value}
                checked={status.includes(value)}
                onChange={() => handleStatusChange(value)}
                id={`status-${value}`}
                className="hidden"
              />
              <label
                htmlFor={`status-${value}`}
                className="flex items-center cursor-pointer space-x-3"
              >
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out transform hover:scale-105">
                  <span
                    className={`w-3 h-3 rounded-full bg-purple-600 ${
                      status.includes(value) ? "block" : "hidden"
                    }`}
                  ></span>
                </div>
                <span className="text-gray-200">{value}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-300">Gender</h3>
        <div className="space-y-2 mt-4">
          {["Male", "Female", "Genderless", "unknown"].map((value) => (
            <div key={value} className="flex items-center">
              <input
                type="checkbox"
                name="gender"
                value={value}
                checked={gender.includes(value)}
                onChange={() => handleGenderChange(value)}
                id={`gender-${value}`}
                className="hidden"
              />
              <label
                htmlFor={`gender-${value}`}
                className="flex items-center cursor-pointer space-x-3"
              >
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out transform hover:scale-105">
                  <span
                    className={`w-3 h-3 rounded-full bg-purple-600 ${
                      gender.includes(value) ? "block" : "hidden"
                    }`}
                  ></span>
                </div>
                <span className="text-gray-200">{value}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-full mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition"
        onClick={handleApplyFilters}
      >
        Apply
      </button>
    </aside>
  );
}

export default Sidebar;
