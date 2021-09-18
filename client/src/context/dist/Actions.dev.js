"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateFailure = exports.UpdateSuccess = exports.UpdateStart = exports.Logout = exports.LoginFailure = exports.LoginSuccess = exports.LoginStart = void 0;

var LoginStart = function LoginStart(useCredentials) {
  return {
    type: "LOGIN_START"
  };
};

exports.LoginStart = LoginStart;

var LoginSuccess = function LoginSuccess(user) {
  return {
    type: "LOGIN_SUCCESS",
    payload: user
  };
};

exports.LoginSuccess = LoginSuccess;

var LoginFailure = function LoginFailure() {
  return {
    type: "LOGIN_FAILURE"
  };
};

exports.LoginFailure = LoginFailure;

var Logout = function Logout() {
  return {
    type: "LOGOUT"
  };
};

exports.Logout = Logout;

var UpdateStart = function UpdateStart(useCredentials) {
  return {
    type: "UPDATE_START"
  };
};

exports.UpdateStart = UpdateStart;

var UpdateSuccess = function UpdateSuccess(user) {
  return {
    type: "UPDATE_SUCCESS",
    payload: user
  };
};

exports.UpdateSuccess = UpdateSuccess;

var UpdateFailure = function UpdateFailure() {
  return {
    type: "UPDATE_FAILURE"
  };
};

exports.UpdateFailure = UpdateFailure;