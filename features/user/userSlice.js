import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

// const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.data.map((user) => user.id));
// });

const fetchUsers = createAsyncThunk("user/fetchUsers", async (_, thunkAPI) => {
  try {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const res = await axios.get("https://dummyjson.com/users");

    // return res.data.map((user) => user.id);
    return res.data.users.map((user) => user.id);
  } catch (err) {
    console.log("AXIOS ERROR:", err.message);
    console.log("CODE:", err.code);
    return thunkAPI.rejectWithValue(err.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload || action.error.message;
    });
  },
});

export default userSlice.reducer;

const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };
