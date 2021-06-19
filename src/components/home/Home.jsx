import { useState, useEffect } from "react";

import { checkIfUserExists } from "../../hooks/isAuth";

export default function Home() {
  const [isAuthMessage, setIsAuthMessage] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (checkIfUserExists(email, password) === true) {
      setIsAuthMessage("უკვე დარეგისტრირებული ხართ");
    } else {
      setIsAuthMessage("გთხოვთ დარეგისტრირდით");
    }
  }, [isAuthMessage]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "100px" }}>{isAuthMessage}</h1>
      </div>
    </>
  );
}
