
# jQuery.logHandlers #

Sometimes I'm working on a page and I need to know all the event handlers that are bound to an element. jQuery.logHandlers is used to do just that.

Works with custom events and even namespaced events!

## Usage ##


Given this HTML:

    <a href="#">
        I have many events.
    </a>

and this JavaScript

    jQuery('a').click(function(event) {
        // Act on the click
    }).click(function(event) {
        // another clicker
    }).mouseover(function(event) {
        // mouseover
    }).bind('custom', function(event) {
      // custom event
    }).bind('click.name', function(event) {
      // click namespaced
    });

    jQuery('a').logHandlers('*');

You will get this output

    <a href="#">
        i have many events
    </a>

    0: [click] : function (event) {
            // Act on the click
        }
    1: [click] : function (event) {
            // another clicker
        }
    2: [click.name] : function (event) {
          // click namespaced
        }
    0: [mouseover] : function (event) {
            // mouseover
        }
    0: [custom] : function (event) {
          // custom event
        }"

Works with jQuery 1.4-1.7 though older versions sometimes output extra stuff for things like .hover().