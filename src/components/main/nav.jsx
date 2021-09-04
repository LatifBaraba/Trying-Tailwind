import { InboxIcon, HeartIcon, ShoppingBagIcon, SearchIcon } from '@heroicons/react/outline'
import TextField from '@material-ui/core/TextField'

const nav = () => {

    return (
        <div className="flex space-x-4">
            <div className="logo p-2">
                <h1 className="text-4xl">Olly</h1>
            </div>
            <div className="menu-icon p-2 flex space-x-4 items-center">
                <InboxIcon className="w-8 h-8"/>
                <HeartIcon className="w-8 h-8"/>
                <ShoppingBagIcon className="w-8 h-8"/>
                {/* <Icon list={list}/> */}
            </div>
            <div className="search w-9/12 h-6 p-1">
                <TextField className="bg-gray-100 border-transparent w-11/12" id="outlined-search" label="Search field" type="search" variant="outlined" />
                <button className="bg-red-100 w-auto p-4 "><SearchIcon className="w-6 h-6"/></button>
            </div>
        </div>
    )
}

export default nav
