- If we write a function inside setTimeout() and i want to return somting from that function then this is ***not possible***;
- Function inside setTimeout, return anything as all function does but setTimeout will ***not accept*** that value or whatever.
- this is the biggest drawback of setTimeout().


- we write callback function in function call because

```js
function operation1(cb) {
    console.log("Operation-1");

    setTimeout(function A() {
        // Make an API Request
        const movie = "War-2";
        cb(movie);
    }, 1000);
}

operation1(function task1(response1) {
    console.log("Response-1", response1);
});
```
-