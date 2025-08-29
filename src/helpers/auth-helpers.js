import { auth } from "../auth";
import { config } from "./config";

export const getAuthHeader = async () => {
  const session = await auth();
  const token = session?.accessToken;

  let authHeader = {
    "Content-Type": "application/json",
  };

  if (token) {
    authHeader = {
      ...authHeader,
      Authorization: `${token}`,
    };
  }

  return authHeader;
};

const parseJWT = (token) => {
  // token.split(.) --> token'ı noktalardan ayırıp ayrılan 3 parçayı array içerisine koyar.
  // atob(...) --> şifrelenmiş datayı çözer

  return JSON.parse(atob(token.split(".")[1]));
};

export const getIsTokenValid = (token) => {
  if (!token) return false;

  const jwtExpireTimeStamp = parseJWT(token).exp;
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);

  return jwtExpireTimeStamp >= currentTimestamp;
};

export const getIsUserAuthorized = (role, path) => {
  const userRight = config.userRightsOnRoutes.find((item) =>
    item.urlRegex.test(path)
  );

  if (!userRight) return false;
  return userRight.roles.includes(role);
};
