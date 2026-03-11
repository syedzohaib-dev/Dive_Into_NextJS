
export default async function blog({ params }) {
    console.log(await params)

    return (
        <>
            <div className="w-full h-screen bg-green-100 text-center">
                <h1 className="shadow-sm bg-red-100 rounded-lg m-2 text-3xl
                 font-bold text-center py-10">
                    Blog Page
                </h1>
            </div >
        </>
    );
}
