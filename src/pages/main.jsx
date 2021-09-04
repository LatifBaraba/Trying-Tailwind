import React from 'react'
import Nav from '../components/main/nav'

const main = () => {

    document.title = "new title"

    return (
        <>
            <div className="container mx-auto bg-gray-200 p-4 m-4 rounded-2xl">
                <h1 className="text-black">Botip</h1>
                <Nav/>
                {/* <Menu/> */}
            </div>
        </>
    )
}

export default main
