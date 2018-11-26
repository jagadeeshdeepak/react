What is react?
A JS framework to build better UIs

Why React?
Declarative
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.

Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
React can also render on the server using Node and power mobile apps using React Native.


**Understanding a Single page and multi page application**

Single page application -
Gets back only one html from the server. 
Only one html, content is [re]rendered on client. 
Everything is managed by javascript, no need to go back to the server and reload.
Single page will/can have multiple components tied to one root component. 
One ReactDOM.render() call.

Multi page application - 
Gets back multiple pages from the server. 
Content is rendered on the server. 
The entire page is not under react. we can dump in some widgets in the normal html file and things are managed by the react. 
The individual widgets do not know about each other. 
Multiple ReactDOM.react() call.

