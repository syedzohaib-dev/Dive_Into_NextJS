import Link from "next/link";

export default function services() {
    return (
        <>
            <h1>All Services</h1>

            <p>
                <Link href="/services/webdev">Web Development</Link>
            </p>
            <p>
                <Link href="/services/appdev">App Development</Link>
            </p>
            <p>
                <Link href="/services/figma">Figma Design</Link>
            </p>
            <p>
                <Link href="/services/seo">SEO</Link>
            </p>
        </>
    )
}