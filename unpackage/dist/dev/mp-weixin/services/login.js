"use strict";
const postLoginWxMinAPI = (data) => {
  return http({
    method: "POST",
    url: "/login/wxMin",
    data
  });
};
exports.postLoginWxMinAPI = postLoginWxMinAPI;
