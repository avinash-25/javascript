#### 1. getElementByClassName



##### const arr = document.getElementsByClassName("card");

- This line return the impure array.
- It stores all element to the 'cards' variable.

##### const arr = Array.from(document.getElementsByClassName("card"));


- By the help of Array.from we can convert the all element in the array.
- Now we can treat as a array and apply enbuilt array method


### Interview Questions.

1. Difference between HTML collection and HTMl list.

An HTML collection is a live, array-like object that contains a collection of HTML elements

ex : `( <div>, <p>. <a> )`

The key characterestics is that it is live, meaning it automatically updates itselt to refelect changes in the dom.

- How You gey it L Using older DOM methods like:
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    - element.children

2. Nodelist
A NodeList is a static(usually), array-like object that contains a collection of nodes. A "node" is a broder term that can include elements, text nodes, comment nodes, etc.

ex :


- HTML collection is like a live cricket.
- NodeList is like a snapshot.

