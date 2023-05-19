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

