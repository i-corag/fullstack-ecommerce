import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWishListStore = create(
  persist(
    (set) => ({
      wishlist: [],
      addToWishlist: (product) =>
        set((state) => ({ wishlist: [...state.wishlist, { ...product }] })),

      removeFromWishlist: (product) =>
        set((state) => ({
          wishlist: state.wishlist.filter((x) => x.id !== product.id),
        })),
      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: 'wishlist',
    }
  )
);

export { useWishListStore };
