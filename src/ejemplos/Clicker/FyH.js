import React, { useEffect, useState } from 'react'

export const FyH = () => {

    const [date, setDate] = useState(new Date())

    
    useEffect(() => {
        console.log("FyH montado")
        const timer = setInterval(() => {
                            setDate( new Date() )
                        }, 1000)

        return () => {
            console.log("FyH desmontado")
            clearInterval(timer)
        }

    }, [])

    return (<p>FyH: {date.toLocaleString()}</p>)
}
