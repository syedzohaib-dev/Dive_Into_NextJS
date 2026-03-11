import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
    title: 'About | Software Company',
}

export default function about() {
    let user = 'zohaib'
    if (user === 'zohaib') {
        notFound()
    }
    return (
        <>
            <h1>About Page</h1>
            <Link href="/">Home</Link>


        </>
    )
}