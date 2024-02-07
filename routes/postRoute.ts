import express, { Request, Response } from "express";
import { PostController } from "../Controllers/postController";
import { PostBL } from "../BL/postBL";
import { PostRepository } from "../DAL/postRepository";

const router = express.Router();
const postController = new PostController(new PostBL(new PostRepository()));

router.post(
  "/",
  async (req: Request, res: Response) => await postController.addPost(req, res)
);
router.get(
  "/:id",
  async (req: Request, res: Response) => await postController.getPost(req, res)
);
router.put(
  "/:id",
  async (req: Request, res: Response) =>
    await postController.updatePost(req, res)
);
router.delete(
  "/:id",
  async (req: Request, res: Response) =>
    await postController.deletePost(req, res)
);
router.get(
  "/",
  async (req: Request, res: Response) =>
    await postController.getAllPosts(req, res)
);

export default router;
