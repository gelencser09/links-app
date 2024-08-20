import { SessionOptions } from "iron-session";

export interface SessionData {
  username?: string;
}

export const defaultSession: SessionData = {
  username: undefined,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "links-gelencser-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
