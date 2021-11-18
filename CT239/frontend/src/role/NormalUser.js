import React from "react";
import PostDetailRoute from "../routes/PostDetailRoute";
import HomeRoute from "../routes/HomeRoute";
import FilterPostByCategoryRoute from "../routes/FilterPostByCategoryRoute";
import Auth from "../users/pages/Auth";
import { Route, Redirect } from "react-router-dom";
const NormalUser = () => {
    return (
        <React.Fragment>
            <Route path="/" exact>
                <HomeRoute />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Route path="/post/:postId" exact>
                <PostDetailRoute />
            </Route>
            <Route path="/:cid/filter-post" exact>
                <FilterPostByCategoryRoute />
            </Route>
            <Redirect to="/" />
        </React.Fragment>
    );
};
export default NormalUser;
