import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: number;
  username?: string;
}

export const defaultSession: SessionData = {
  userId: undefined,
  username: undefined,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: process.env.COOKIE_NAME!,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
