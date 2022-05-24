import { createSlice } from '@reduxjs/toolkit';

export interface User {
    name: string;
    login: string;
    avatar_url?: string;
    html_url?: string;
}

const initialState: User = {
    name: '',
    login: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state) {
            state.name = 'Igor';
            state.login = 'garik9621';
        }
    }
});


export const { setUser } = userSlice.actions  


export default userSlice.reducer;