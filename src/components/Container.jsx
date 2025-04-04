import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 px-8 py-4 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default Container;
