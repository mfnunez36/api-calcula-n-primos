"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validatormiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() });
    }
    next();
};
exports.default = validatormiddleware;
//# sourceMappingURL=validatormiddleware.js.map