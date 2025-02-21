export interface IChannelCardProps {
  id: number;
  image: string | null;
  title: string;
  category: string;
  subscribers: number;
  isActive: boolean;
}

export interface IChannelCardEmits {
  (event: 'delete', channelId: number): void;
}
