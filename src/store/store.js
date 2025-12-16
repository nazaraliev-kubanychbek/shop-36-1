import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import axios from 'axios';


export const categoryStore = create(devtools(immer(set =>{
    return {
        categories: [],
        getCategories: () =>{
            axios('https://fakestoreapi.com/products/categories')
            .then(({data})=>{
                set((store)=>{
                    store.categories = data
                })
            })
        }
    }
})));

