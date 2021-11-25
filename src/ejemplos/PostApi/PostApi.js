import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

export const PostApi = () => {

    const [id, setId] = useState(1)

    const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id, [id])

    // const valor = useMemo(() => {
    //     return unaFuncionPesada()
    // }, [post])

    // const unaFuncion = useCallback(() => {
    //     console.log("Hola mundo")
    // }, [])   


    return (
        <div className="container">
            <button onClick={() => setId(id + 1)}>+1</button>
            { data 
                ?  
                    <>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                        {/* <UnComponente fn={unaFuncion}/> */}
                    </>
                : <h2>Cargando...</h2>
            }
        </div>
    )
}
