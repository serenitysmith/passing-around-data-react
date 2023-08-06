import React from "react"
//Define a functional component named 'Body' which takes 'props' as its parameter
export default function Body(props) {
    // The 'Body' component returns JSX, which is a syntax extension for JavaScript
    // JSX allows us to write HTML-like code in our JavaScript files
    // In this case, we're returning a <section> element with an <h1> element inside it
    // The content of the <h1> element is dynamic and will display the 'user' prop value passed to this component
    return (

        // {/* Inside the <h1> element, we use curly braces to include JavaScript expressions */}
        //     {/* In this case, we use the 'props.user' expression to display the 'user' prop value */}
        //     {/* The 'props.user' value is expected to be a string */}
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}
