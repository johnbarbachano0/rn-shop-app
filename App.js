import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import fetchFonts from "./constants/Fonts";
import Navigation from "./navigation/Navigation";
import OrientationContext from "./context/OrientationContext";
import ProductsContext from "./context/ProductsContext";

export default function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <OrientationContext>
      <ProductsContext>
        <Navigation />
      </ProductsContext>
    </OrientationContext>
  );
}
