import Image from "next/image";
import Link from "next/link";
// import logo from "../../img/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggler } from "../ThemeToggler";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-3 px-5 flex justify-between">
      <Link href="/">
        {/* <Image src={logo} alt="Logo" width={40}></Image> */}
        <Image src="/img/logo.png" alt="Logo" width={40} height={40}></Image>
      </Link>

      <div className="flex items-center">
        <ThemeToggler />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                  <Avatar>
                      <AvatarImage src="/img/avatar.png" alt="Avatar Image" />
                      <AvatarFallback className="text-black font-semibold">DB</AvatarFallback>
                  </Avatar>
              </button>   
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Link href="/auth">Logout</Link>
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      
    </div>
  );
};

export default Navbar;
