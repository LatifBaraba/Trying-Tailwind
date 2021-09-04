import React from 'react'
import Nav from '../components/main/nav'

const main = () => {

    document.title = "Trying Tailwind"

    return (
        <>
            <div className="container mx-auto bg-white p-4 m-4 rounded-2xl">
                <Nav/>
                {/* <Menu/> */}
            </div>
        </>
    )
}

export default main
