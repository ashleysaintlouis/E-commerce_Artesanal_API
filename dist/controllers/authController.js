"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var _require = require('../services/userService'),
  createUser = _require.createUser,
  findUserByEmail = _require.findUserByEmail,
  findUserById = _require.findUserById,
  getAllUsersService = _require.getAllUsersService;
require('dotenv').config();
function register(_x, _x2) {
  return _register.apply(this, arguments);
}
function _register() {
  _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, name, email, password, userExists, user, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.p = 1;
          _context.n = 2;
          return findUserByEmail(email);
        case 2:
          userExists = _context.v;
          if (!userExists) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: 'Usuário já existe'
          }));
        case 3:
          _context.n = 4;
          return createUser(name, email, password);
        case 4:
          user = _context.v;
          res.status(201).json(user);
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          res.status(500).json({
            error: 'Erro no servidor no register'
          });
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[1, 5]]);
  }));
  return _register.apply(this, arguments);
}
function getUser(_x3, _x4) {
  return _getUser.apply(this, arguments);
}
function _getUser() {
  _getUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var user, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return findUserById(req.user.id);
        case 1:
          user = _context2.v;
          if (user) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            error: 'Usuário não encontrado'
          }));
        case 2:
          res.json(user);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          res.status(500).json({
            error: 'Erro no servidor no getUser'
          });
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return _getUser.apply(this, arguments);
}
function getAllUsers(_x5, _x6) {
  return _getAllUsers.apply(this, arguments);
}
function _getAllUsers() {
  _getAllUsers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var users, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return getAllUsersService();
        case 1:
          users = _context3.v;
          if (!(!users || users.length === 0)) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(404).json({
            message: 'Não possui usuário cadastrado (nenhum usuário encontrado).'
          }));
        case 2:
          res.json(users);
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          res.status(500).json({
            error: 'Erro no servidor no getAllUsers',
            err: _t3
          });
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _getAllUsers.apply(this, arguments);
}
function login(_x7, _x8) {
  return _login.apply(this, arguments);
}
function _login() {
  _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$body2, email, password, user, validPassword, token, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context4.p = 1;
          _context4.n = 2;
          return findUserByEmail(email);
        case 2:
          user = _context4.v;
          if (user) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(404).json({
            error: 'Usuário não encontrado'
          }));
        case 3:
          _context4.n = 4;
          return bcrypt.compare(password, user.password);
        case 4:
          validPassword = _context4.v;
          if (validPassword) {
            _context4.n = 5;
            break;
          }
          return _context4.a(2, res.status(401).json({
            error: 'Senha inválida'
          }));
        case 5:
          token = jwt.sign({
            id: user.id,
            email: user.email
          }, process.env.JWT_SECRET, {
            expiresIn: '1h'
          });
          res.json({
            token: token
          });
          _context4.n = 7;
          break;
        case 6:
          _context4.p = 6;
          _t4 = _context4.v;
          res.status(500).json({
            error: 'Erro no servidor no login'
          });
        case 7:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 6]]);
  }));
  return _login.apply(this, arguments);
}
module.exports = {
  register: register,
  login: login,
  getUser: getUser,
  getAllUsers: getAllUsers
};