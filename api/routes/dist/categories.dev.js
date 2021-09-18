"use strict";

var router = require("express").Router();

var Category = require("../models/Category");

router.post("/", function _callee(req, res) {
  var newCat, savedCate;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(new Category(req.body));

        case 2:
          newCat = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(newCat.save());

        case 6:
          savedCate = _context.sent;
          res.status(200).json(savedCate);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          res.status(500).json(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]]);
});
router.get("/", function _callee2(req, res) {
  var cats;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Category.find());

        case 3:
          cats = _context2.sent;
          res.status(200).json(cats);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;