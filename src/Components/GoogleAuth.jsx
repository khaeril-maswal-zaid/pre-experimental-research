import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const GoogleAuth = () => {
  const CLIENT_ID =
    "137098502415-grfqovb6b5ftva76n67422ln4uiqnuqu.apps.googleusercontent.com"; // Ganti dengan Client ID Anda

  useEffect(() => {
    function start() {
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            clientId: CLIENT_ID,
            scope: "https://www.googleapis.com/auth/analytics.readonly",
          })
          .then(() => {
            console.log("GAPI client loaded and initialized");
          })
          .catch((err) =>
            console.error("Error initializing GAPI client:", err)
          );
      });
    }
    start();
  }, []);

  const handleLogin = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2
      .signIn()
      .then((user) => {
        const profile = user.getBasicProfile();
        const accessToken = user.getAuthResponse().access_token;

        console.log("Nama:", profile.getName());
        console.log("Email:", profile.getEmail());
        console.log("Token:", accessToken);

        // Simpan token untuk digunakan nanti
        localStorage.setItem("accessToken", accessToken);
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login dengan Google</button>
    </div>
  );
};

export default GoogleAuth;
