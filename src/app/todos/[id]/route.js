import todosData from '../../../../todos.json'

export async function GET(request, { params }) {
    const { id } = await params
    const todoFind = todosData.find((todo) => todo.id === parseInt(id))
    if (!todoFind) {
        return Response.json(
            { message: `Todo with this ID ${id} not fount` },
            { status: "404" }
        )
    }
    console.log('Running Get Route Handler');
    return Response.json({ todoFind });
}