import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemLists: [],
        showCart: false,
        cartQuentity: 0
    },
    reducers: {
        addCart: (state, action) => {
            const newItem = action.payload;
            const excitingItem = state.itemLists.find(e => {
                return e.id == newItem.id
            })
            if (excitingItem == undefined) {
                state.itemLists.push({
                    name: newItem.name,
                    id: newItem.id,
                    price: newItem.price,
                    quentity: 1,
                    total_price: newItem.price
                })
                state.cartQuentity++
            } else {
                excitingItem.quentity++;
                excitingItem.total_price += newItem.price
            }

        },
        showCart: (state, action) => {
            state.showCart = !state.showCart
        },
        deleteCart: (state, action) => {
            const deleItem = action.payload
            const excitingItem = state.itemLists.find(e => {
                return e.id == deleItem.id
            })
            if (excitingItem.quentity == 1) {
                state.itemLists = state.itemLists.filter(e => {
                    return e.id !== deleItem.id
                })
                state.cartQuentity--
            } else {
                excitingItem.quentity--;
                excitingItem.total_price -= excitingItem.price
            }
        }


    }
})

export default cartSlice.reducer

export const { addCart, showCart, deleteCart } = cartSlice.actions