# EVENT

Action performed by the user on browser.

## Event onject
- It is created by the browser which holds.
    - Types of events
    - on which element the event occured.

## Event Listeners

Event Listeners are function that wait for a specific event to occur.

- When we done any action on browser then the browser make a event object which holds the type of object and element of details.


// this is the event listener.
```js
function haldle click(e){ // e stores the action data from html
  const body = document.body;
  body.style.background = "black";
}
```

- Action performed ---> Event object --->  Event Listener ---> Action - 2
