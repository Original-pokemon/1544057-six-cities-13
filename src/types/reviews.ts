export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ReviewType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
};

export type OfferReviewType = {
  id: string;
  reviews: ReviewType[];
};
