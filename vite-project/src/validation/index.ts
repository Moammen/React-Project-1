

import type { IProduct } from "../interfaces";

export const productValidation = ( {title, description, imageURL, price} :IProduct ) => {
  const erroors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  if (!title) {
    erroors.title = "Title is required";
  }
  if (!title.trim() || title.length < 3 || title.length > 50) {
    erroors.title = "Title must be at least 3 characters long and not exceed 50 characters";
  }

  if (!description) {
    erroors.description = "Description is required";
  }
  if (!description.trim() || description.length < 10 || description.length > 500) {
    erroors.description = "Description must be at least 10 characters long and not exceed 500 characters";
  }
  if (!imageURL) {
    erroors.imageURL = "Image URL is required";
  }
  if (!imageURL.trim() || !/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/.test(imageURL)) {
    erroors.imageURL = "Image URL must be a valid URL and end with an image file extension (jpg, jpeg, png, gif, bmp, webp)";
  }
  if (!price) {
    erroors.price = "Price is required";
  }
  if (typeof price !== "string") {
    erroors.price = "Price must be a string";
  } else if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
    erroors.price = "Price must be a positive number";
  }

  return erroors;
}
