import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "fashion",
  },
  {
    _id: uuid(),
    category: "study",
  },
  {
    _id: uuid(),
    category: "music",
  },
  {
    _id: uuid(),
    category: "comedy",
  },
];
