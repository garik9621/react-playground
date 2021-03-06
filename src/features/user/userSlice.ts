import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface User {
    isLoaded: boolean,
    name: string;
    login: string;
    avatar_url?: string;
    html_url?: string;
}

const initialState: User = {
    isLoaded: false,
    name: '',
    login: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // reducer example
        // setUser(state) {
        //     state.name = 'Igor';
        //     state.login = 'garik9621';
        // }
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            return {...action.payload, isLoaded: true};
        })
    }
});

// example reducer export
// export const { setUser } = userSlice.actions  


export default userSlice.reducer;

export const selectUser = (state: any): User => state.user;

export const fetchUser = createAsyncThunk<User, string>('user/fetchUser', async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const resonseJson = response.json();

    return resonseJson;
});