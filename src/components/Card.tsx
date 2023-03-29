import React from "react";
import { Card, Button, Text } from "@involves/violin";
import { IRepo } from "../query/repo/types";

type CardProps = {
  repo: IRepo;
  isFavorite: boolean;
  addToFav: (id: number) => void;
  removeFromFav: (id: number) => void;
};

export const CardComponent = ({
  isFavorite,
  repo,
  addToFav,
  removeFromFav,
}: CardProps) => {
  function handleToggleIsFav() {
    if (isFavorite) {
      removeFromFav(repo.id);
    } else {
      addToFav(repo.id);
    }
  }

  return (
    <Card
      title={`${repo.name}`}
      style={{
        background: "black",
        color: "white",
        margin: 20,
        minWidth: 600,
      }}
      actions={
        <div
          style={{
            display: "flex",
            width: 150,
            justifyContent: "space-evenly",
          }}
        >
          <Button onClick={handleToggleIsFav}>
            {!isFavorite ? "addToFav" : "RemovefromFav"}
          </Button>
        </div>
      }
    >
      <Text style={{ width: 400}}>{repo.description}</Text>
    </Card>
  );
};
