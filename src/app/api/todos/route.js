import { connectDB } from '@/lib/connectDB';
import { Todo } from '@/models/todo.model';
export async function GET(request) {
    try {
        await connectDB();
        const todo = await Todo.find();
        if (todo.length === 0) {
            return Response.json({
                message: "No todo found"
            }, { status: 404 })
        }
        const todoLength = todo.length;

        return Response.json({
            message: "Todo fetched successfully",
            todoLength,
            todo
        }, {
            status: 200
        });
    } catch (error) {
        console.log('Failed to fetch todos ', error)
        return Response.json({
            message: "Internal server error"
        }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const { title, completed } = await request.json();

        if (!title) {
            return Response.json(
                { message: "Title is required" },
                { status: 400 }
            );
        }

        const newTodo = await Todo.create({
            title, completed
        })


        return Response.json(
            {
                message: "Todo added successfully",
                todo: newTodo
            },
            { status: 201 },
        )
    } catch (error) {
        console.error("Error adding todo:", error);
        return Response.json(
            { message: "Failed to add todo" },
            { status: 500 }
        );
    }
}
