# MongoDB Queries for Employee Assignment

### 1️⃣ Find all employees whose salary (sal) is greater than 3000
```js
db.employees.find({ sal: { $gt: 3000 } });
```

---

### 2️⃣ Find all employees whose salary (sal) is between 1000 and 3000 (inclusive)
```js
db.employees.find({ sal: { $gte: 1000, $lte: 3000 } });
```

---

### 3️⃣ Find employees who have a bonus exactly equal to 1000
```js
db.employees.find({ bonus: 1000 });
```

---

### 4️⃣ Find employees whose totalHoursWorked is not equal to 30
```js
db.employees.find({ totalHoursWorked: { $ne: 30 } });
```

---

### 5️⃣ Find employees whose age is less than 25
```js
db.employees.find({ age: { $lt: 25 } });
```

---

### 6️⃣ Find employees who are either managers or analysts
```js
db.employees.find({ job: { $in: ["manager", "analyst"] } });
```

---

### 7️⃣ Find employees who have a salary greater than 2000 and have totalHoursWorked equal to 30
```js
db.employees.find({
  sal: { $gt: 2000 },
  totalHoursWorked: 30
});
```

---

### 8️⃣ Find employees who have salary less than 2000 or their job is "salesman"
```js
db.employees.find({
  $or: [
    { sal: { $lt: 2000 } },
    { job: "salesman" }
  ]
});
```

---

### 9️⃣ Find employees who are not managers and who work in department number 30
```js
db.employees.find({
  job: { $ne: "manager" },
  deptno: 30
});
```

---

### 🔟 Find employees who have a bonus of 1000 and either have commission (comm) greater than 1000 or totalHoursWorked equal to 30
```js
db.employees.find({
  bonus: 1000,
  $or: [
    { comm: { $gt: 1000 } },
    { totalHoursWorked: 30 }
  ]
});
```
