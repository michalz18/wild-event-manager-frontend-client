import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router.js';
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.min.js";
import "./styles/styles.scss";




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

