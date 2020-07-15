import Signin from "./modules/user/auth/components/SingIn";
import Cart from "./modules/market/cart/pages/Cart";
import PanelCustomization from "./modules/customization/pages/PanelCustomization";
import ListProduct from "./modules/market/products/pages/ListProducts";
import OverView from "./modules/market/dashboard/pages/OverView";
import CreateProduct from "./modules/market/dashboard/pages/CreateProduct";
import ProductoAdmin from "./modules/market/dashboard/pages/ProductAdmin";
import ShippingAdmin from "./modules/market/dashboard/pages/ShippingAdmin";
import FormLogin from "./modules/user/auth/components/FormLogin";
import Profile from "./modules/user/profile/components/Profile";
import Recovery from "./modules/user/recovery/components/Recovery";
import ProductDetail from "./modules/market/products/pages/ProductDetail";
import Payment from "./modules/market/dashboard/pages/Payment";

export const routes = [
    {
        path:'/',
        exact: true,
        component:ListProduct
    },
    {
        path:'/product/:id',
        exact: true,
        component:ProductDetail
    },
    {
        path:'/login',
        exact: true,
        component:FormLogin
    },
    {
        path:'/signin',
        exact: true,
        component:Signin
    },
    {
        path:'/restore',
        exact: true,
        component:Recovery
    },
    {
        path:'/profile',
        exact: true,
        component:Profile
    },
    {
        path:'/cart',
        exact: true,
        component:Cart
    },
    {
        path:'/customization',
        exact: true,
        component:PanelCustomization
    },
    {
        path:'/dashboard',
        exact: true,
        component:OverView
    },
    {
        path:'/dashboard-create-product',
        exact: true,
        component:CreateProduct
    },
    {
        path:'/dashboard-product',
        exact: true,
        component:ProductoAdmin
    },
    {
        path:'/dashboard-shipping',
        exact: true,
        component:ShippingAdmin
    },
    {
        path:'/dashbaord-payment',
        exact: true,
        component:Payment
    },

]