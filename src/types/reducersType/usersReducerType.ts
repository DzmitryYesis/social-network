export type UsersReducerBLLType = {
  items: UsersBLLType[];
  totalCount: number;
  error: string;
};

export type UsersBLLType = {
  id: number;
  name: string;
  status: string;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
};
