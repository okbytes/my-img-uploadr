# Getting Started

Install the packages:

`npm install`

Start the dev server:

`npm run dev`

The dev server will be running on `localhost:3000`. Vite will let you know if the dev server is running on a different port.

# Architecture

Client with mock server.

# Unfinished Notes

The biggest missing piece here is a real API server where uploading images would properly persisted between sessions and actions. Persisted storage would make searching more realistic. I would ensure some kind of index for searches to match against. For now, there are fake responses and dirty object mutation to simulate persisted storage.

The same image(s) cannot be uploaded consecutively. This is a bug to be resolved, but given the scope, I left it alone as it's annoying but not destructive.

I would also like to add basic/more error handling. There are a lot of failure states with a multiple file upload. Wrong files chosen, partial file upload failures, and partial file saving failures are what stick out to me as obvious error scenarios. I suspect there are more subtle error states as well. I would also like to add error messaging in the UI for these scenarios as well as actions the user can take (like re-uploading failed images).

Proper UX transitions between various states would be an enhancement but worthwhile even in a simplistic form. There are a lot of potential loading and transitional states to manage. I'd like to better choreograph those transitions more intentionally for better understanding by the user of what's going on. As a stop gap, I added some simple loading indicators. The search and upload controls would benefit from loading indicators on them directly. Spinners on the controls as their actions execute help reinforce user actions that are in-flight.
