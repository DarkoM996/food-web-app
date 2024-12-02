import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-20 flex justify-between items-center px-6 py-8 bg-neutral-200">
      <Link to="/">
        <h4 className="font-bold text-2xl">The Tomato</h4>
      </Link>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
