import {
    HiOutlineViewGrid,
	HiOutlineCube,
    HiOutlineUser,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from "react-icons/hi"


export const SIDEBAR_LINKS = [
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'products',
        label:'Products',
        path:'/products',
        icon:<HiOutlineCube/>
    },
    {
        key:'customers',
        label:'customers',
        path:'/',
        icon:<HiOutlineUsers />
    },
    {
        key:'statistics',
        label:'statistics',
        path:'/',
        icon:<HiOutlineShoppingCart />
    },
]

export const SIDEBAR_BOTTOM_LINKS = [
    {
        key:'settings',
        label:'Settings',
        path:'/',
        icon:<HiOutlineCog />
    },
    {
        key:'support',
        label:'Help & Support',
        path:'/',
        icon: <HiOutlineQuestionMarkCircle />
    },
]