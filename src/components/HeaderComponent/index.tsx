"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "react-feather";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const HeaderComponent = () => {
  const router = usePathname();

  const navOptions = [
    { label: "Home", path: "/", current: router == "/" },
    { label: "Menu", path: "/menu", current: router == "/menu" },
    {
      label: "About Us",
      path: "/aboutUs",
      current: router == "/aboutUs",
    },
    {
      label: "Contact",
      path: "/contact",
      current: router == "/contact",
    },
  ];

  return (
    <header className="flex flex-1 items-center justify-center p-8">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-bold">
          Recipe<span className="text-red-600">Fy</span>
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch ">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navOptions.map((opt, key) => (
              <Link
                href={opt.path}
                className={classNames(
                  opt.current
                    ? "bg-red-600 text-white"
                    : "text-black hover:bg-red-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={opt.current ? "page" : undefined}
                key={key}
              >
                {opt.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Button
          className="relative"
          radius="full"
          color="danger"
          variant="ghost"
          startContent={<User />}
        >
          Login
        </Button>
      </div>
    </header>
  );
};

export default HeaderComponent;
