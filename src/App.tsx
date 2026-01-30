import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

// Info Pages
import { ForSellers } from "./pages/ForSellers";
import { ForBuyers } from "./pages/ForBuyers";

// Auth Pages
import { SellerSignup } from "./pages/SellerSignup";
import { SellerLogin } from "./pages/SellerLogin";
import { BuyerSignup } from "./pages/BuyerSignup";
import { BuyerLogin } from "./pages/BuyerLogin";

// Seller Pages
import { SellerDashboard } from "./pages/seller/SellerDashboard";
import { SellerProducts } from "./pages/seller/SellerProducts";
import { SellerOrders } from "./pages/seller/SellerOrders";
import { SellerProfile } from "./pages/seller/SellerProfile";
import { AddProduct } from "./pages/seller/AddProduct";

// Buyer Pages
import { Marketplace } from "./pages/buyer/Marketplace";
import { ProductDetail } from "./pages/buyer/ProductDetail";
import { Cart } from "./pages/buyer/Cart";
import { BuyerOrders } from "./pages/buyer/BuyerOrders";
import { BuyerProfile } from "./pages/buyer/BuyerProfile";
import { Checkout } from "./pages/buyer/Checkout";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <AppLayout />,
    children: [
      // Info Routes
      {
        path: "/for-sellers",
        element: <ForSellers />,
      },
      {
        path: "/for-buyers",
        element: <ForBuyers />,
      },
      {
        path: "/how-it-works",
        element: (
          <main>
            <HowItWorks />
          </main>
        ),
      },
      // Auth Routes
      {
        path: "/seller/signup",
        element: <SellerSignup />,
      },
      {
        path: "/seller/login",
        element: <SellerLogin />,
      },
      {
        path: "/buyer/signup",
        element: <BuyerSignup />,
      },
      {
        path: "/buyer/login",
        element: <BuyerLogin />,
      },
      // Seller Routes
      {
        path: "/seller/dashboard",
        element: <SellerDashboard />,
      },
      {
        path: "/seller/products",
        element: <SellerProducts />,
      },
      {
        path: "/seller/products/add",
        element: <AddProduct />,
      },
      {
        path: "/seller/orders",
        element: <SellerOrders />,
      },
      {
        path: "/seller/profile",
        element: <SellerProfile />,
      },
      // Buyer Routes
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/buyer/orders",
        element: <BuyerOrders />,
      },
      {
        path: "/buyer/profile",
        element: <BuyerProfile />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}