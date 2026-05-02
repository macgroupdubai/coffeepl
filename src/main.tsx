import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import './index.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
