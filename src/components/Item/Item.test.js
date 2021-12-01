import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Item } from './Item'
import { MemoryRouter } from 'react-router'



test('debe mostrar los detalles del producto', () => {

    const mockItem = {
        id: 1,
        nombre: 'Producto 1',
        precio: 1500,
        img: 'https://via.placeholder.com/200',
        desc: 'Lorem ipsum',
        category: 'remeras',
        stock: 20,
        oferta: false
    }

    const component = render( 
        <MemoryRouter>
            <Item item={mockItem}/> 
        </MemoryRouter>
    )

    component.getByText(mockItem.nombre)
    component.getByText(mockItem.desc)
    component.getByText(`Precio: $${mockItem.precio}`)
    component.getByText(`Categoría: ${mockItem.category}`)

    const img = component.container.querySelector('img')

    expect(img.src).toBe(mockItem.img)

})
