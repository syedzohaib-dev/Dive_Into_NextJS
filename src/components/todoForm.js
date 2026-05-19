export default function TodoForm() {
  return (
    <form className="flex gap-3 items-center mt-5">
      <input
        type="text"
        placeholder="Enter your todo"
        className="border border-gray-400 px-4 py-2 rounded-md outline-none w-120"
      />

      <button
        type="submit"
        className="bg-black text-white px-5 py-2 rounded-md"
      >
        Add Todo
      </button>
    </form>
  );
}