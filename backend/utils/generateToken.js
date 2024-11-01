import jwt from "jsonwebtoken";

const NODE_ENV = "development";
const JWT_SECRET = "Your env var";
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, 
    httpOnly: true,
    sameSite: "strict",
    secure: NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
