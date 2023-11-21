import { createRoot } from 'react-dom/client';


document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const root = document.createElement('div')
        document.body.after(root)
        createRoot(root).render(<div/>)
    }
}