# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
   Imperative UI means you tell the browser each step while Declarative UI (React) means you describe what the screen should look like for the current data.

2. Why must a component name start with a capital letter?
   The JSX compiler can tell difference between custom Reacts components and built-in HTML tags

3. What does a fragment `<>...</>` do, and why not just use a `<div>`?
   A fragment groups sibling elements under one parent without adding an extra node to the DOM. While using a <div> also groups elements, it inserts a physical <div> element into the rendered HTML page, which can cause layout and performance issues.

4. Name one benefit of splitting the UI into small components.
   Benefit of splitting the UI into small components is high reusability, which allows you to use the same building blocks such as buttons, input fields, or cards across different parts of an application without writing duplicate code.