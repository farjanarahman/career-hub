import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h1>Blogs</h1>
            <div className='blog'>
            <h3>When should you use context API?</h3>
            <p>We use the Context API in React when we have data that needs to be accessed by multiple components, to avoid prop-drilling, update data in the global state, and pass down state to components that are not directly connected. However, we use it judiciously to avoid performance issues and maintain code readability.</p>
            </div>
            <div className='blog'>
                <h3>What is a custom hook?</h3>
                <p>A custom hook in React is a reusable function that contains logic and state, allowing you to abstract away complex or repetitive code into a single, reusable function. It's called using the "use" prefix and can use built-in hooks like useState and useEffect to manage state and other React features. Custom hooks enable you to encapsulate common behavior and share it across multiple components, making your code more modular and easier to maintain.</p>
                <p>Some examples of custom hook are: useLocalStorage, useDebounce, useEventListener, useFetch
                </p>
            </div>
            <div className='blog'>
                <h3>What is useRef?</h3>
                <p>In React, useRef is a hook that returns a mutable ref object which can be used to store a value and persist it across renders. useRef is particularly useful for accessing and manipulating the DOM, as well as for managing the lifecycle of components and third-party libraries. It can also be used in combination with other hooks like useEffect and useState to create more complex functionality in React.</p>
            </div>
            <div className='blog'>
                <h3>What is useMemo?</h3>
                <p>In React, useMemo is a hook that memoizes the results of a function call so that the function is only called when necessary. It takes two arguments: a function to be memoized and an array of dependencies. The memoized function is only re-evaluated when one of the dependencies changes. This can help optimize performance by reducing unnecessary function calls.</p>
            </div>
        </div>
    );
};

export default Blog;