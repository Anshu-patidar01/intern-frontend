import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/context";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "All Events", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// useState();}

export default function NavigationBar() {
  const { User, setUser } = useContext(MyContext);

  const handleLogout = () => {
    localStorage.removeItem("project");
    setUser({
      _id: "",
      fullname: "",
      mobileNumber: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    async () => {
      const token = localStorage.getItem("project"); // or any auth logic
      // if (!token) {
      //   setIsAuthorized(false);
      //   return;
      // }
      console.log(token);
      try {
        await axios
          .post(
            // "https://intern-backend-49ou.onrender.com/user/validate-token",
            "https://intern-backend-49ou.onrender.com/validate-token",
            { token: `${token}` },
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            console.log("User from proted route:", res.data);
            setUser(res.data);
          })
          .catch((res) => {
            console.log("User from proted route catched:", res);
          });
      } catch (error) {
        console.log("error while connecting to token api.");
      }
    };
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden  sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  className={
                    "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                  to={"/"}
                >
                  <h1>Home</h1>
                </Link>
                <Link
                  to={"/"}
                  className={
                    "bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  All Events
                </Link>
                <Link
                  to={"/"}
                  className={
                    "bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  About
                </Link>
                <Link
                  to={"/services"}
                  className={
                    "bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Services
                </Link>
                <Link
                  to={"/"}
                  className={
                    "bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Portfolio
                </Link>
                <Link
                  to={"/"}
                  className={
                    "bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {User._id === "" ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                to={"/registration"}
                className="bg-sky-600 text-white p-3 rounded-full"
              >
                {" "}
                Login/Register
              </Link>
            </div>
          ) : (
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    onClick={() => handleLogout()}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          )}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
