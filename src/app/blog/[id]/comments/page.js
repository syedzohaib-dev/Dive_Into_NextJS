
async function page({ params }) {
    console.log(await params)
    const { id } = await params;
    return (
        <div className="font-bold">Comments: {id}</div>
    )
}

export default page