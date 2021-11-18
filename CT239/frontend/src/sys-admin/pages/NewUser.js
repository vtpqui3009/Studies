import React from "react";
const NewUser = () => {
    return <h1>New User page.</h1>;
};
export default NewUser;
// const NewUser = () => {
//     return (
//         <div className="auth-form">
//             {isLoading && <LoadingSpinner asOverlay />}
//             <form onSubmit={authSubmitHandler} className="auth-form__control">
//                 {!isLoginMode && (
//                     <React.Fragment>
//                         <ImageUpload
//                             center
//                             id="image"
//                             onInput={inputHandler}
//                             width="100px"
//                             height="100px"
//                             borderRadius="50%"
//                         />
//                         <Input
//                             element="input"
//                             id="name"
//                             type="text"
//                             placeholder="Họ tên"
//                             validators={[VALIDATOR_REQUIRE()]}
//                             errorText="Họ tên không được để trống."
//                             onInput={inputHandler}
//                         />
//                         <Input
//                             element="input"
//                             id="username"
//                             type="text"
//                             placeholder="Username"
//                             validators={[VALIDATOR_REQUIRE()]}
//                             errorText="Username không được để trống."
//                             onInput={inputHandler}
//                         />
//                     </React.Fragment>
//                 )}

//                 <Input
//                     element="input"
//                     id="email"
//                     type="email"
//                     placeholder="Email"
//                     validators={[VALIDATOR_EMAIL()]}
//                     errorText="Email phải đúng định dạng."
//                     onInput={inputHandler}
//                 />
//                 <Input
//                     element="input"
//                     id="password"
//                     type="password"
//                     placeholder="Password"
//                     validators={[VALIDATOR_MINLENGTH(6)]}
//                     errorText="Mật khẩu yêu cầu tối thiểu 8 kí tự."
//                     onInput={inputHandler}
//                 />
//                 <Button
//                     type="submit"
//                     disabled={!formState.isValid}
//                     className="centered"
//                 >
//                     {isLoginMode ? "Đăng nhập" : "Đăng ký"}
//                 </Button>
//             </form>
//             <button className="button--origin" onClick={switchModeHandler}>
//                 {isLoginMode
//                     ? "Chưa có tài khoản ? Đăng ký ngay"
//                     : "Đã có tài khoản ? Đăng nhập"}
//             </button>
//         </div>
//     );
// };
// export default NewUser;
