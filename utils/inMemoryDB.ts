// import User from "../models/User";
import Post from "../models/post";
class InMemoryDB {
  private static instance: InMemoryDB;
  // private users: Map<number, User> = new Map();
  private posts: Map<number, Post> = new Map();

  private constructor() {}

  public static getInstance(): InMemoryDB {
    if (!InMemoryDB.instance) {
      InMemoryDB.instance = new InMemoryDB();
    }
    return InMemoryDB.instance;
  }

  // Post Methods
  addPost(post: Post) {
    this.posts.set(post.postId, post);
  }

  getPost(id: number): Post | undefined {
    return this.posts.get(id);
  }

  getAllPosts(): Post[] {
    return Array.from(this.posts.values());
  }

  updatePost(id: number, postData: Partial<Post>) {
    let post = this.posts.get(id);
    if (post) {
      // Update attributes of the post
      post = { ...post, ...postData };
      this.posts.set(id, post);
    }
  }

  deletePost(id: number) {
    this.posts.delete(id);
  }
}
export default InMemoryDB;
