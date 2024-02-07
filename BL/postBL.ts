import { PostDataAccess } from "../DAL/PostDataAccess";
import Post from "../models/post";

export class PostBL {
  private postDataAccess: PostDataAccess<Post>;

  constructor(postDataAccess: PostDataAccess<Post>) {
    this.postDataAccess = postDataAccess;
  }

  async addPost(post: Post): Promise<void> {
    try {
      await this.postDataAccess.add(post);
    } catch (error) {
      throw new Error(`Unable to add Post: ${(error as Error).message}`);
    }
  }

  async getPost(postId: number): Promise<Post> {
    const Post = await this.postDataAccess.get(postId);
    if (!Post) {
      throw new Error(`Post with ID ${postId} not found`);
    }
    return Post;
  }

  async updatePost(postId: number, updateData: Partial<Post>): Promise<void> {
    try {
      await this.postDataAccess.update(postId, updateData);
    } catch (error) {
      throw new Error(`Unable to update Post: ${(error as Error).message}`);
    }
  }

  async deletePost(postId: number): Promise<void> {
    try {
      await this.postDataAccess.delete(postId);
    } catch (error) {
      throw new Error(`Unable to delete Post: ${(error as Error).message}`);
    }
  }

  async getAllPosts(): Promise<Post[]> {
    try {
      const posts = await this.postDataAccess.getAll();
      return posts;
    } catch (error) {
      throw new Error(`No Posts to display`);
    }
  }
}
