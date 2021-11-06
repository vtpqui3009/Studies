import React from "react";
import PostDetailRoute from "../routes/PostDetailRoute";
import HomeRoute from "../routes/HomeRoute";
import FilterPostByCategoryRoute from "../routes/FilterPostByCategoryRoute";
import UserInforRoute from "../routes/UserInforRoute";
import ManagePostRoute from "../routes/ManagePostRoute";
import AddPostRoute from "../routes/AddPostRoute";
import UpdatePostRoute from "../routes/UpdatePostRoute";
import ManageCategoryRoute from "../routes/ManageCategoryRoute";
import AddCategoryRoute from "../routes/AddCategoryRoute";
import UpdateCategoryRoute from "../routes/UpdateCategoryRoute";
import Auth from "../users/pages/Auth";
import { Route, Redirect } from "react-router-dom";
const Author = () => {
    return (
        <React.Fragment>
            <Route path="/" exact>
                <HomeRoute />
            </Route>
            <Route path="/post/:postId" exact>
                <PostDetailRoute />
            </Route>
            <Route path="/manage-post" exact>
                <ManagePostRoute />
            </Route>
            <Route path="/add-post" exact>
                <AddPostRoute />
            </Route>
            <Route path="/post/update/:postId" exact>
                <UpdatePostRoute />
            </Route>
            <Route path="/manage-category" exact>
                <ManageCategoryRoute />
            </Route>
            <Route path="/add-category" exact>
                <AddCategoryRoute />
            </Route>
            <Route path="/category/update/:cid" exact>
                <UpdateCategoryRoute />
            </Route>
            <Route path="/:cid/filter-post" exact>
                <FilterPostByCategoryRoute />
            </Route>
            <Route path="/user-info" exact>
                <UserInforRoute />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Redirect to="/" />
        </React.Fragment>
    );
};
export default Author;

// routes = (
//     <React.Fragment>
//         <Route path="/" exact>
//             <HomeRoute />
//         </Route>
//         <Route path="/auth" exact>
//             <Auth />
//         </Route>
//         <Route path="/post/:postId" exact>
//             <PostDetailRoute />
//         </Route>
//         <Route path="/:cid/filter-post" exact>
//             <FilterPostByCategoryRoute />
//         </Route>
//         <Redirect to="/" />
//     </React.Fragment>
// );
// }
