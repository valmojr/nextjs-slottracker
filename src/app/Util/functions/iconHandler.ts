import { Guild } from '../types/entity';

export default function IconHandler({ id, icon }: Guild) {
  return `https://cdn.discordapp.com/icons/${id}/${icon}.png`;
}
