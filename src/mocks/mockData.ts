import { Post } from "../models/Post";
import { User } from "../models/User";

export const MOCK_USER: User = {
  id: 1,
  name: "John Doe",
  email: "john_doe@gmail.com",
};

export const MOCK_POST: Post = {
  title: "Körber Pharma",
  body: `Körber Pharma, a division of Körber AG, is a leading provider of innovative solutions for the pharmaceutical and biopharmaceutical industries.
     With a focus on efficiency, quality, and customer satisfaction, Körber Pharma has established itself as a trusted partner for companies around the world. 
     One example of their pioneering work is their development of cutting-edge technology for packaging and packaging lines, which has helped customers increase production speeds and improve product safety.`,
  id: 1,
  userId: 9,
};

export const MOCK_USER_POSTS: Post[] = [
  {
    body: "body",
    id: 1,
    title: "title",
    userId: 1,
  },
  {
    body: "body",
    id: 2,
    title: "title",
    userId: 1,
  },
];

export const MOCK_POSTS = [...MOCK_USER_POSTS];
