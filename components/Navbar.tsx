import { Link } from "lucide-react";
import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" width={46} height={46} alt="logo" />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <Link href="/sign-in">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
