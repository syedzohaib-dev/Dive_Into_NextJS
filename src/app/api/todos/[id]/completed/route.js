import { connectDB } from "@/lib/connectDB";
import { Todo } from "@/models/todo.model";

export async function PATCH(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const todo = await Todo.findById(id);

        if (!todo) {
            return Response.json(
                { message: "Todo not found" },
                { status: 404 }
            );
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {
                completed: !todo.completed,
            },
            { new: true }
        );

        return Response.json(
            {
                message: "Todo status updated",
                todo: updatedTodo,
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { message: "Error updating todo" },
            { status: 500 }
        );
    }
}