import axios from "axios";

const imgKey = process.env.REACT_APP_IMG_API;
const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;

export const imgUpload = async (image) => {
  try {
    const { data } = await axios.post(url, image);
    return data;
  } catch (error) {
    throw error;
  }
};
