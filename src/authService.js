import { isAuthenticated, user, token } from "./store";

function fakeLogin() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ token: "sfgbnsfonbmspfsnbgrf" }), 2000),
  );
}

function fakeUser() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ name: "Doe", surname: "John" }), 2000),
  );
}

async function login() {
  try {
    let res;
    res = await fakeLogin();
    token.set(res.token);
    isAuthenticated.set(true);
    res = await fakeUser();
    user.set(res);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  } finally {
  }
}

function logout() {
  isAuthenticated.set(false);
  token.set(null);
  user.set({});
}

const auth = {
  login,
  logout,
};
export default auth;
