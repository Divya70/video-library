const authReduce = (authState, authAction) => {
  switch (authAction.type) {
    case "LOG_IN":
      return {
        ...authState,
        token: authAction.token,
        user: authAction.user,
      };
    case "SIGN_UP":
      return {
        ...authState,
        token: authAction.token,
        user: authAction.user,
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...authState,
        user: null,
        token: null,
      };
    default:
      authState;
  }
};
export { authReduce };
