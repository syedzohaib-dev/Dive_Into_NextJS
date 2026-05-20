import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";

export default async function Home() {

  return (
    <>

      <div className="w-full h-screen bg-gray-900 flex-col flex  items-center">
        <TodoForm />
        <TodoList />
      </div>

    </>
  );
}
