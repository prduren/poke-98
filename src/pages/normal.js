import React from "react";
import { Route } from "react-router-dom";

function NormalPage() {
  return (
    <Route path="/normal">
      <div>this is the normal page</div>
    </Route>
  );
}

export default NormalPage;
