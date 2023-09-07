import React, { useState } from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
  } from "@mui/material";

import Header from "components/Header";
import { useGetProductsQuery } from "state/api";

const Products = () => {
    const { data, isLoading } = useGetProductsQuery();
    console.log("data",data);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box>
            <Header title="PRODUCTS" subtitle="See your list of products." />
        </Box>
    )
}

export default Products