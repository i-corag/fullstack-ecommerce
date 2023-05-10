import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartProducts: [],

      addToCart: (product, quantity) => {
        set((state) => {
          const existInCart = get().cartProducts.find(
            (x) => x.id === product.id
          );
          if (!existInCart) {
            return {
              cartProducts: [...state.cartProducts, { ...product, quantity }],
            };
          }
          const updatedCartProducts = get().cartProducts.map((x) =>
            x.id === product.id
              ? { ...product, quantity: product.quantity + quantity }
              : x
          );
          return { cartProducts: updatedCartProducts };
        });
      },

      removeFromCart: (product, quantity) =>
        set((state) => {
          const existInCart = get().cartProducts.findIndex(
            (x) => x.id === product.id
          );
          if (existInCart === -1) {
            return { ...state };
          }
          const updatedCartProducts = get()
            .cartProducts.map((x) =>
              x.id === product.id
                ? { ...x, quantity: Math.max(x.quantity - quantity, 0) }
                : x
            )
            .filter((x) => x.quantity);
          return { cartProducts: updatedCartProducts };
        }),

      deleteProduct: (id) =>
        set({
          cartProducts: get().cartProducts.filter((x) => x.id !== id),
        }),

      clearCart: () => set({ cartProducts: [] }),
    }),
    {
      name: 'cartProducts',
    }
  )
);

export { useCartStore };
