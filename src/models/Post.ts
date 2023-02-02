export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type PostPayload = {
  title: string;
  body: string;
  userId: number;
};
