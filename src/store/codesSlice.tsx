import { createSlice } from '@reduxjs/toolkit'
import { ICode } from '../services/interface'

const data = async () => {
  try {
    const response = await fetch('http://localhost:8000/codeblocks', {
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
