import todosData from '../../../todos.json'

export function GET() {
    
    console.log('Running Get Route Handler');
    return Response.json({ todosData
     });
}