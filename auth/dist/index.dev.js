"use strict";

var express = require('express');

var mongoose = require('mongoose');

var authRouter = require('./authRouter');

var PORT = process.env.PORT || 5000;
var app = express(); // DATABASE

var uri = "mongodb+srv://anyalozovaya:qwerty123456789@cluster0.u9vwy.mongodb.net/app_auth?retryWrites=true&w=majority";
app.use(express.json());
app.use('/auth', authRouter);

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(console.log('aaaa')));

        case 2:
          app.listen(PORT, function () {
            return console.log("server started on PORT ".concat(PORT));
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

start();