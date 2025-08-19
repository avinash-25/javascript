# this keyword.

- this is the global object of window.
- this searches for parent object.
- first GEC address references handle by 'window' object.
- That window have global object.


```js
var a = 10;

{
    let b = "book";
    console.log("this : ",this);
}
```

-  in the above example this again gibes output window because the reference of GEC is handle by window variable.
-  callstack have only object that is window so 'this' also references window.
-  

## this keyword inside named function.

- firstly in the callstack one GEC will be created named Anonymous and it is referenced by window object.



## this inside arrow function.

- 'this' keyword inside arrow function also gives output 'window'
- here 'window' will be output because this is inherited from parent ()


##  this keyword inside named method.

- Here 'this' inside any method then in that will contain all data of that function.


## this keyword arrow method.

```js
const obj = {
    fname: "Avinash",
    lname: "Ranjan.",
    info: () => { console.log("'this' inside info : ",this); }
}

obj.info();
```

- if we create 
