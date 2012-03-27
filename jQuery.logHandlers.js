/* 
 * jQuery.logHandlers
 * https://github.com/matthewlein/jQuery-logHandlers
 * based heavily on http://james.padolsey.com/javascript/debug-jquery-events-with-listhandlers/
 */

jQuery.fn.logHandlers = function(events) {
    // paul irish's log wrapper http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
    window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments));}};

    return this.each(function(i){
        var elem = this;
        var dEvents = jQuery(this).data('events');
        var output = ['\n'];
        
        // early exit if no events
        if (!dEvents) {return;}
        
        jQuery.each(dEvents, function(name, event){
            if((new RegExp('^(' + (events === '*' ? '.+' : events.replace(',','|').replace(/^on/i,'')) + ')$' ,'i')).test(name)) {
                jQuery.each(event, function(i,event){
                    var namespace = '';
                    if ( event.namespace ) {
                        namespace = '.' + event.namespace;
                    }
                    output.push( i + ': [' + name + namespace + '] : ' + event.handler );
                });
            }
        });
        log( elem, output.join('\n') );
    });
};