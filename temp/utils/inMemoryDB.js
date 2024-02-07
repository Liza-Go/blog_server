"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDB = /** @class */ (function () {
    function InMemoryDB() {
        // private users: Map<number, User> = new Map();
        this.posts = new Map();
    }
    InMemoryDB.getInstance = function () {
        if (!InMemoryDB.instance) {
            InMemoryDB.instance = new InMemoryDB();
        }
        return InMemoryDB.instance;
    };
    // Post Methods
    InMemoryDB.prototype.addPost = function (post) {
        this.posts.set(post.postId, post);
    };
    InMemoryDB.prototype.getPost = function (id) {
        return this.posts.get(id);
    };
    InMemoryDB.prototype.getAllPosts = function () {
        return Array.from(this.posts.values());
    };
    InMemoryDB.prototype.updatePost = function (id, postData) {
        var post = this.posts.get(id);
        if (post) {
            // Update attributes of the post
            post = __assign(__assign({}, post), postData);
            this.posts.set(id, post);
        }
    };
    InMemoryDB.prototype.deletePost = function (id) {
        this.posts.delete(id);
    };
    return InMemoryDB;
}());
exports.default = InMemoryDB;
//# sourceMappingURL=inMemoryDB.js.map