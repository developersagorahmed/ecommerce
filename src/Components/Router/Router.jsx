import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Details from "../Details/Details";
import Main from "../Main/Main";
import Payment from "../Payment/Payment";
import AdminHome from "../Admin/AdminHome";
import Admin from "../Admin/AdminPage/Admin";
import AddProduct from "../Admin/AdminPage/AddProduct";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import Success from "../Success/Success";
import Inva from "../Admin/ManageProducts/Inva";
import Dashboard from "../Admin/AdminPage/Dashboard/Dashboard";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <App></App>,
			},
			{
				path: "products/:id",
				element: <Details></Details>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/products/${params.id}`),
			},
			{
				path: "payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/products/${params.id}`),
			},
			{
				path: "/success",
				element: <Success></Success>,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminHome></AdminHome>,
	},
	{
		path: "/admin/home",
		element: <Admin></Admin>,
		children: [
			{
				path: "admin/addProduct",
				element: <AddProduct></AddProduct>,
			},
			{
				path: "admin/manageProduct",
				element: <ManageProducts></ManageProducts>,
				loader: ({ params }) => fetch("http://localhost:5000/buyProducts"),
			},
			{
				path: "admin/inv/:id",
				element: <Inva></Inva>,
			},
			{
				path: "admin/dashboard",
				element: <Dashboard></Dashboard>,
				loader: ({ params }) => fetch("http://localhost:5000/buyProducts"),
			},
		],
	},
]);
