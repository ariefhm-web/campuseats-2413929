# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
   Imperative UI means you tell the browser each step: find an element, create nodes, set text, attach listeners. Declarative UI (React) means you describe what the screen should look like for the current data, and React updates the DOM to match.

2. Why must a component name start with a capital letter?
   JSX treats lowercase tags as HTML elements (`<header>`, `<div>`). A capitalised name (`<Header />`) tells React to use your function component instead of a built-in HTML tag.

3. What does a fragment `<>...</>` do, and why not just use a `<div>`?
   A fragment groups sibling elements under one parent without adding an extra node to the DOM. A `<div>` would also wrap them, but it creates a real element that can break layout (for example around `header` / `main` / `footer`).

4. Name one benefit of splitting the UI into small components.
   Each piece (Header, VendorCard, MenuItemCard, Footer) lives in its own file, so you can reuse it, test it, and change it without rewriting the whole page.
