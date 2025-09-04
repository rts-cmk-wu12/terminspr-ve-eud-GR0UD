export async function addUserToActivity(userId, activityId, token) {
  const url = `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Could not add user to activity");
  return await res.json();
}

export async function removeUserFromActivity(userId, activityId, token) {
  const url = `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Could not remove user from activity");
  return await res.json();
}
