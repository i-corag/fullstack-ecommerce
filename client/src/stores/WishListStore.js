import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const WishListStore = create(
  persist(
    (set) => ({
      wishlist: [],
      addToWishlist: (id) =>
        set((state) => ({ wishlist: [...state.wishlist, id] })),
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((product) => product !== id),
        })),
    }),
    {
      name: 'wishlist',
    }
  )
);

export { WishListStore };
