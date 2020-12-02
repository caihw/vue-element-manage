/**
 * 用户管理接口文档
 */
import api from "@/services/axiosApi";

// 获取用户列表信息
export const getUserInfo = (data) => {
  return api(
    {
      url: "/user/page",
      method: "post",
    },
    data || {},
  );
};
// 新增用户列表信息
export const getCreateUser = (data) => {
  return api(
    {
      url: "/user/create",
      method: "post",
    },
    data || {},
  );
};
// 修改用户列表信息
export const getUploadUser = (data) => {
  return api(
    {
      url: "/user/upload",
      method: "post",
    },
    data || {},
  );
};
//删除用户列表信息
export const getDeleteUser = (data) => {
  return api(
    {
      url: "/user/delete",
      method: "get",
    },
    data || {},
  );
};