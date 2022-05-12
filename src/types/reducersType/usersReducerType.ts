export type UsersReducerType = {
  users: UsersPagePropsType[];
};

export type UsersPagePropsType = {
  id: number;
  followed: boolean;
  fullName: string;
  logo: string;
  status: string;
  location: LocationType;
};

type LocationType = {
  country: string;
  city: string;
};
