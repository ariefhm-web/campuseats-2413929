# AI usage log

## Week 1

- Tool(s): Cursor (Grok)
- What I asked for: Help set up CampusEats from the Week 1 GitHub setup PDF and Lab 1 sheet (static UI components, CSS, Git, AI log, reflection).
- What I kept, changed or rejected, and why: Kept the four required components, class names, ternary Open/Closed and Sold out logic, `toFixed(2)`, and App composition. Used a Mahallah Uthman stall and menu instead of generic examples. Also kept the optional Week 2 preview: `MenuItemCard` accepts props so App can show three items. I wrote my own starter CSS because `campuseats-starter.css` from iTa’LeeM was not in the project folder.
- One thing the AI got wrong and how I fixed it: The lab wants an item object inside `MenuItemCard`. Props-only would skip that, so the component still builds a local `item` object and uses fallback values if props are missing.
