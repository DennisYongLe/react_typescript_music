import React from "react";
import { RouteObject } from "react-router-dom";
import Discovery from "@/views/discovery";
const routes: RouteObject[] = [
  {
    path: "/discovery",
    // 因为这里需要创建组件实例，需要用到jsx语法，所以router定义成index.tsx
    element: <Discovery />
  }
];
export default routes;
