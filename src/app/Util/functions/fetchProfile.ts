import { User } from '../types/entity';

export default async function fetchProfile(sid: string) {
  const request = await fetch(`${process.env.BACKEND_API_URL}/userme/${sid}`);

  const profile: User = await request.json();

  return profile;
}
