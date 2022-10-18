
import { reducer } from './redurcers'
import { number_add2} from './actions/number'

const initalState = {
    cart: [],
    products: [],
    user: null,

    number: 0
}


export {
    reducer,
    initalState,

}