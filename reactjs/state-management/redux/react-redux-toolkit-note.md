# React toolkit

Redux Toolkit includes these APIs:

`configureStore()`: wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

`createReducer()`: that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

`createAction()`: generates an action creator function for the given action type string.

`createSlice()`: accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.

`createAsyncThunk`: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

`createEntityAdapter`: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.

```sh
npm i @reduxjs/toolkit react-redux
```

Redux toolkit is makes simplies redux. In the past redux was used hand in hand woth react but time other state management libraries came and made it easier to manage state.

Redux toolkit makes it easy to setup and managet redux state.

Redux helps us to create a global state that we can use in our app, this is called a store. Redux was originally designed to store only a single store, with newer versions you are allowed to customize your context and provide multiple stores if your want.

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
      state.loading = "succeeded";
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

## RTK Query

RTK Query is provided as an optional addon within the @reduxjs/toolkit package. It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer for your app. It is intended to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

RTK Query includes these APIs:

`createApi()`: The core of RTK Query's functionality. It allows you to define a set of endpoints and describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
`fetchBaseQuery()`: A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.
`<ApiProvider />`: Can be used as a Provider if you do not already have a Redux store.
setupListeners(): A utility used to enable refetchOnMount and refetchOnReconnect behaviors.

### Example

Create an api slice.

src/services/jsonPlaceholderApi.ts

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface post {
  userId: number,
  id:  number,
  title: string,
  body: string
}

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonPlaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    // Query to fetch data
    getPosts: builder.query({ query: () => "posts"}), // baseUrl/post
      // Assuming you want to pass in params
      // getPostsById: builder.query({ query: (id) => `post/${id}`})
      
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost
      })
    })
  })
})

export const { useGetPostsQuery, useCreatePostMutation} = jsonPlaceholderApi
```

OR (an example containing various queries and mutation function)

```ts
// service/jsonPlaceholderApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Posts'], // Define a tag type for posts

  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }], // Invalidate the list to refetch
    }),
    updatePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }], // Invalidate specific post and potentially the list
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }, { type: 'Posts', id: 'LIST' }], // Invalidate specific post and the list
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = jsonPlaceholderApi;
```

**Create a store**:

/src/store.js

```js
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi"

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware)
})

setupListeners(store.dispatch)
```

Adding the api middleware enables caching, invalidation, polling, and other useful features of RTK Query.

```ts
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
```

Optional, but required for refetchOnFocus/refetchOnReconnect behaviors. It takes an optional callback as the 2nd arg for customization.

```ts
setupListeners(store.dispatch);
```

/src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from "./store.ts"
import { Provider } from "react-redux"
// if don't want to use store, you can use the Api provider from RTK Query
// import { ApiProvider } from "@reduxjs/toolkit/query/react"
// import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
       <App />
      </Provider>
  {
    // we can use the store for the api if we want, but you can dedicate it for only client state
    // The only problem with using ApiProviders is when you need server multiple stores
    //<ApiProvider api={jsonPlaceholderApi}>
    // <App/>
    // </ApiProvider>
  }
  </StrictMode>
)
```

/App.tsx

```tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCreatePostMutation, useGetPostsQuery } from "./services/jsonPlaceholderApi"

function App() {
  const [newPost, setNewPost] = useState({title:"", body: "", id: 9999})
  const {data, error, isLoading} = useGetPostsQuery()
  const [
    createPost, 
    {isLoading: isCreating, 
     error: createError
    }] = useCreatePostMutation()
  
  const handleCreatePost = async() => {
    await createPost(newPost)
  }
  
  if(isLoading) return <p> Loading... </p>
  
  if(error) return <p>Error fetching data :(</p>
  
  if(createError) return <p>There was an error creating a post</p>
  
  console.log(data)
  return (
    <>
      <h1>Posts</h1>
      <div>
        <input type="text" placeholder="Title..." 
        onChange={(e) => setNewPost((prev) => ({...prev, title: e.target.value}))}/>
        <input type="text" placeholder="Body..." 
        onChange={(e) => setNewPost((prev) => ({...prev, text: e.target.value}))}/> 
        <button onClick={() => handleCreatePost()} disabled={isCreating}> Create Post </button>
      </div>
      <div>
        {
        data?.map((post) => (
          <p> {post.title}</p>
        ))
        }
      </div>
    </>
  )
}

export default App
```

### Caching

Data is cached according to each endpoint definition.
Data is cached as long as one component in your application is subscribed to that data. If the component is unmounted, that data wont be cached any more.

If no components are subscribed to a specific query, the cache will expire after (default: 60 secs).

Applicable to all endpoint.

```js
export const jsonPlaceholderApi = createApi({
  keepUnsedDataFor: 20, // 20 secs
})
```

We can also specify for each endpoints.

```js
export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonPlaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ 
      query: () => "posts",
      keepUnsedDataFor: 10})
})
```

### Refetching

You can manually refetch data.

```js
const  { data, error, isLoading, refetch } = useGetPostsQuery()

Refetch the data after creating a post.

const handleCreatePost = async () => {
  await createPost(newPost);
  refectch()
}
```

#### Refetch when user switch tabs

```js
export const jsonPlaceholderApi = createApi({
  refetchOnFocus: true,
})
```