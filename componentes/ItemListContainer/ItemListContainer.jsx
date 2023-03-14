import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";


export const ItemListContainer = (props) => {
  //const [IsLoading, setIsLoading] = useState(true);
  const [listItem, setListItem] = useState([]);
  const { idCategory } = useParams();

  const getListItemService = () => {
    FgetProducts().then((listItems) => {
      setListItem(listItems);
    });
  };

  const getListItemCategoryService = () => {
    FgetProductsByCategory(idCategory).then((listItems) => {
      setListItem(listItems);
    });
  };

  useEffect(() => {
    if (!idCategory) {
      getListItemService();
    } else {
      getListItemCategoryService();
    }
  }, [idCategory]);

  return (
    <div>
      <div className="gretting">
        <h2>{props.greeting}</h2>
      </div>
      {/* <div>
        <ItemCount stock={5} initial={1} onAdd={handlerAdd} />
      </div> */}
      <div>
        <ItemList listItem={listItem} />
      </div>
    </div>
  );
};