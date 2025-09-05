const API_URL = "http://localhost:4000/api/v1";

export const ActivityApi = {
  getActivity: async (id) => {
    const res = await fetch(`${API_URL}/activities/${id}`);
    if (!res.ok) throw new Error("Could not fetch activity");
    return await res.json();
  },

  getActivityUsers: async (activityId) => {
    try {
      const activity = await ActivityApi.getActivity(activityId);
      return activity.users || [];
    } catch (error) {
      console.error("Error fetching activity users:", error);
      return [];
    }
  },

  addUserToActivity: async (userId, activityId, token) => {
    const url = `${API_URL}/users/${userId}/activities/${activityId}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Could not add user to activity");
    return await res.json();
  },

  removeUserFromActivity: async (userId, activityId, token) => {
    const url = `${API_URL}/users/${userId}/activities/${activityId}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Could not remove user from activity");

    if (res.status === 204) return { success: true };

    try {
      return await res.json();
    } catch (e) {
      return { success: true };
    }
  },
};
