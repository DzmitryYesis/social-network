import { FriendsDataPropsType } from 'types';

const initialState = {
  friendsData: [
    {
      id: 1,
      name: 'Вася',
      logo: 'https://www.meme-arsenal.com/memes/87d4bfeed251dba0ce946e9e594dbdb6.jpg',
    },
    {
      id: 2,
      name: 'Слава',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb7SOxwRvIFEmASzSMODt5uyBrC1IF11vNl9hA4LQ5XeSIKX-J0fqhRruNH4Q4VP0HJA&usqp=CAU',
    },
    {
      id: 3,
      name: 'Victor',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICcLEiVZAd8p9NH7V2-xhJg_mrCvzIUswvyfZlnu1DuYspqNltDOUXtkzskIain1gJmI&usqp=CAU',
    },
  ],
};

export const sidebarReducer = (
  state: FriendsDataPropsType = initialState,
): FriendsDataPropsType => ({ ...state });
