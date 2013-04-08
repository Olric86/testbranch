if (this.App === undefined)
{
  App = {};
}

App.Core = (function(){
  var version = 0.1;

  return {
    getVersion: function() { return version; }
  }
})();