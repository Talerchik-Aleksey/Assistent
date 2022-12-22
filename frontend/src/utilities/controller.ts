import axios from "axios";

export async function postNewFavorites(favorites: Array<string>) {
  const response = await axios.post(
    "/favorites/update-favorites",
    {
      favorites: favorites,
    },
    {
      headers: { Authorization: "Bearer " + localStorage.getItem("Token") },
    }
  );
}
