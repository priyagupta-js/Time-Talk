import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { User } from "../models/User.js";
import { signAccess, signRefresh, setAuthCookies, clearAuthCookies } from "../utils/token.js";

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, username, email, password } = req.body;

  const exists = await User.findOne({ $or: [{ email }, { username: username.toLowerCase() }] });
  if (exists) return res.status(409).json({ message: "Email or username already in use" });

  const user = await User.create({ name, username: username.toLowerCase(), email, password });
  const accessToken = signAccess({ uid: user._id });
  const refreshToken = signRefresh({ uid: user._id, tv: user.tokenVersion });

  setAuthCookies(res, accessToken, refreshToken);
  res.status(201).json({
    user: { id: user._id, name: user.name, username: user.username, email: user.email, avatarUrl: user.avatarUrl, bio: user.bio }
  });
};

export const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { usernameOrEmail, password } = req.body;
  const user = await User.findOne({
    $or: [{ email: usernameOrEmail.toLowerCase() }, { username: usernameOrEmail.toLowerCase() }]
  }).select("+password");
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const ok = await user.comparePassword(password);
  if (!ok) return res.status(400).json({ message: "Invalid credentials" });

  const accessToken = signAccess({ uid: user._id });
  const refreshToken = signRefresh({ uid: user._id, tv: user.tokenVersion });
  setAuthCookies(res, accessToken, refreshToken);

  res.json({
    user: { id: user._id, name: user.name, username: user.username, email: user.email, avatarUrl: user.avatarUrl, bio: user.bio }
  });
};

export const refresh = async (req, res) => {
  try {
    const token = req.cookies?.refresh_token;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET); // { uid, tv, iat, exp }
    const user = await User.findById(decoded.uid);
    if (!user) return res.status(401).json({ message: "Invalid refresh token" });
    if (decoded.tv !== user.tokenVersion) return res.status(401).json({ message: "Token expired (version mismatch)" });

    const accessToken = signAccess({ uid: user._id });
    const refreshToken = signRefresh({ uid: user._id, tv: user.tokenVersion });
    setAuthCookies(res, accessToken, refreshToken);

    res.json({ ok: true });
  } catch (e) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};

export const logout = async (req, res) => {
  clearAuthCookies(res);
  res.json({ ok: true });
};


