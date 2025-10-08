## Bundler
1. Optimized.
   - All codes files are converted into 3-4 files.
   - `optimize` works along with `minify` `compress`.
2. Code splitting.
   - It is also called `lazy loading`

3. source map
4. Hashing.
   - checks which file has been changes

5. Caching.
   - sends the data to the dist folder in which changes occurs.

6. Tree shaking.
   - Multiple logics are written in the file but used only which are in use.
   - Remove unwanted code by tree shaking.
7.  minify
8. File watcher
9.  HMR (Hot module replacement)
   - load only those file in which some changes occur.
   - `File watcher` constantly checks in which file changes occusr
   - HMR pass the info given by `File watcher` to the bundler.
9.  compress.
10. Inlining.
   - If there is less code written in seperate file then that are treated by inline.
11.  Injection
   - d

***1. npm run dev*** starts the server automatically and redered the code contunisouly.
***2. npm run build***
  - `dist` folder created and optimized code are injected into that.
***2. npm run preview***
- static server
- access code from `dist` file.
-