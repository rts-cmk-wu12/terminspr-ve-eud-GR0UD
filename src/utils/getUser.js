import getCookie from "./getCookie";

const API_URL = "http://localhost:4000/api/v1";

export default async function getUser() {
  const userId = getCookie("userId");
  const token = getCookie("token");

  console.log("Cookie values:", { userId, token });

  if (!userId || !token) {
    console.log("Missing cookies - userId or token not found");
    return null;
  }

  try {
    const url = `${API_URL}/users/${userId}`;
    console.log("Fetching user from:", url);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.log("API response not ok:", res.status, await res.text());
      return null;
    }

    const user = await res.json();
    console.log("User data received:", user);
    return user;
  } catch (e) {
    console.error("Error fetching user:", e);
    return null;
  }
}
