import { RouterProvider } from 'react-router-dom';
import router from "./router";
import "../app/globals.css"

function App() {
    return (
        <div className="block relative">
            <RouterProvider
                router={router}
            />
        </div>
    );
}

export default App;
