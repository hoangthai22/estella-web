import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import HomePage from "./pages/HomePage";

// Tạo component App
function App() {
    return (
        <div>
            <HomePage />
        </div>
    );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
