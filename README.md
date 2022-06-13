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
