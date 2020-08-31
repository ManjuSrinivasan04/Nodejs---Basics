# Node.js

“Fast” + “Easy” + “Awesome” + “Powerful” + “Flexible” + Fun” = Node.js 

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

Nodejs: [Creator of nodejs - Ryan Dahl]

   -> Nodejs is a runtime environment for executing JavaScript code -- outside browser<Nodejs is niether a programming language nor a framework>
   -> Mostly nodejs is used for building the api 
   -> Using node we can build webapp,mobile apps
   -> Highly Scalable,data-intensive and real-time apps

Reasons to use nodejs:

   => Great for protyping and agile development
   => Superfast and Highly Scalable
   => JavaScript everywhere
   => Cleaner and more consistent codebase
   => Large ecosystem of open-source libs

Advantages of Node apps:

   #> Built twice as fast with fewer people
   #> 33% fewer lines of code
   #> 40% fewer files
   #> 2x request/sec
   #> 35% faster response time

JS Engine:

   $ Microsoft edge uses Chakra
   $ Firefox uses SpiderMonkey
   $ Chrome uses v8 {c++ and v8 =>node.exe}

How node works:
   
   * Single thread used to handle multiple requests(reduce the waiting state(uses resources efficiently))
   * Single thread serves for request 1 when data is ready in event queue meanwhile before serving get the request from request 2 also(reduce idle time)
   * Do not use Node for CPU-intensive apps(other clients will need to wait in that case)
   

