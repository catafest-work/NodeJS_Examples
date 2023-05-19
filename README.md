## initalization of the project 

- create a new project and set in ```package.json``` this : ```"type": "module"``` to use ```import`` NodeJS modules.

## working_files.js - simple javascript code source with few features for files in NodeJS

 - ths install [fs](https://www.npmjs.com/package/fs)

```npm i fs```

 - this install [http](https://www.npmjs.com/package/http)

```npm i http```

## radio.js - simple radio server for play playlists

  This server will run in a blocking mode because it relies on the listen method to ```listen``` on the specified port. 
  This means that the server will block program execution and not respond to other requests or events while listening on that port.
  To handle multiple concurrent requests, you can use a more advanced web server framework, such as ```Express.js``` or ```Koa.js```, which provides routing and concurrent request management functionality.

 - this install [http](https://www.npmjs.com/package/http)

```npm install http``` 

 - this install [icy](https://www.npmjs.com/package/icy)

```npm install icy```

## testing_xata.js - simple example for testing xata 

 - this will work with XATA_API_KEY

```npm install dotenv```

 - these commands will create the project files

```npm install @xata.io/cli```

```xata auth login```

# Navigate to your project

 - this is the default project named ```NodeJS_Examples```

```cd NodeJS_Examples```

# Initialize your project locally with the Xata CLI

```xata init --db https://Catalin-George-Festila-s-workspace-2hp50s.eu-west-1.xata.sh/db/catafest-work```
 
 - select options starting from : ```Generate JavaScript code with ES modules```
 - you will see something like this in your terminal window:
 
 ```xata init --db https://Catalin-George-Festila-s-workspace-2hp50s.eu-west-1.xata.sh/db/catafest-work
🦋 Initializing project... We will ask you some questions.

√ Do you want to use code generation in your project? » Generate JavaScript code with ES modules
√ Choose the output file for the code generator ... src/xata.js
√ Do you want to generate the TypeScript declarations? ... yes
i Running npm install --save @xata.io/client

added 2 packages, and audited 15 packages in 4s

found 0 vulnerabilities
i We are going to update your .env file to store an API key.
✔ Your XataClient is generated at ./src\xata.js

✔ Project configured successfully.
i Next steps? Here's a list of useful commands below. Use xata --help to list them all.

» xata shell        Open a shell to the current database and branch
» xata browse       Open the current database in the browser
» xata schema edit  Edit the schema of the current database
» xata random-data  Insert random data in the database
» xata codegen      Generate code from the current database schema

✔ You are all set!
```

# Run pull to update your client, migrations and types

```xata pull```

 - run the project with the following command :

```node testing_xata.js``` or run with the npm from ```package.json``` like this: ```npm run testing_xata```


