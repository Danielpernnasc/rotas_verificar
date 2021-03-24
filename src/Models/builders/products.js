import faker from "faker";

import RoadPlaceHolder from "stories/assets/road-220058_1280.jpg";
import Products from './fixtures/products.json';

export const buildProductList  = (size) => {
    const result = [];

    for (let i = 0; i < size; i += 1) {
        result.push({
            ...Products[i],
            image: RoadPlaceHolder,
        });
    }
    return result;
};


