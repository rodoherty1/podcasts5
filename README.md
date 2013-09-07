podcasts5
=========

Overview
--------
This is an exploration in modifying a TodoMVC project so that it will interact with my nodejs server and display results of YouTube API queries.

The nodejs component is contained in my github project call podcasts6.

What is done?
-------------
* Just some architectural experiments with Backbone Views and Models and strung together using RequireJS.
* The client will send a request to the waiting nodejs webserver but the request is not processed in any meaningful way.  Instead a dummy repsonse is returned and subsequently displayed in the UI.

What is left todo? 
------------------
So many things ....

* Reacquaint myself with the client side architecture
* Send a meaningful call to the nodejs server and have the server process it correctly.
* Consume and correctly process a result from the server.

Also, tidy up the project in general.  Move it from being a collection of experiments to an evolving project - show it some respect!

Installation
------------
Install the client side dependencies as follows:
    bower install
  
There is a temporary server component which is represented in the file js/server.js.

Install the server dependencies as follows:
    npm install
  
And then run the server as follows:
    node js/server.js
  

