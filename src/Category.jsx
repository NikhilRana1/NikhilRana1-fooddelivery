import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

const Categories = [
  { Id: 1, name: "All", icon: <TiThSmallOutline className="w-[40px] h-[40px]" /> },
  { Id: 2, name: "Breakfast", icon: <MdFreeBreakfast className="w-[40px] h-[40px]" /> },
  { Id: 3, name: "Soup", icon: <TbSoupFilled className="w-[40px] h-[40px]" /> },
  { Id: 4, name: "Pasta", icon: <CiBowlNoodles className="w-[40px] h-[40px]" /> },
  { Id: 5, name: "Main Course", icon: <MdOutlineFoodBank className="w-[40px] h-[40px]" /> },
  { Id: 6, name: "Pizza", icon: <GiFullPizza className="w-[40px] h-[40px]" /> },
  { Id: 7, name: "Burger", icon: <FaHamburger className="w-[40px] h-[40px]" /> },
];

export default Categories;
