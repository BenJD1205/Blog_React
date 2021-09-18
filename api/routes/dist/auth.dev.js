"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var router = require("express").Router();

var User = require('../models/User');

var bcrypt = require('bcrypt'); //REGISTER


router.post("/register", function _callee(req, res) {
  var salt, hashedPass, newUser, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 6:
          hashedPass = _context.sent;
          newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
          });
          _context.next = 10;
          return regeneratorRuntime.awrap(newUser.save());

        case 10:
          user = _context.sent;
          res.status(200).json(user);
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
}); //Login

router.post("/login", function _callee2(req, res) {
  var user, validated, _user$_doc, password, others;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.body.username
          }));

        case 3:
          user = _context2.sent;
          !user && res.status(400).json("Wrong credentials!");
          _context2.next = 7;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 7:
          validated = _context2.sent;
          !validated && res.status(400).json("Wrong credentials");
          _user$_doc = user._doc, password = _user$_doc.password, others = _objectWithoutProperties(_user$_doc, ["password"]);
          res.status(200).json(others);
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
module.exports = router;