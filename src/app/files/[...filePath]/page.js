
export default async function File({ params }) {
    console.log(await params)
    const { filePath } = await params;
    return (
        <div className="font-bold text-3xl">file path: {' '}
            <span className="font-bold text-red-600">{filePath.join('/')}
            </span>
        </div>
    )
}
