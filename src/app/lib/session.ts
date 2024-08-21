import { SessionOptions } from "iron-session";

export interface SessionData {
  username?: string;
}

export const defaultSession: SessionData = {
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
