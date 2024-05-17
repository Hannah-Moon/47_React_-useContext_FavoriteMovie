# React `useConext` hook: Favorite Movie 🎬

- This project is a simple movie search app that can store favorite movies built with React useContext.
- If users like the movie, they can store it by clicking the favorite movie icon in their folder.

<img alt='screen capture' src="/assets/favoriteMovie.gif"></div>

## 🔑 Key features

- Display movie posts
- Search for movies
- Implement functional and responsive buttons and movie hover-over effects
- Save favorite movies
- Remove from favorite movies

## 🎯 Objectives

- Avoid prop drilling through the use of React context.
- Use `createContext` to define and export new context for an application.
- Use the `useContext` hook to read from context within descendant components.
- Use the `Context.Provider` component to provide context from a parent component.
- Integrate context with state to allow for interactive context values.

## 🛠️ Key technique

In order to use `useContext`,

- Create and export the context using the syntax `export const SomeContext = createContext(defaultValue)`.
- Read the value of the context using the syntax `useContext(SomeContext)`, which can be done from any child component, no matter how deep.
- Wrap the child components within a context provider and provide a value using the syntax `<SomeContext.Provider value={someValue}>` from within the parent component that sets the context value.
  Here is an example:

```
PROVIDER COMPONENT
1. Import {createContext} from ‘react’;
2. Export const MyContext = createContext();
3. <MyContext.Provider value={value}>
	<Child />
	<MyContext.Provider>

CONSUMER COMPONENTS
1. Import React, { UseContext } from ‘react’;
	import {MyContext } from ‘./ComponentA’;
2. Const value = useContext(MyContext);
```

## 📝 Prep. steps

```
npx create-react-app favorite-movie
npm install axios
npm install -D tailwindcss
npx tailwindcss init
npm i react-router-dom
```

## 🔗 API

- I used OMDB API: http://www.omdbapi.com/
