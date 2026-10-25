# AI usage log

## Week 1- Tool(s):None 
What I asked for:- 
What I kept, changed or rejected, and why:-
One thing the AI got wrong and how I fixed it:


## Week 2- Tool(s):Cursor 
What I asked for: Identified the error becuase of why it show blank pages
What I kept, changed or rejected, and why: I Change the Header.jsx file where forgot put {} on cartCount
One thing the AI got wrong and how I fixed it: none


## Week 3- Tool(s): Cline (AI coding agent)
What I asked for: Compare the Part B lab sheet (W03_Lab_Sheet.json) against the repo and fix the gaps so B1-B5 match and B6/B7 are complete.
What I kept, changed or rejected, and why: Kept the existing B1-B5 implementation (vendors.json API, fetch with AbortController + retry, lifted cart, cart page, validated checkout) as-is since it matched the lab sheet. Changed App.jsx: added eslint-disable comments around the loading/error reset in useEffect (required by the lab pattern but flagged by react-hooks/set-state-in-effect), and added a `viewed` state with handleViewItem for the personal feature. Rejected storing full item objects in `viewed`; kept item ids only and resolve names at render time to keep state small.
One thing the AI got wrong and how I fixed it: Initially wired the "View" button to reuse the global `.link` class, which is white-on-white inside cards; fixed it with a dedicated `.view-link` style scoped to the menu/card context.
