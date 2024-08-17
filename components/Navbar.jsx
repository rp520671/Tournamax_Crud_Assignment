import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white text-xl font-bold" href={"/"}>
        Tournamax Assignment
      </Link>
      <Link className="bg-white py-2 px-4 font-medium rounded hover:bg-slate-100 transition duration-200" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
