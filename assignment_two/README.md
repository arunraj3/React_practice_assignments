Assignment Two
<br/>

1.  What is 'NPM'?
    NPM is a package manager which used for managing the packages required for our project<br/>
    Important point is that NPM if not short form of "NODE PACKAGE MANAGER" <br/>
    npm packages are defined in files called package.json
    (or)<br/>
    it is also world's largest software Registry
    <br/>

2.  What is 'Parcel/Webpack' ? Why do we need it?<br/>
    Parcel is basically a Bundler which is used for bundling the React or any javascript applications <br/>
    Basically it is included in our project using NPM <br/>
    command for installing parcel as a dev dependency : npm install -D parcel <br/>
    Documentation Reference : https://parceljs.org/ <br/>
3.  What is ".parcel-cache"?
    .parcel-cache is basically a cache file after running npx parcel index.html command it creates a cache file so subsequent changes will be build faster using those cache
    <br/>In Simple terms its just cache
    <br/>
    (or)
    <br/>
    .parcel-cache is a directory created by the Parcel bundler. It stores information about a project when it's built. This information is used to rebuild the application.
    <br/>
    The .parcel-cache directory speeds up subsequent builds and optimizes resource usage.
    <br/>
    It also allows the dev server to restart instantly, and the same code is never built twice.
    <br/>
4.  What is NPX?
    This is basically the command used to "EXECUTE" the packages of NPM <br/>
    (or)
    NPX it is Simply an NPM package runner/Execute. It allows developers to execute any javascript Package available in NPM registry w/o even installing it
    <br/>

5.  Difference b/w devDependencies and dependencies?
    <br/>
    "dependencies" : are basically the normal dependencies required for the production
    <br/>
    "devDependencies" : are basically the dependencies required for or during the development of React or Any Project
    <br/>
    (or)<br/>
    dependencies" : Packages required by your application in production.
    <br/>"devDependencies" : Packages that are only needed for local development and testing.
    <br/>

6.  What is Tree Shaking?
    Tree Shaking basically which removes unused exports or Code. It is one of the step for optimising the React App
    <br/>
    (or)
    Tree shaking is a term used to describe the process of removing unused exports from a module. This is typically done during the bundling process, using a tool such as Parcel or WebPack.
    <br/>
7.  What is Hot module Replacement?
    HMR is one of the feature provided by the parcel.
    Basically parcel keeps track the project files if any changes takes place in files then the app is altered based on the changes which is basically called as HMR or Hot module replacement.
    <br/>
    (or)
    <br/>
    Hot module replacement is basically improves development experience by automatically updating modules in the browser at runtime without needing a whole page refresh
    <br/>

8.  What is .gitignore ? What should we add and not add into it?
    <br/>
    .gitignore is basically a file in git repository where we add list of files which should not be pushed to git repo
    <br/>
    (or)
    <br/>
    A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.
    <br/>
    (or)
    <br/>
    Its basic philoshophy is that "Don't and the files which can be regenerated" for example : "node_modules" , ".parcel-cache" etc.
    <br/>

9.  Why i should not modify 'package-lock.json" ?
    <br/>
    The package-lock.json file is not designed to be manually edited. It's a generated file that tracks the entire tree of dependencies and the exact version of each dependency.
    <br/>
    You should not modify package-lock.json unless you are actively updating the packages required. The file ensures that the same node_modules tree is generated every time npm install is run.
    <br/>
10. What is node_modules ? Is it a good idea to push that on git?
    node modules are basically the packages which are installed based on the dependencies so due to the transitive dependencies more number of packages which respectively dependent on are also installed into the project in a bundle called as node_modules<br/>
    (or)
    <br/>
    The node_modules folder contains every installed dependency for our project.
    <br/>
    No, It is not a good idea to push because it is very large file but it can be generated using npm so it is basically added to .gitignore file.
    <br/>
11. What is "dist" folder?
    Basically consist of minimized version of the source code, i.e. the source code present in dist is the production ready code.
    <br/>
12. What is "browserlists"?
    This is basically the dependency which will be added in package.json which represents which browser and how many versions of it should the project should support.



