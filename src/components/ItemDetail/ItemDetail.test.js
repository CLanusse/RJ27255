import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { ItemDetail } from './ItemDetail'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { CartContext } from '../../context/CartContext'


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

test('Debe renderizarse correctamente', () => {

    const isInCart = jest.fn()

    const component = render( 
        <Provider store={store}>
            <CartContext.Provider value={{isInCart}}>
                <MemoryRouter>
                    <ItemDetail item={mockItem} />
                </MemoryRouter>
            </CartContext.Provider>
        </Provider>
    )

    expect(isInCart).toHaveBeenCalled()
    expect(isInCart).toHaveBeenCalledTimes(1)

    const btnSumar = component.getByText('+')

    fireEvent.click(btnSumar)
    fireEvent.click(btnSumar)
    fireEvent.click(btnSumar)

    component.getByText('3')
})
