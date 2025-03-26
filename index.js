const store = require("./app/store")
const cakeActions = require("./feature/cake/cakeSlice").cakeActions
const icecreamActions = require("./feature/icecream/icecreamSlice").icecreamActions

console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(()=>{
  console.log("Updated State",store.getState())
})

store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(icecreamActions.order())
store.dispatch(icecreamActions.order())

unsubscribe()