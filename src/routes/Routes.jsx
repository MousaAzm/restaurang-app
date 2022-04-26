import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { BooktableView, HomeView }  from "../views"
import RoutingPath from "./RoutingPath"

const Routes = ({children}) => {
    return (
        <BrowserRouter> 
        {children}
        <Switch>
           <Route path ={RoutingPath.homeView} element={<HomeView/>} />
           <Route path ={RoutingPath.booktableView} element={<BooktableView/>} />   
        </Switch>
        
        </BrowserRouter>
    )
}

export default Routes