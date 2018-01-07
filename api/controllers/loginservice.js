"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.send("UserLogin API");
});
router.post('/userlogin', function (req, res) {
    debugger;
    console.log(req.body);
    res.send("UserLogin API");
});
exports.default = router;
//# sourceMappingURL=loginservice.js.map