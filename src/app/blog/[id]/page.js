
async function page({ params }) {
    console.log(await params)
    const { id } = await params;
    return (
        <div className="font-bold"> Blog post ID: {id}</div>
    )
}

export default page