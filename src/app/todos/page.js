
export default async function page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
    return (
        <div>page</div>
    )
}
