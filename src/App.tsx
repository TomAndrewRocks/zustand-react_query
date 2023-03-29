import React, { useCallback } from "react";
import useFetchRepos from "./query/repo/repos";
import { CardComponent } from "./components/Card";
import { LayoutContainer } from "./components/Layout";
import { useFavoriteStore } from "./contexts/useFavoriteStore";

export const App = () => {
  const { data } = useFetchRepos("TomAndrewRocks");
  console.log(data);
  const favoriteReposIDs = useFavoriteStore((state) => state.favoriteReposIDs);
  const addToFav = useFavoriteStore((state) => state.addToFav);
  const removeFromFav = useFavoriteStore((state) => state.removeFromFav);

  const handleAddToFav = useCallback((repoId: number) => {
    addToFav(repoId);
  }, []);

  const handleRemoveToFav = useCallback((repoId: number) => {
    removeFromFav(repoId);
  }, []);

  return (
    <LayoutContainer>
      {!data
        ? "loading..."
        : data?.map((repo) => (
            <CardComponent
              key={repo.id}
              isFavorite={favoriteReposIDs.includes(repo.id)}
              repo={repo}
              addToFav={handleAddToFav}
              removeFromFav={handleRemoveToFav}
            />
          ))}
    </LayoutContainer>
  );
};
