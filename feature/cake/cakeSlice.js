const createSlice = require("@reduxjs/toolkit").createSlice
const initialState = {
  noOfCakes : 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers:{
    order: (state) => {
      state.noOfCakes -= 1
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions


