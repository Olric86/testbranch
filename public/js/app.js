if (this.App === undefined)
{
  App = {};
}

App.Core = (function(){
  var version = 0.1;
  
  var _onPrintActionClicked = function()
  {
    // this = span.action.print
    // DO PRINT
  }

  var _initEvents = function()
  {
    var aElements = document.querySelectorAll(".action.print");
    App.Utils.on(aElements, 'click', _onPrintActionClicked);
  };

  var _init = function()
  {
    _initEvents();

    var div = document.createElement("div");
    div.id = 'versionInfo';
    div.appendChild(document.createTextNode("version: " + version));

    document.body.appendChild(div);
    div.style.display = 'block';
  };

  document.addEventListener("DOMContentLoaded", _init, false);

  return {
    getVersion: function() { return version; }
  };
})();