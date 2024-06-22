import { Menu, Search } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import { ModeToggle } from '../ui/mode-toggle';
import { useSelector } from 'react-redux';
import { ProfileDropdownMenu } from './ProfileDropDown';

const Header = ({sidebarToggle, setSidebarToggle}) => {
    const user = useSelector(state => state.users.user.userInfo);
    return (
        <header className='bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex justify-between'>
            <div className='flex items-center text-lg '>
                <Menu className='me-4 cursor-pointer'
                onClick={() => setSidebarToggle(!sidebarToggle)} />
                <span className='font-semibold'>UrbanNest</span>
            </div>
            <div className='flex items-center gap-x-5'>
                {/* <div className='relative md:w-65'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1'>
                            <Search />
                        </button>
                    </span>
                    <Input
                        type="search"
                        className="w-full px-4 py-2 pl-12 rounnded hidden md:block"
                    />
                </div> */}
                <div>
                    <ModeToggle />
                </div>
                <div>
                    <ProfileDropdownMenu avatrUrl={user?.avatar?.url} username={user?.firstName} role={user?.role} />
                </div>
            </div>
        </header>
    )
}

export default Header;
