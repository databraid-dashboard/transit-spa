var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "fetchJourneys",
    value: function fetchJourneys(origin, destination) {
      return fetch("http://localhost:8000/directions?origin=" + origin + "&destination=" + destination + "&alternatives=true").then(function (response) {
        return response.json();
      }).catch(function (e) {
        return e;
      });
    }
  }]);

  return Api;
}();

export default Api;