import api from "../../lib/axios";

export const getAllGames = async (
  page = 1,
  pageSize = 20,
  signal?: AbortSignal
) => {
  try {
    const response = await api.get("/games", {
      params: {
        page,
        page_size: pageSize,
      },
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getGenres = async () => {
  try {
    const response = await api.get("/genres");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
