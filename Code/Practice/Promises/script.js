     function clearOutput(outputId) {
         document.getElementById(outputId).textContent = "Loading...";
     }

     function log(outputId, message) {
         const output = document.getElementById(outputId);
         if (output.textContent === "Loading...") {
             output.textContent = message;
         } else {
             output.textContent += "\n" + message;
         }
     }

     function runSimplePromise() {
         clearOutput('output1');

         const simplePromise = new Promise((resolve, reject) => {
             setTimeout(() => {
                 resolve("Success! Promise completed after 2 seconds!");
             }, 2000);
         });

         simplePromise.then(result => {
             log('output1', "✅ " + result);
         });
     }

     function runRandomPromise() {
         clearOutput('output2');

         const randomPromise = new Promise((resolve, reject) => {
             setTimeout(() => {
                 const random = Math.random();
                 if (random > 0.5) {
                     resolve(`Success! Random number: ${random.toFixed(3)}`);
                 } else {
                     reject(`Failed! Random number too low: ${random.toFixed(3)}`);
                 }
             }, 1000);
         });

         randomPromise
             .then(result => log('output2', "✅ " + result))
             .catch(error => log('output2', "❌ " + error));
     }

     function runChainedPromises() {
         clearOutput('output3');

         function step1(data) {
             return new Promise(resolve => {
                 setTimeout(() => {
                     const result = data + " → Step 1 completed";
                     log('output3', result);
                     resolve(result);
                 }, 1000);
             });
         }

         function step2(data) {
             return new Promise(resolve => {
                 setTimeout(() => {
                     const result = data + " → Step 2 completed";
                     log('output3', result);
                     resolve(result);
                 }, 1000);
             });
         }

         log('output3', "Starting chain...");

         Promise.resolve("Starting")
             .then(step1)
             .then(step2)
             .then(result => {
                 log('output3', "🎉 Final result: " + result);
             });
     }

     function runPromiseAll() {
         clearOutput('output4');
         log('output4', "Starting all promises...");

         const promise1 = new Promise(resolve => {
             setTimeout(() => {
                 log('output4', "Promise 1 completed");
                 resolve("Data 1");
             }, 1000);
         });

         const promise2 = new Promise(resolve => {
             setTimeout(() => {
                 log('output4', "Promise 2 completed");
                 resolve("Data 2");
             }, 2000);
         });

         const promise3 = new Promise(resolve => {
             setTimeout(() => {
                 log('output4', "Promise 3 completed");
                 resolve("Data 3");
             }, 1500);
         });

         Promise.all([promise1, promise2, promise3])
             .then(results => {
                 log('output4', "🎉 All completed: [" + results.join(", ") + "]");
             });
     }

     function fetchUserData(userId) {
         return new Promise((resolve, reject) => {
             setTimeout(() => {
                 if (userId > 0) {
                     resolve({
                         id: userId,
                         name: `User ${userId}`,
                         email: `user${userId}@example.com`
                     });
                 } else {
                     reject("Invalid user ID");
                 }
             }, 1500);
         });
     }

     function runFakeAPI() {
         clearOutput('output5');
         log('output5', "Fetching user 123...");

         fetchUserData(123)
             .then(user => {
                 log('output5', `✅ User found: ${user.name} (${user.email})`);
                 log('output5', "Fetching user 456...");
                 return fetchUserData(456);
             })
             .then(user2 => {
                 log('output5', `✅ Second user: ${user2.name} (${user2.email})`);
                 log('output5', "🎉 Both users loaded successfully!");
             })
             .catch(error => {
                 log('output5', "❌ Error: " + error);
             });
     }

     async function runAsyncAwait() {
         clearOutput('output6');

         async function getUsersModernWay() {
             try {
                 log('output6', "Starting async function...");

                 log('output6', "Awaiting first user...");
                 const user1 = await fetchUserData(789);
                 log('output6', `✅ Got first user: ${user1.name}`);

                 log('output6', "Awaiting second user...");
                 const user2 = await fetchUserData(101);
                 log('output6', `✅ Got second user: ${user2.name}`);

                 return "Both users loaded successfully with async/await!";
             } catch (error) {
                 log('output6', "❌ Something went wrong: " + error);
             }
         }

         const result = await getUsersModernWay();
         log('output6', "🎉 Final: " + result);
     }