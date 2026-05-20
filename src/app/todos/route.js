import { connectDB } from '@/lib/connectDB';
import todosData from '../../../todos.json'
import mongoose from 'mongoose';

export async function GET() {
    await connectDB();
    const result = await mongoose.connection.db.collection('todos').insertMany({
        title: "learn next js",
    });
    console.log('Running Get Route Handler');
    return Response.json({
        todosData
    });
}

export async function POST(request) {
    const { id, text, completed } = await request.json();

    if (!text) {
        return Response.json(
            { message: "Text is required" },
            { status: 400 }
        );
    }

    const newTodo = todosData.push({ id, text, completed })

    return Response.json(
        { message: "Todo added successfully", newTodo },
        { todo: newTodo },
        { status: "201" },
    )
}
