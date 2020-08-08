import React, { useEffect, useState } from "react";
import { getCategories } from "../../providers/CategoryProvider";
import { useSelector } from "react-redux";
import CardCategory from './CardCategory';
import { Skeleton } from '@material-ui/lab';
export default function ListCategory() {
  const [Categories, setCategories] = useState([]);
  const [Error, setError] = useState("");
  const user = useSelector((state) => state.user);

  const getAllCat = async () => {
    await getCategories(user).then((response) => {
      setCategories(response.data);
    });
  };
  useEffect(() => {
    getAllCat();
  }, []);
  return (
    <div>
      {
        !Categories.length
          ? <>
            <Skeleton animation="wave" height={60} width="80%" />
            <Skeleton animation="wave" height={60} width="80%" />
            <Skeleton animation="wave" height={60} width="80%" />
          </>
          : <CardCategory Categories={Categories} user={user} />
      }
    </div>
  );
}
