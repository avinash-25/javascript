## Promise Methods

1. Promise.resolved();

2. Promise.all();

- wait for the time for maxm time taken by promise.
- If any one become fails then it will return rejected.

3. Promise.allSettled();

- store `pending` intially in `state`.
- value have `undefiened`
- if any one promise becomes fails then it will return as all are.
- it will also wait for the time those promise have maxm time.
- It will return object inside array
- This will return reason also.
- Its always return `fullfilled`
- If all the promises inside this becomes rejected then it will return fullfilled

4. Promise.race();

5. Promise.any();