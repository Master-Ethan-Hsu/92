import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
export const Product = () => {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {showComponent ? (
        productData.map((product, key) => {
          return (
            <Box
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
              <Box title={product.name} sx={{ py: 0 }} />
              <Box sx={{ p: 0 }}>
                <Box
                  component="img"
                  sx={{ minHeight: 300 }}
                  width="100%"
                  src={product.pic}
                  alt="Paella dish"
                />
                <Typography variant="body2" color="text.secondary">
                  {product.note}
                </Typography>
              </Box>

              <Divider />
              {product.eating && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, px: 1 }}
                >
                  {`食用方式： ${product.eating}`}
                </Typography>
              )}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, px: 1, py: 0, display: "flex" }}
              >
                {`NT ${product.price}`}
              </Typography>
            </Box>
          );
        })
      ) : (
        <Typography>no data</Typography>
      )}
    </Box>
  );
};

export default Product;
