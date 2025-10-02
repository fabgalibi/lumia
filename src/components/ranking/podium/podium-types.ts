export interface PodiumUser {
  name: string;
  initials: string;
  percentage: number;
  avatarUrl?: string;
}

export interface PodiumData {
  first: PodiumUser;
  second: PodiumUser;
  third: PodiumUser;
}

