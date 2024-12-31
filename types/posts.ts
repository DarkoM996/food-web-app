export interface Post {
  id: string;
  title: string;
  body: string;
  user: string;
  date: number;
  orders: PostOrder[];
}

export interface PostOrder {
  id: string;
  text: string;
  username: string;
}
