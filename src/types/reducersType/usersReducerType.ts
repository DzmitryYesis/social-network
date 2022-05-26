// export type UsersReducerType = {
//   users: UsersPagePropsType[];
// };

// export type UsersPagePropsType = {
//   id: number;
//   followed: boolean;
//   fullName: string;
//   logo: string;
//   status: string;
//   location: LocationType;
// };
//
// type LocationType = {
//   country: string;
//   city: string;
// };

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
