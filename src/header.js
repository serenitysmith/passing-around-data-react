import React from "react"
// defines a funcctional componetn namd header 
export default function Header(props) {

  //  / The 'Header' component returns JSX, which is a syntax extension for JavaScript
    // JSX allows us to write HTML-like code in our JavaScript files
    // In this case, we're returning a <header> element with a <p> element inside it
    // The content of the <p> element is dynamic and will display the 'user' prop value passed to this component
    return (
// {/* Inside the <p> element, we use curly braces to include JavaScript expressions */}
//             {/* In this case, we use the 'props.user' expression to display the 'user' prop value */}
//             {/* The 'props.user' value is expected to be a string */}
        
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}







// import React from "react"

// export default function Header() {
    
//     /**
//      * Challenge:
//      * Raise state up a level and pass it down to both the
//      * Header and Body components through props.
//      */
//     const [user, setUser] = React.useState("Joe")
    
//     return (
//         <header>
//             <p>Current user: {user}</p>
//         </header>
//     )
// }
