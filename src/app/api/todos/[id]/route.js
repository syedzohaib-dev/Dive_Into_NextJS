import { connectDB } from '@/lib/connectDB'
import { Todo } from '@/models/todo.model'

await connectDB();
export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = await params
        const body = await request.json();
        const todo = await Todo.findById(id)
        if (!todo) {
            return Response.json(
                { message: `Todo with this ID ${id} not fount` },
                { status: 404 }
            )
        }
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title: body.title },
            { new: true }
        )
        return Response.json({
            message: 'Todo updated successfully',
            todo: updatedTodo
        },
            { status: 200 }
        );
    } catch (error) {
        console.log('Error updating todo: ', error);
        return Response.json(
            {
                message: "Internal server error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params
        const todo = await Todo.findById(id)
        if (!todo) {
            return Response.json(
                { message: `Todo with this ID ${id} not fount` },
                { status: 404 }
            )
        }
        const deletedTodo = await Todo.findByIdAndDelete(id)
        return Response.json({
            message: 'Todo deleted successfully',
            todo: deletedTodo
        },
            { status: 200 }
        );
    } catch (error) {
        console.log('Error deleting todo: ', error);
        return Response.json(
            {
                message: "Internal server error",
            },
            {
                status: 500,
            }
        );
    }
}