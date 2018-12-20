"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = 2992;
app.use(_express.default.static(_path.default.join(__dirname, '../../client/dist')));
app.use('/video', _express.default.static(_path.default.join(__dirname, '../static')));
app.use('/icon', _express.default.static(_path.default.join(__dirname, '../../client')));
app.use(_bodyParser.default.json({
  type: 'application/json'
}));
app.use(_bodyParser.default.urlencoded({
  type: 'application/x-www-form-urlencoded',
  extended: true
}));
app.get(/\/[0-9a-zA-Z\/]*/, function (req, res) {
  res.sendFile(_path.default.join(__dirname, '../../client', 'index.html'));
});
app.listen(PORT, function () {
  console.log("listening on port ".concat(PORT, "....."));
});