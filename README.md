![tv Logo](https://raw.github.com/spumko/tv/master/images/tv.png)

Interactive debug console plugin for [**hapi**](https://github.com/hapijs/hapi)

[![Build Status](https://secure.travis-ci.org/hapijs/tv.png)](http://travis-ci.org/hapijs/tv)

Lead Maintainer: [Wyatt Preul](https://github.com/wpreul)

TV, a debug console, is a simple web page in which developers can view server logs for their requests. Optionally, they can also filter the server logs to just their requests by attaching a unique client id to each request. The server will use WebSocket to stream the subscribed request logs to the web page in real-time. 


### Registering TV

To enable TV in a **hapi** application, install **tv** and register it.  Below is an example of registering **tv**:

```javascript
var Hapi = require('hapi');
var Tv = require('tv');

var server = new Hapi.Server();

server.register(Tv, function (err) {

    if (!err) {
        server.start();
    }
});
```


### Options

In applications using multiple server instances, only one server can enable the debug interface using the default port. Below are the options available to be passed into the **tv** plugin:

- `host` - the hostname, IP address, or path to UNIX domain socket the WebSocket connection is bound to. Defaults to _undefined_ and therefore `0.0.0.0`
   which means any available network interface(see hapi `new Server()`).
- `port` - the port used by the WebSocket connection. Defaults to _0_ and therefore an ephemeral port (see hapi `new Server()`).
- `endpoint` - the debug console request path added to the server routes. Defaults to _'/debug/console'_.
- `queryKey` - the name or the request query parameter used to mark requests being debugged. Defaults to _debug_.
- `template` - the name of the template to use for the debug console.  Defaults to _index_.
