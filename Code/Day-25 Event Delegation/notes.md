## Event Delegation

- Event delegation is a javascript technique where you attach a single event listeners to a parent element to handle evnets for mutiple child events, instead of adding individual to each child.

### Working.

- Uses evenet bubbling - events bubble up from child to parent elements.
- The parent listener checks the event.target to determone which child was actually clicked.
- Handles evenets for a current children AND future children added dynamically.


e.stopPropogation():
- Stop event bubbling to parent/child parents.
- Other event Listeners on the same element still execute.

e.stopImmediatePropagation():

- Stop event bubbling to parent/child parents.
- Also prevents any remaining event listeners on the same element from running.

In short:
- is more aggrssive - it stops everything, only stops bubbling but allows other listeners