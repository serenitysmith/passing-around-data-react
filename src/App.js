import React from "react"
import Header from './header'
import Body from './body'
import './App.css'

export default function App() {
  // Lift the state up to the parent component
  const [user, setUser] = React.useState("Joe");

  return (
    <div>
      <Header user={user} /> {/* Pass the user state to the Header component */}
      <Body user={user} />   {/* Pass the user state to the Body component */}
    </div>
  );
}






// const [user, setUser] = React.useState("Joe"): This line declares a state variable named user using the useState hook from React. The useState hook is used to add state management to functional components. In this case, the initial value of the user state is set to "Joe", and setUser is a function that can be used to update the user state.

// Currently, the user state is managed within the Header component. However, it might be more efficient and maintainable to lift the state up to a common parent component and then pass it down to both the Header and Body components through props. By doing this, both components will be able to access and update the shared state.

// For example, let's say there is a parent component called App that renders both the Header and Body components. In App, you would define the user state and then pass it down to the Header and Body components as follows:





// origianl code before challenge was in header
// import React from "react"

// export default function Header() {
    
//     /**
//      * Challenge:
//      * Raise state up a level and pass it down to both the
//      * Header and Body components through props.
//      */
//     const [user, setUser] = React.useState("Joe")
    
//     return (
  // return ( ... ): This is the JSX code that will be rendered when the Header component is used in the application.


//   <header> ... </header>: This represents the HTML <header> element, which typically contains introductory content, navigation links, logos, etc.

// <p>Current user: {user}</p>: This is a paragraph element that displays the current value of the user state using curly braces {} to access the user variable within the JSX code. As the user state changes, this value will be updated dynamically in the UI.

//         <header>
//             <p>Current user: {user}</p>
//         </header>
//     )
// }




/**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */


// This is a simple React functional component called Header. It represents a header section in a web application or website. Let's break down the code with some notes:

// import React from "react": This line imports the necessary React library, which is required to define and use React components.

// export default function Header() { ... }: This line defines the Header functional component and exports it as the default export, allowing other parts of the application to import and use it.

// const [user, setUser] = React.useState("Joe"): This line declares a state variable named user using the useState hook from React. The useState hook is used to add state management to functional components. In this case, the initial value of the user state is set to "Joe", and setUser is a function that can be used to update the user state.

// return ( ... ): This is the JSX code that will be rendered when the Header component is used in the application.

// <header> ... </header>: This represents the HTML <header> element, which typically contains introductory content, navigation links, logos, etc.

// <p>Current user: {user}</p>: This is a paragraph element that displays the current value of the user state using curly braces {} to access the user variable within the JSX code. As the user state changes, this value will be updated dynamically in the UI.

// Now, let's address the challenge mentioned in the code:

// Challenge:
// Raise state up a level and pass it down to both the Header and Body components through props.

// Explanation:
// Currently, the user state is managed within the Header component. However, it might be more efficient and maintainable to lift the state up to a common parent component and then pass it down to both the Header and Body components through props. By doing this, both components will be able to access and update the shared state.

// For example, let's say there is a parent component called App that renders both the Header and Body components. In App, you would define the user state and then pass it down to the Header and Body components as follows: