class Post {
  postId: number;
  title: string;
  content: string;
  // postedBy: number; // user ID

  constructor(postId: number, title: string, content: string) {
    this.postId = postId;
    this.title = title;
    this.content = content;
  }
}
export default Post;
