import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";


 const Categories = [
    {
Id:1,
name:"All",
icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600 " />


    },

     {
Id:2,
name:"breakfasr",
icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600 " />



    },

     {
Id:3,
name:"soupe",
icon:<TbSoupFilled className="w-[60px] h-[60px] text-green-600 " />


    },

     {
Id:4,
name:"pasta",
icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-600 " />


    },

     {
Id:5,
name:"main_course",
icon:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600 " />



    },

     {
Id:6,
name:"pizza",
icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600 " />



    },

     {
Id:7,
name:"burger",
icon:<FaHamburger className="w-[60px] h-[60px] text-green-600 " />



    }
]
export default Categories