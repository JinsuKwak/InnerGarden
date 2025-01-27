const removeToken = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
};

export default removeToken;