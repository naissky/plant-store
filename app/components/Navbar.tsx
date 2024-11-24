import { Link } from "next-view-transitions";

export default function Navbar() {
    return(
        <nav className="bg-greenmind">
            <ul className="flex justify-center py-5 px-10">
                <li><Link className="text-black font-bold text-2xl" href="/">GREENMIND</Link></li>
            </ul>
        </nav>
    )
}