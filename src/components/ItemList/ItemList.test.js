import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { ItemList } from './ItemList'
import { stock } from '../../data/stock'
import { MemoryRouter } from 'react-router'




test('debe renderizarse correctamente', () => {

    const component = render( 
        <MemoryRouter>
            <ItemList items={stock}/> 
        </MemoryRouter>
    )

    // component.getByText('Productos')
   
    expect(component.container).toHaveTextContent('Productos')
    expect(component.container).not.toHaveTextContent('No se encontraron productos')

    const items = component.container.querySelectorAll('div.col-3.m-1')

    expect(items.length).toBe(stock.length)
})


test('no deben renderizarse items', () => {

    const component = render( <ItemList /> )

    expect(component.container).toHaveTextContent('No se encontraron productos')
    expect(component.container).not.toHaveTextContent('Productos')

    const items = component.container.querySelectorAll('div.col-3.m-1')

    expect(items.length).toBe(0)
})