import Post from "../models/post";
import InMemoryDB from "../utils/inMemoryDB";
import { PostDataAccess } from "./PostDataAccess";

export class PostDataAccessInMemory implements PostDataAccess<Post> {
  private db = InMemoryDB.getInstance();

  async add(post: Post): Promise<void> {
    await this.db.addPost(post);
  }

  async get(postId: number): Promise<Post> {
    const post = await this.db.getPost(postId);
    if (!post) {
      throw new Error(`Post with ID ${postId} not found`);
    }
    return post;
  }

  async getAll(): Promise<Post[]> {
    return this.db.getAllPosts();
  }

  async update(postId: number, updateData: Partial<Post>): Promise<void> {
    const existingPost = await this.db.getPost(postId);
    if (!existingPost) {
      throw new Error(`Post with ID ${postId} not found`);
    }
    this.db.updatePost(postId, updateData);
  }

  async delete(postId: number): Promise<void> {
    const existingPost = await this.db.getPost(postId);
    if (!existingPost) {
      throw new Error(`Post with ID ${postId} not found`);
    }
    this.db.deletePost(postId);
  }
}
