import Link from "next/link";

const NavItems = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/companions">Companions</Link>
      <Link href="/my-journey">My Journey</Link>
    </div>
  );
};

export default NavItems;
