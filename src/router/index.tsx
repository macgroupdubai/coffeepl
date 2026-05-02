import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoader from "../components/PageLoader";

// ✅ Lazy-loaded screens
const Home = lazy(() => import("../screens/Home"));
const Machine = lazy(() => import("../screens/Machine"));
const Subscription = lazy(() => import("../screens/Subscription"));
const Rental = lazy(() => import("../screens/Rental"));
const Shop = lazy(() => import("../screens/Shop"));
const Training = lazy(() => import("../screens/Training"));
const Wholesale = lazy(() => import("../screens/Wholesale"));
const Contacts = lazy(() => import("../screens/Contacts"));
const Coffee = lazy(() => import ("../screens/Coffee"))
const ProductDetails = lazy(() => import("../screens/ProductDetails"));
const Discounts = lazy(() => import("../screens/Discounts"));
// ✅ Route definitions (clean, one per page)
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/machine",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Machine />
      </Suspense>
    ),
  },
  {
    path: "/subscription",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Subscription />
      </Suspense>
    ),
  },
  {
    path: "/rental",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Rental />
      </Suspense>
    ),
  },
  {
    path: "/shop",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Shop />
      </Suspense>
    ),
  },
  {
    path: "/discounts",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Discounts />
      </Suspense>
    ),
  },
  {
    path: "/training",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Training />
      </Suspense>
    ),
  },
  {
    path: "/wholesale",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Wholesale />
      </Suspense>
    ),
  },
  {
    path: "/contacts",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Contacts />
      </Suspense>
    ),
  },
   {
    path: "/coffee",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Coffee />
      </Suspense>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ProductDetails />
      </Suspense>
    ),
  },
]);

export default router;
