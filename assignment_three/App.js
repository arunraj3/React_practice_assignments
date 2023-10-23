import React from "react"
import ReactDOM from "react-dom/client"
import HeaderComponent from "./HeaderComponent.js"

const App = () => {
    return(
        <>
        <HeaderComponent/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)


