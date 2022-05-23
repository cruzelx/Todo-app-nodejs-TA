# TODO App Documentation
### Introduction:
This is a simple todo app created using TypeScript, NodeJs/Express as server, ejs as template engine, bootstrap for styling and MongoDB as database. The app servers three different pages. 

* **Landing Page**: Lists all the todos stored in the database. Here each todo can be deleted, edited or assigned as done. The todos can be filtered as well based on the status of completion and the remaining.
* **Add Todo Page**: Adds new Todo to the database via html form using ```POST``` method.
* **Edit Todo Page**: The page have same fields as _Add Todo Page_ but are populated with the respective todo field values.
    
### Installation:
Clone the directory and inside the root directory run following command to install all the dependencies
```
npm install
```

Start the server using below command
```
npm run start
```

> Note: The port for the server is to be set `8080` and the host to be `localhost`. For mongodb, either add local uri or from the cloud service. Please set the environment variables accordingly.

### Shortcomings
* Better error handling
* Show toast to indicate status of operation
  



