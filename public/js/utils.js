if (this.App === undefined)
{
  this.App = {};
}

App.Utils = (function(){
  
  var _on = function(aNodes, eventName, func, stopPropagation){
    var n = (aNodes) && (aNodes.length) ? aNodes : [];
    var e = eventName ? eventName : "";
    var f = !!func ? func : function() {};
    var stop = !!stopPropagation;
    for (var i = 0; i < n.length; i++)
    {
      if (n[i])
      {
        n[i].addEventListener(eventName, func, stop);
      }
    }
  };

  var _off = function(aNodes, eventName, func){
    var n = (aNodes) && (aNodes.length) ? aNodes : [];
    var e = eventName ? eventName : "";
    var f = !!func ? func : function() {};
    var stop = !!stopPropagation;
    for (var i = 0; i < n.length; i++)
    {
      if (n[i])
      {
        n[i].removeEventListener(eventName, func, stop);
      }
    }
  };

  return {
    on: _on,
    off: _off
  };

})();