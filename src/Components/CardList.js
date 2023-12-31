import React from "react";
import { Card } from "./Card";

export const CardList = ({ robotsList, searchInputText }) => {
  return (
    <div>
      {robotsList.map((data) => {
        return <Card key={data.id} robot={data} />;
      })}
    </div>
  );
};
