import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export default function Page2(props) {
    var items = [
        {
        name: "Item 1",
        description: "Description 1",
        },
        {
        name: "Item 2",
        description: "Description 2",
        },
    ];

    return (
        <Carousel>
        {items.map((item, i) => (
            <Item key={i} item={item} />
        ))}
        </Carousel>
    );
    }

    function Item(props) {
    return (
        <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        </Paper>
    );
}
