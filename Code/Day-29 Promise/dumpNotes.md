- **Settled** : then block and catch block both are waiting to promise is being reject or resolve then after promise is to be settled.
- when prmise is settled then after `then` will send the callvack function inside them to the `microtask queue`.
- `.then` having two paramater first one is for resolved promise and secod one for the rejected promise.

- then cant run the pending promise they run only settled promise it means (rejected or resolved).