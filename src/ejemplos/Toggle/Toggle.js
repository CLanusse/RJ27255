import React, { createContext, useContext, useState } from 'react'

const ToggleContext = createContext()

const useToggle = () => {
    const context = useContext(ToggleContext)

    if (!context) {
        throw new Error('useToggle debe ser usado dentro de un <Toggle/>')
    }

    return context
}

export const ToggleOn = ({children}) => {
    const {on} = useToggle()
    return  on ? children : null 
}

export const ToggleOff = ({children}) => {
    const {on} = useToggle()
    return  on ? null : children 
}

export const ToggleButton = () => {
    const {on, toggle} = useToggle()
    return <button onClick={toggle}>Toggle</button>
}

export const Toggle = ( {children} ) => {
    const [on, setOn] = useState(false)
    const toggle = () => setOn(!on)

    return <ToggleContext.Provider value={{on, toggle}}>
        {children}
    </ToggleContext.Provider>
}
