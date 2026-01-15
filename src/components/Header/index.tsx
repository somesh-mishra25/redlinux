import Image from "next/image";
import Link from "next/link";
import MenuData from "./menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-transparent">
      <div className="container flex items-center justify-between py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          {/* Light mode */}
          <Image
            src="/images/logo/logo-light.png"
            alt="RedLinux TechnoSolutions"
            width={180}
            height={48}
            className="block dark:hidden"
            priority
          />

          {/* Dark mode */}
          <Image
            src="/images/logo/logo-dark.png"
            alt="RedLinux TechnoSolutions"
            width={180}
            height={48}
            className="hidden dark:block"
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex gap-6">
          {MenuData.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem.path}
              className="text-base font-medium text-dark hover:text-primary dark:text-white"
            >
              {menuItem.title}
            </Link>
          ))}
        </nav>

        {/* THEME TOGGLER */}
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
