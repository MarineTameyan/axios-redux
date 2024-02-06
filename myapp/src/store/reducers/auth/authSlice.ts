// import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
// // import {IUserData} from "../../../models/user.model";
// import axios from "axios";
// // import {fetchProductDatta} from "./extra-actions";

// interface IAuthSlice {
//     userData: IUserData | null,
//     token: string,
//     permissions: [],
//     toDoList: [],
//     isLoading:boolean,
//     productList:[]
// }


// const initialState: IAuthSlice = {
//     userData: null,
//     token: '',
//     permissions: [],
//     toDoList: [],
//     isLoading:false,
//     productList:[]
// }


// // createAsyncThunk()
// // createAsyncThunk  funkcia vor@ argumentov stanum e 2 parametr
// //  1 parametr@ handusanum e anun tvyal funkciai hamar
// //  2 parametr@ hansianum e async funkcia vortex karox eqn kirarel kam fetch kam axios



// export const authSlice = createSlice({
//     initialState, // initialState: initialState,
//     name: 'AuthSlice',
//     reducers: {
//         setTokenData(state, action: PayloadAction<string>) {
//             state.token = action.payload
//         },
//         setUserData(state, action: PayloadAction<IUserData>) {
//             state.userData = action.payload
//         }


//     },
//     /**
//      * addCase() argumentov spasum e 2 parametr
//      * 1 parametr@ handisanum e
//      * createAsyncThunk -i mijocov stexcvac funkciai iravichakner@
//      * fetchProductDatta.pending
//      * fetchProductDatta.fulfilled
//      * fetchProductDatta.rejected
//      *
//      * 2 parametr@ handisanum e ayn funkcian vor@ petqe ashxati  trvac iravichaki proces@ katarvelu jamanak
//      *
//      *
//      *
//      *
//      * **/
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProductDatta.pending, (state) => {
//                 // state.status = "loading";
//                 state.isLoading = true
//                 console.log('loading')
//             })
//             .addCase(fetchProductDatta.fulfilled, (state, action) => {
//                 // state.status = "succeeded";
//                 // state.data = action.payload;
//                 console.log('succeeded')
//                 console.log(action.payload)
//                 state.productList = action.payload

//                 state.isLoading = false


//             })
//             .addCase(fetchProductDatta.rejected, (state, action) => {
//                 // state.status = "failed";
//                 // state.error = action.error.message;
//                 console.log('failed')
//             });
//     },

// })
// export const {setTokenData, setUserData} = authSlice.actions

// export default authSlice.reducer