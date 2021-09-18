"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Recuder = function Recuder(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };

    case "LOGIN_FAILTURE":
      return {
        user: null,
        isFetching: false,
        error: true
      };

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false
      };

    case "UPDATE_START":
      return _objectSpread({}, state, {
        isFetching: true
      });

    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };

    case "UPDATE_FAILTURE":
      return {
        user: null,
        isFetching: false,
        error: true
      };

    default:
      return state;
  }
};

var _default = Recuder;
exports["default"] = _default;