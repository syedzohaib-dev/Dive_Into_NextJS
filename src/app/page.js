import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";

export default async function Home() {

  return (
    <>
      <div className="w-full h-screen bg-indigo-600 flex-col flex  items-center">
        <TodoForm />
        <TodoList />
      </div>

    </>
  );
}
