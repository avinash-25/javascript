## What is package

A package is a folder of reusable piece of js code with a package.json

NPM

- npm is a package manager for the javascript programming language.It is the default package manager for the Node.js runntime enviironment.

Why use NPM.

- npm has two main components
  1.  NPM regiestry : A massive online database of publi and private javascript packages(reusable mode of code)
  2.  npm command-line interface(CLI) : A tool that allows you to interact with the regiestry. You can use commands lije npm install `<package-name>`

### Default export, import

- .js, .tsx, .jsx, .ts
- If i have a export single thing from any given file then we use `default export`
- `default export` it must be written **\*once** and should be **_last line_** of the file.
- If we have to send multiple things then we object.
- EX - `export default {a1,a2,a3};`
- Code For export
  ```js
  const App = () => {
    console.log("Hello");
  };
  export default App;
  ```
- During import we **_cant_** destrusture in same line like this `import [a1, a2] from "./app.js"`
- we have to dsetrusture in second line like this
- Code For import

  ```js
  import 'anyVariableName' from "./app.js"; ---> File Name with extension.

  // for call
  App();
  ```

- Best way is import with same file name.

## Day-2

- npm init

- npm init -y (Yes to all)

/\C(ctrl + c) :-

##

- A package.json file is a configuration file used in nodejs project that contains metadata about the project and its dependencies.
- It includes essential info like the project name, version, description, entry point, and lists of required packages (dependencies) that need to installed.
- This file also defines scripts that can be run (like build, test, or start commands) and helps package managers like `mpm` or `yarn` understand how to handle the project. Essentially, it serves as the blueprint that describes your javascript project and tells other developers or systems whats needed it.

- yarn, pnpm, pnpm firstly read the package.json file and then run server.

## package.json file explanation

1. **name** : The unique identifier for a package, used when publishing to npm registry or referencing in the projects
2. **version** : Semantic version number (e.g, 1,2,3) that indicates the current release of you package following major.minor.major format.
3. **description** : A brief text summary explaining what your package does, helpful for discovery and documentation.
4. **main(entry point)** : The primary files that gets executes when someone imports your package, typically "index.js" or "dist/index.js".
5. **script** : Custom commands that can be run `npm run` like 'test' for running tests, 'build" for compilation, 'dev' for development server
6. **repository** : GIT repo url where your projects source code is hosted, usually linking to github, Gitlab, or similar platforms.
7. **keywords** : Array of searchable terms that help others discover your package on npm registry or search engines.
8. **author** : information about the package creator, including name, email , and optionally website.
9. **license** : Leges license under which your code is distributed, commonly "MIT", "ICS", or "Apache-2.0" for open source projects.
10. **dependencies** : Production packages required for your application to run properly in live environment.
11. **devDependencies** : Development only package needed for building, testing, or developing but not required in production environments.

### why version having 3 line **\_**.**\_**.**\_**;

version: "**1\_**.**2\_**.**3\_**";
1: Major ---> breaking changes that are not backward compatible.

2: minor ---> New feature that are backward compatible.

3: Patch ---> Bug fixes that are backward compatible.

**_Backward compatible_** : This is a newer version

- ***"6.0.0"***  :  this is locked version.
- ***"^6.0.0"*** :
- ***"~6.0.0"*** :


# Day - 2

1. node-modules
  - The `node-modules` folder is where `npm` stores all the externa; libraries and dependencies that your javascript/nodejs project needs to run.
  - When you install packages using npm install they got downloaded and saved in the folder. its like a storage room that contains all the thirdparty code your project relies on, so you dont have to write everything from scratch.
  - we cant modify the files in this folder directly, and it is usually exculded from version control because it can be regenerated any time.

**2.** package-lock.json
- A json file that records the exact version tree of all installed dependencies. It ensures deterministics installs by locking specific version aand their and their nested dependencies.
- it is an automatically generated file that locks down the exact versions of all dependencies.
- It ensures that everyone working on the projects gets the exact same version og the packages.
- It contain the info of the installed `node-modules` files.
- It contains the metadat of the `node-modules` files.
- It can be editied by user


**3.** .package-lock.json
- The .package-lock.json file a crucial file in Node.js projects that automatically gets created when you run `npm install`
- The main purpose of`.package-lock.json` is to ***lock down the exact versions*** of every package in your project dependencies tree, inculding their dependencies and sun-dependencies.
- It can not be editied by user


**Q. What is the difference between `package-lock.json` and `.package-lock.json`**

**4.** dependencies
-

****Development****
- A phase of development and implentation of code
- during this phase we use `npm run dev` for run the code
****Production****
- after development completion then it goes to the use for thr users
- during this phase we use `npm build` for run the code









5. devDependencies.
6. version

---




**1. Transitive Dependency**
- when one thing depends on another thing, which in turn depends on a third thing, creating a ***chain of dependencies***.
For example : if `A` depends on `B` and `B` depends on `C` then `A` has transitive dependencies on `C`.
- if `is-odd` inside the another packages then all the packages came with that.

- `npm cli` is tool is inside node(when node dowloaded and installed to machine then `npm cli` is come along that).
- `npm` tool ia take care of `node-modules` in our computer.
- `npm`, `yarn`, `pnpm`, `bun` this all are a package manager. except `npm` i have to installed separately all of them if we use.
- `npm install is-odd` if we run this on CLI then this will create a folder named `nomed-modules` and save the all files related to `is-odd` package.

<br>


- when we install any packages then onyl `dependencies` are to be downoaded with that but not `devDependencies`.
- `npm audited` : it means they real all the files.