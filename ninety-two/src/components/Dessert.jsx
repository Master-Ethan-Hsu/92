import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getProductData } from "../api/NTApi";
import { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";

export const Dessert = () => {
  const [productData, setProductData] = useState();
  const [showComponent, setShowComponent] = useState(false);

  const getData = async () => {
    const productData = await getProductData();
    try {
      if (productData) setProductData(productData);
    } catch {
      throw new Error("can't get product data !");
    }
  };

  useEffect(() => {
    getData();
    console.log("call api");
  }, []);

  useEffect(() => {
    console.log("getting data");
    console.log(productData);
    if (productData) {
      setShowComponent(true);
      console.log(productData);
      console.log(
        productData.map((product) => {
          // console.log(product.id);
          console.log(product.name);
          // console.log(product.price);
          // console.log(product.pic);
        })
      );
    }
  }, [productData]);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {showComponent ? (
        productData.map((product, key) => {
          return (
            <Card
              sx={{
                width: 300,
                minHeight: 380,
                my: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              key={key}
            >
              <CardHeader title={product.name} sx={{ py: 0 }} />
              <CardContent sx={{ py: 0 }}>
                <Box
                  component="img"
                  alt="pic"
                  src={product.pic}
                  sx={{ width: 200, height: 200, objectFit: "cover", pl: 4 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {product.note}
                </Typography>
              </CardContent>

              {product.eating && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, px: 1 }}
                >
                  {`食用方式： ${product.eating}`}
                </Typography>
              )}
              <Divider />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ py: 0, display: "flex" }}
              >
                {`價格 ${product.price}`}
              </Typography>
            </Card>
          );
        })
      ) : (
        <Typography>no data</Typography>
      )}
    </Box>
  );
};
