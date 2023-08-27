import { User } from '../types/entity';

export default function AvatarHandler({ id, avatar }: User) {
  return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
}
