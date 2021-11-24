import React, { useEffect, useState } from 'react'


export const Clicker = () => {

    const [clicks, setClicks] = useState(0)

    // let clicksDos = 0
    // console.log(clicksDos)

    const handleClick = () => {
        // clicksDos++
        setClicks( clicks + 1 )
    }

    useEffect(() => {
        console.log("Clicker actualizado")
    }, [clicks])

    useEffect(()=>{
        return () => {
            console.log("Clicker desmontado")
        }
    }, [])

    return (
        <div onClick={handleClick}>
            <h2>Clicks: {clicks}</h2>
        </div>
    )
}
