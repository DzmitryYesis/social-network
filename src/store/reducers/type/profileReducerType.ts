export type ProfilePagePropsType = {
  postsData: PostDataPropsType[];
  newPost: string;
};

type PostDataPropsType = {
  id: number;
  post: string;
  numberLike: number;
};
