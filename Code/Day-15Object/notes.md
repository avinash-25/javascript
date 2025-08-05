## Object

- data stores in a key value pair and it is seperated by comma.
- key name are 

## object key

- Object name is automatically converted to string by js engine.
- If we use number then all number sorted by default.
- 


// Empty onject.

const obj = {
    username: "Avinash",
    age: 21,
    greet: function(){
        clg("Good morning");
    }
}


# Ways to create object.

1. 

- When we write new kryword then new object is created.
- That object address goes to the object this keyword 


2. 

3. By using new keyword and custom constructor function.
   
   - By using this we can make own constructor.
   - it can makes by using function.
   - first name of function name lust start with capital letters.
  
  ```js
          function CreateObject (username, age , city){
        this.username = username;
        this.age = age;
        this.city = city;
        }

     const u1 = new CreateObject("Avinash", 22, "Muzaffarpur");

  ```

  - new keyword references saved to function this keyword.
  - Bydefault constructor function returns nothing.
  - function constructor by using this keyword  