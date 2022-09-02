import axios from "axios";

const imgKey = "02ba62e32bc72270a0d61168b2deda25";
const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;

export const imgUpload = async (image) => {
  try {
    const { data } = await axios.post(url, image);
    return data;
  } catch (error) {
    throw error;
  }
};
