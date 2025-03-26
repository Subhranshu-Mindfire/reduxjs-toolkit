const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  noOfIcecream: 10
}

const icecreamSlice = createSlice(
  {
    name: "icecream",
    initialState,
    reducers:{
      order: (state)=>{
        state.noOfIcecream -= 1
      }
    }
  }
)

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions