"use strict";

var router = require("express").Router();

var User = require('../models/User');

var bcrypt = require('bcrypt');

var Post = require('../models/Post'); //CREATE POST


router.post("/", function _callee(req, res) {
  var newPost, savedPost;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(new Post(req.body));

        case 2:
          newPost = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(newPost.save());

        case 6:
          savedPost = _context.sent;
          res.status(200).json(savedPost);
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
}); //UPDATE

router.put("/:id", function _callee2(req, res) {
  var post, updatedPost;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Post.findById(req.params.id));

        case 3:
          post = _context2.sent;

          if (!(post.username === req.body.username)) {
            _context2.next = 15;
            break;
          }

          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(Post.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 8:
          updatedPost = _context2.sent;
          res.status(200).json(updatedPost);
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](5);
          res.status(401).json("You can update only your post!");

        case 15:
          _context2.next = 20;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t1 = _context2["catch"](0);
          res.status(500).json(_context2.t1);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17], [5, 12]]);
}); //DETELE

router["delete"]("/:id", function _callee3(req, res) {
  var post;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Post.findById(req.params.id));

        case 3:
          post = _context3.sent;

          if (!(post.username === req.body.username)) {
            _context3.next = 16;
            break;
          }

          _context3.prev = 5;
          _context3.next = 8;
          return regeneratorRuntime.awrap(post["delete"]());

        case 8:
          res.status(200).json("Your post has been deleted");
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](5);
          res.status(500).json(_context3.t0);

        case 14:
          _context3.next = 17;
          break;

        case 16:
          res.status(401).json("You can delete only your post!");

        case 17:
          _context3.next = 22;
          break;

        case 19:
          _context3.prev = 19;
          _context3.t1 = _context3["catch"](0);
          res.status(500).json(_context3.t1);

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 19], [5, 11]]);
}); //GET POST

router.get("/:id", function _callee4(req, res) {
  var post;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Post.findById(req.params.id));

        case 3:
          post = _context4.sent;
          res.status(200).json(post);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //GET USER

router.get("/", function _callee5(req, res) {
  var username, catName, posts;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          username = req.query.user;
          catName = req.query.cat;
          _context5.prev = 2;

          if (!username) {
            _context5.next = 9;
            break;
          }

          _context5.next = 6;
          return regeneratorRuntime.awrap(Post.find({
            username: username
          }));

        case 6:
          posts = _context5.sent;
          _context5.next = 18;
          break;

        case 9:
          if (!catName) {
            _context5.next = 15;
            break;
          }

          _context5.next = 12;
          return regeneratorRuntime.awrap(Post.find({
            categories: {
              $in: [catName]
            }
          }));

        case 12:
          posts = _context5.sent;
          _context5.next = 18;
          break;

        case 15:
          _context5.next = 17;
          return regeneratorRuntime.awrap(Post.find());

        case 17:
          posts = _context5.sent;

        case 18:
          res.status(200).json(posts);
          _context5.next = 24;
          break;

        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json(_context5.t0);

        case 24:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 21]]);
});
module.exports = router;