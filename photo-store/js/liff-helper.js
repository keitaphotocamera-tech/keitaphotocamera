window.AppLIFF = {
  profile: null,

  async init() {
    await liff.init({
      liffId: CONFIG.LIFF_ID
    });

    if (!liff.isLoggedIn()) {
      liff.login({
        redirectUri: window.location.href
      });
      return null;
    }

    const profile = await liff.getProfile();
    this.profile = profile;

    localStorage.setItem("line_user_id", profile.userId);
    localStorage.setItem("line_display_name", profile.displayName || "");
    localStorage.setItem("line_picture", profile.pictureUrl || "");

    return profile;
  },

  getProfile() {
    return this.profile;
  },

  getLineUserId() {
    return localStorage.getItem("line_user_id");
  },

  getCartKey() {
    const userId = this.getLineUserId() || "guest";
    return `photo_cart_${userId}`;
  }
};
