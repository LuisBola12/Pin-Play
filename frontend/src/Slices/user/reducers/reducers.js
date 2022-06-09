export const userReducers = {
  logout: (state) => {
    state.user = null;
    state.userIsLoggedIn = false;
    state.errorMessage = '';
  },

  resetErrorMsg: (state) => {
    state.errorMessage = '';
  },

  setLogIn: (state, action) => {
    state.user = action.payload;
    state.roles = 'admin'
    state.userIsLoggedIn = true;
    state.errorMessage = '';
  }

};