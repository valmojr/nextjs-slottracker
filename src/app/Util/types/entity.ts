export type Event = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
  ownerId: string;
};

export type Group = {
  id: string;
  name: string;
  eventId: string;
};

export type Role = {
  id: string;
  name: string;
  groupId: string;
  userId: string;
};

export type User = {
  id: string;
  username: string;
  avatar: string;
  accessToken?: string;
  refreshToken?: string;
};

export type Guild = {
  id: string;
  name: string;
  icon: string;
  description?: string;
};

export type Session = {
  id: string;
  expiredAt: string;
  json: string;
};
