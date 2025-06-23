# React toolkit

```sh
npm i @reduxjs/toolkit react-redux
```

Redux toolkit is makes simplies redux. In the past redux was used hand in hand woth react but time other state management libraries came and made it easier to manage state.

Redux toolkit makes it easy to setup and managet redux state.

Redux helps us to create a global state that we can use in our app, this is called a store. Redux was originally designed to store only a single store, with newer versions you are allowed to customize your context and provode multiple stores if your want.

In src folder, create a file called store.js

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

A reducer defines how a function should change in response to an action, A reducer as a function takes in a `state` and an `action`.
The state should be current state of the app, then the action describes what happens in your application.
We
To handle different state of the app, most especially when our app is huge, we wouldn't want to put it directly within the reducer. Instead of creating functions directly within the reducer, redux toolkit allows us to create a slice.

A slice is a reducer logic for maintaining different o parts of your state.

## Simple Movie App

/src/movieSlice.js

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  movieList: [
    {id: "1", name: "Interstellar"},
    {id: "2", name: "Harry Potter"},
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: nanoid(),
        name: action.payload
      }

      state.movieList.push(newMovie)
    },

    deleteMovie: (state, action) => {
      state.movieList = state.movieList.filter((movie) => movie.id != action.payload)
    },
  },
});

export const { addMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
```

The  update src/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer
  },
});
```

To be able to use the redux state, we must wrap our app with a `{ Provider }` for "react-redux".

index.tsx

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux"
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
```

src/App.tsx

```tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieList } from './components/MovieList'
import MovieInput from './components/MovieInput'

function App() {

  return (
    <>
      <div>
        <MovieInput/>
        <MovieList/>
      </div>
    </>
  )
}

export default Apps
```

> Use the useSelector hook to get data from your redux state

src/components/MovieList.tsx

```tsx
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteMovie } from "../movieSlice"

export const MovieList = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movieList)

  const handleDeleteMovie = (id: number) => {
    dispatch(deleteMovie(id))
  }

  return (
  <div className="text-white">

    <h1>Movie List</h1>

    { movies.map((movie, index) => (
      <div key={movie + index} className="text-white">
        {movie.id} {movie.name}
        <button onClick={() => handleDeleteMovie(movie.id)} className="bg-red-500">Delete</button>
      </div>
    ))}
  </div>
  )
}
```

src/components/MovieInput.tsx

```tsx
import React, { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux"

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("")
  const dispatch = useDispatch()

  const handleAddMovie = () => {
    if(newMovie) {
      dispatch(addMovie(newMovie))
      setNewMovie("")
    }
  }

  return (<>
    <input value={newMovie} onChange={(e) => setNewMovie(e.target.value)}/>
    <button onClick={() => handleAddMovie()}> Add Movie </button>
  </>)
}

export default MovieInput
```

## Counter Slice Example

src/store.js

```js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter"

export const store = configureStore({
  reducer: {
    counter: 
  }
})
```

src/features/counter/counterSlice.js

```js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {

    }
  }
})

export const { increment, decrement} counterSlice.actions
export default counterSlice.reducer
```

> Redux Toolkit uses immerjs which prevents data mutation under the hood, so you allowed to mutate data within the createSlice method only.

## Generating random id with reduxjs/toolkit

```js
import { nanoid } from "@reduxjs/toolkit"
```

## Asychronus data fetching with createAsyncThunk

store.js

```ts
import { configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "./features/posts/postSlice"

const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store
```

/src/features/posts/postSlice

```tsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface Post {
  id: number;
  title: string;
}

interface PostState {
  posts: Post[],
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null
}

const initialState: PostState = {
  posts: [],
  loading: "idle",
  error: null
}

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts", // action type prefix
  async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=5")
    
    if (!response.ok) {
      throw new Error("Failed to fetch posts")
    }

    const data: Post[] = await response.json()
    return data
  }
)

const postSlice = createSlice({
  name: "posts",
  initalState,
  reducers: {
    // Async function are handled by extraReducers
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = "pending"
      state.error = null
    },
    [fetchPosts.fulfilled]: (state, action: PayloadAction<Post[]>) => {
      state.loading = "succeded";
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state) => {
      state.loading = false
      state.error = action.error.message || "something went wrong"
    },
  }
})

export default postsSlice.reducer
```

