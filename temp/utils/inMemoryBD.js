"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDB {
    constructor() {
        // private users: Map<number, User> = new Map();
        this.posts = new Map();
    }
    static getInstance() {
        if (!InMemoryDB.instance) {
            InMemoryDB.instance = new InMemoryDB();
        }
        return InMemoryDB.instance;
    }
    // Post Methods
    addPost(post) {
        this.posts.set(post.postId, post);
    }
    getPost(id) {
        return this.posts.get(id);
    }
    updatePost(id, postData) {
        let post = this.posts.get(id);
        if (post) {
            // Update attributes of the post
            post = Object.assign(Object.assign({}, post), postData);
            this.posts.set(id, post);
        }
    }
    deletePost(id) {
        this.posts.delete(id);
    }
}
exports.default = InMemoryDB;
