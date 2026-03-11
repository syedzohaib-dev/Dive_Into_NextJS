// "use client"

import CustomCursor from "@/components/CustomCursor"

export default async function page() {
    // async function todos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    console.log(data)
    // }

    return (
        <>
            <CustomCursor />
                <div className="big-box w-full min-h-screen flex justify-center items-center flex-wrap gap-4 p-8 bg-gradient-to-r bg-black">

                    {data.map((todo, index) => (
                        <div
                            key={index}
                            className="w-64 flex flex-col gap-3 p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* ID Badge */}
                            <span className="text-xs font-bold mx-auto tracking-widest uppercase text-white bg-gradient-to-r from-violet-400 to-blue-400 px-3 py-1 rounded-full w-fit">
                                #{todo.id}
                            </span>

                            {/* Title */}
                            <h3 className="text-white h-30 text-center font-semibold leading-relaxed capitalize">
                                {todo.title}
                            </h3>

                            {/* Status Badge */}
                            <span className={`flex items-center mx-auto gap-2 px-3 py-1 rounded-full text-xs font-semibold w-fit border
        ${todo.completed
                                    ? "bg-emerald-400/20 text-emerald-400 border-emerald-400"
                                    : "bg-rose-400/20 text-rose-400 border-rose-400"
                                }`}>
                                <span className="text-[8px]">●</span>
                                {todo.completed ? "Completed" : "Pending"}
                            </span>
                        </div>
                    ))}

                </div>
        </>
            )
}
