import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-base font-medium rounded md:p-0 hover:text-white relative group transition-colors duration-300"
    >
      {title}
      <span className="h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 group-hover:w-full w-0 transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;
