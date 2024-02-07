"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import activityLogger from "./middlewares/activityLogger";
// import usersRoute from "./routes/usersRoute";
var postRoute_1 = __importDefault(require("./routes/postRoute"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(activityLogger);
var port = 4000;
// app.use("/users", usersRoute);
app.use("/posts", postRoute_1.default);
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map