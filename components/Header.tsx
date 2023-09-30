import Link from "next/link";
import LoginLogout from "./LoginLogout";

const Header = () => {
  return (
    <>
      <div className="px-5 py-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            <Link href="/">Todo</Link>
          </h2>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <LoginLogout />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
