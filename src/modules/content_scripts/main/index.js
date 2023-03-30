import { createRoot } from 'react-dom/client';
import App from './app'


document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const root = document.createElement('div')
        document.body.after(root)
        createRoot(root).render(<App/>)
    }
}