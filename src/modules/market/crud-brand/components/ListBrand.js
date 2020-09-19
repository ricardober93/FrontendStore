import React, { useEffect, useState } from "react";
import { getBrands } from "../../providers/BrandProvider";
import { useSelector } from "react-redux";
import CardBrand from './CardBrand';
import { Skeleton } from '@material-ui/lab';
export default function ListBrand() {
  const [brands, setBrands] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getAllBrands();
  }, []);

  const getAllBrands = async () => {
    await getBrands().then((response) => {
      setBrands(response.data);
    });
  };

  return (
    <div>
      {
        brands.length === 0
          ? <>
            <Skeleton animation="wave" height={60} width="80%" />
            <Skeleton animation="wave" height={60} width="80%" />
            <Skeleton animation="wave" height={60} width="80%" />
          </>
          : <CardBrand brands={brands} user={user} getAllBrands={getAllBrands} />
      }
    </div>
  );
}
