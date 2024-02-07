import { Pool, QueryResult } from "pg";
import Post from "../models/post";
import { PostDataAccess } from "./PostDataAccess";
import { pool } from "./DBConnect"; // Assuming you have a pool instance created in DBConnect
import { log } from "console";

export class PostRepository implements PostDataAccess<Post> {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  public async add(post: Post): Promise<void> {
    const query = {
      text: "INSERT INTO posts (postId, title, content) VALUES ($1, $2, $3)",
      values: [post.postId, post.title, post.content],
    };

    try {
      await this.pool.query(query);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  }

  public async delete(id: number): Promise<void> {
    const query = {
      text: "DELETE FROM post WHERE id = $1",
      values: [id],
    };

    try {
      await this.pool.query(query);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  public async update(
    postId: number,
    updateData: Partial<Post>
  ): Promise<void> {
    const allowedFields = ["title", "content"];
    const updateFields = Object.keys(updateData)
      .filter((key) => allowedFields.includes(key))
      .map((key, index) => `${key} = $${index + 2}`)
      .join(", ");

    const query = {
      text: `UPDATE post SET ${updateFields} WHERE id = $1`,
      values: [
        ...Object.values(updateData).filter((value) => value !== undefined),
      ],
    };

    try {
      await this.pool.query(query);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  public async get(id: number): Promise<Post | null> {
    const query = {
      text: "SELECT * FROM post WHERE id = $1",
      values: [id],
    };

    try {
      const result: QueryResult = await this.pool.query(query);
      return result.rows[0] || null;
    } catch (error) {
      console.error("Error getting post:", error);
      return null;
    }
  }

  public async getAll(): Promise<Post[]> {
    const query = "SELECT * FROM post";

    try {
      const result: QueryResult = await this.pool.query(query);
      return result.rows;
    } catch (error) {
      console.error("Error getting all posts:", error);
      return [];
    }
  }
}
