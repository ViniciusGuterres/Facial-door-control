import React from "react";

// hero icons
import { BeakerIcon } from '@heroicons/react/solid'


function Layout() {

    return (
        <Header></Header>
    )
}

function Header() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div class="flex items-center flex-shrink-0 mr-6 text-white">
                <BeakerIcon className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">
                    Facil door control
                </span>
            </div>

            <div>item 2</div>
        </nav>
    )
}

export default Layout