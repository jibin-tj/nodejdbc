// Generated by CoffeeScript 1.10.0
(function() {
  var Promise, ResultSetMetaData;

  Promise = require('bluebird');

  module.exports = ResultSetMetaData = (function() {
    function ResultSetMetaData(resultSetMetaData) {
      this.resultSetMetaData = Promise.promisifyAll(resultSetMetaData);
    }

    ResultSetMetaData.prototype.getColumnCount = function() {
      return this.resultSetMetaData.getColumnCountSync();
    };

    ResultSetMetaData.prototype.getColumnName = function(column) {
      return this.resultSetMetaData.getColumnNameSync(column);
    };

    return ResultSetMetaData;

  })();

}).call(this);