import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FavoritesRepoStore = {
  favoriteReposIDs: number[];
  addToFav: (id: number) => void;
  removeFromFav: (id: number) => void;
};

export const useFavoriteStore = create<FavoritesRepoStore>()(
  persist(
    (set) => ({
      favoriteReposIDs: [],
      addToFav: (id: number) => {
        set((state) => ({
          favoriteReposIDs: [...state.favoriteReposIDs, id],
        }));
      },
      removeFromFav: (repoId: number) => {
        set((state) => ({
          favoriteReposIDs: state.favoriteReposIDs.filter((id) => id != repoId),
        }));
      },
    }),
    {
      name: "favorite-repos", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
