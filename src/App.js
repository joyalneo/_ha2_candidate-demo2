import React, { Suspense } from "react";
import Candidates from "./components/candidates/Candidates.js";
export default function App() {
  return (
    <Suspense fallback="">
      <Candidates />
    </Suspense>
  );
}
