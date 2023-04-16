import { createSlice } from '@reduxjs/toolkit'
import { ICode } from '../../services/interface'

const data = async () => {
  try {
    const response = await fetch('https://sharecode-server.onrender.com/codeblocks', {
      method: 'GET',
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log()
  }
}
const codes: ICode[] = await data()

export const codesSlice = createSlice({
  name: 'codes',
  initialState: {
    value: codes,
  },
  reducers: {},
})

export const {} = codesSlice.actions
export default codesSlice.reducer
