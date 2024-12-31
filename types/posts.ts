export interface Post {
  id: string;
  title: string;
  body: string;
  user: string;
  date: string;
  comments: PostComment[];
}

export interface PostComment {
  id: string;
  text: string;
  username: string;
}
