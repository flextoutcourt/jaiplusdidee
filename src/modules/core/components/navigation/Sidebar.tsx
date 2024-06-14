import { BriefcaseIcon, HomeIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import Button from '../../design-system/Button';

const links = [
    {
        name: 'Home',
        href: "/",
        icon: <HomeIcon className="h-5" />
    },
    {
        name: 'Agents',
        href: '/agents',
        icon: <UserIcon className="h-5"/>
    },
    {
        name: 'Cases',
        href: "/cases",
        icon: <BriefcaseIcon className="h-5" />
    },
    {
        name: 'Civilians',
        href: "/cases",
        icon: <UserGroupIcon className="h-5" />
    },
    {
        name: 'Evidences',
        href: "/cases",
        icon: <BriefcaseIcon className="h-5" />
    },
]

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-between">
        <div className="p-4">
            <div className="sidebar-header bg-gray-100 border-b border-gray-300 py-4">
                <h1 className="leading-6 font-bold text-2xl text-center">MDT</h1>
            </div>
            <div className="flex flex-col gap-4 py-8">
                {links.map((item) => (
                    <NavLink 
                        to={item.href} 
                        key={item.name} 
                        className={({isActive}) => isActive ? 
                            "flex items-center justify-start gap-2 font-medium py-2 px-3 rounded-md text-gray-100 bg-indigo-500 hover:bg-indigo-600 hover:scale-105 hover:shadow-lg duration-200": 
                            "flex items-center justify-start gap-2 font-medium hover:bg-indigo-600 hover:text-gray-100 py-2 px-3 rounded-md hover:shadow-lg hover:scale-105 duration-200"
                    }>
                        {item.icon ?? ""}
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </div>
        <div className="sidebar-footer border-t border-gray-300 py-4 mx-4 justify-items-end">
            <Button>Test</Button>
        </div>
    </div>
  );
}
