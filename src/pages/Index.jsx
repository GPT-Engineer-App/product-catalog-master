import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a description for product 1.",
    price: "$10.00",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a description for product 2.",
    price: "$20.00",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a description for product 3.",
    price: "$30.00",
    image: "/images/product3.jpg",
  },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-3xl text-center mb-4">Products Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <CardContent>
              <p>{product.description}</p>
              <p className="mt-2 font-bold">{product.price}</p>
              <Button variant="outline" className="mt-4 w-full">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;