import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="hidden no-underline outline-none md:block">
        <Image
          src="/images/_Logo.svg"
          width={100}
          height={32}
          alt="desktop-logo"
        />
      </Link>

      <Link href="/" className="block no-underline outline-none md:hidden">
        <Image
          src="/images/_Logo.svg"
          width={100}
          height={32}
          alt="mobile-logo"
        />
      </Link>
    </>
  );
};

export default Logo;
