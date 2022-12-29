import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPhoto } from "../api/getPhoto";
import { NormalizeObj } from "../utils/NormalizeObj";

const initialState = {
    photoListRedux: [],
    error: false,
};

export const getList = createAsyncThunk('photo/getList', async(page) => {
    const respose = await getPhoto(page);
    return respose;
});

export const PhotoReducer = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getList.fulfilled, (state, action) => {
            const respose = NormalizeObj(action.payload);
            const filteredList = respose.filter(photo => {
                const idPhoto = state.photoListRedux.map(photoItem => photoItem.id);
                return !idPhoto.includes(photo.id)
            })
            state.photoListRedux.push(...filteredList);
            state.error = false;
        })
        builder.addCase(getList.rejected, (state) => {
            state.error = true
        })
    }
});

export default PhotoReducer.reducer;