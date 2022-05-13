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
    default:
      authState;
  }
};
export { authReduce };
