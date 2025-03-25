const store = require("./app/store")
const cakeActions = require("./feature/cake/cakeSlice").cakeActions

console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(()=>{
  console.log("Updated State",store.getState())
})

store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())
store.dispatch(cakeActions.order())

unsubscribe()