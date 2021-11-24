import React from 'react'

export const Container = ( {children} ) => {

    return (
        <section>
            <h2>Componente contenedor</h2>
            <hr/>
            {children}
        </section>
    )
}
