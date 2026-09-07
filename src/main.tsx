import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// The static HTML is generated for crawlers and fast first paint. Some of the
// interactive UI libraries do not produce deterministic hydration attributes,
// so mount a clean client tree after the prerendered document has been parsed.
if (root.hasChildNodes()) root.replaceChildren();
createRoot(root).render(<App />);
