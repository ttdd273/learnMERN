# Learn MERN Stack

- MERN stands for MongoDB, Express, React, and Node
- React will serve as the client side of the application, and provides all the visual aspects of the application
- Node and Express will power the server side of the application, such as changing the database
- We will be making APIs with Node and Express, which is how React will communicate with each other
- MongoDB will serve as our database, and a cloud service called Atlas
  - It is a NoSQL database that doesn't have relations
- Analogous to a restaurant: customers (React), the servers (Express and Node), and the chef (database).

# Creating Shopify Page

- You want to create a client folder that represents the frontend part of the application
- **Normalized.css** can be helpful for saving time on setup
  - It is a small CSS file that provides cross-browser consistency in the default styling of HTML elements
  - Just replace whatever is in `index.css` with normalized css

## Creating landing page

- For a browser with multiple pages, you want to set up a pages directory that will contain multiple pages
- You can use an extension called `ES7 React/Redux... snippets` that will easily create styled components
- You can type `rfce` to create a React functional component
- Or `rafc` to create an arrow function
- You might want to use an arrow function over a regular functional component because it creates a new function each time the component renders.
- You can also use styled components to make it faster to write styled HTML elements
  - It also creates unique classNames so you don't need to worry about changing the names of the elements
  - You can even wrap React elements into the styled components
  - Syntax is `styled.name"styles"`, and the quotes should be `.
- Outside of the return, you can also call a `Wrapper` component and you can target the elements within that element as well
- You can make a responsive display with `@media` annotation
  - Ex: For displaying an image, use `min-width` attribute and set the display
- Wrapper is only used for styling
- Something that might happen is you have a lot of components that you need to export out of the components folder. Therefore, something that you can do is to add `index.js` into the components and have all the imports there, then what you can do is just to `import {Element} from "../components"` and that will bring everything in
- You can also do it for pages

## Setting Up React Router

- React Router is arguably the most used solution when it comes to single page applications
- Want to import four different components, the usual four
- Connect to browser's URL with BrowserRoute, and Routes instead of Switch
- You usually set them up in `App.js`
- Route refers to the page, and it has an element attribute where you can just put the element directly into it
- If it's an error page, you can use a wild character \* to capture all other URLs
- The `Link` component can be used instead of a button, and you just need to keep the `classNames` the same and everything should work normally
-
