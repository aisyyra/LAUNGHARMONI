import axios from "axios";
import api from "./index";

var COOKIE_NAME = "client_laungharmoni_token";

class https {

  // #region Auth

  // login = async (body) => {
  //   const res = await axios.post(`${api.host()}/login`, body, {
  //     headers: {
  //       'X-Frame-Options': 'SAMEORIGIN'
  //     }
  //   });

  //   return res.data;
  // };

  // register = async (body) => {
  //   const res = await axios.post(`${api.host()}/register`, body, {
  //     headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
  //   });

  //   return res.data;
  // };

  // logout = async () => {
  //   const res = await axios.post(`${api.host()}/logout`, null, {
  //     headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
      
  //   });

  //   return res.data;
  // };

  // storeToken = async (body) => {
  //   const res = await axios.post(`${api.host()}/store-token`, body, {
  //     headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
  //   });

  //   return res.data;
  // };

  // #endregion

  // #region Client

  addClient = async (body) => {
    const res = await axios.post(`${api.host()}/client/store`, body, {
      headers: api.headers(`${COOKIE_NAME}`),
    });
    return res.data;
  };

  getClient = async (controller, id) => {
    const res = await axios.get(`${api.host()}/client/detail/${id}`, {
      signal: controller.signal,
      headers: api.headers(`${COOKIE_NAME}`),
    });
    return res.data;
  };

  // #endregion

  // #region Barang Group

  listBarangGroup = async (controller, body) => {
    const res = await axios.post(`${api.host()}/barang-group`, body, {
      signal: controller.signal,
      headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
    });
    return res.data;
  };

  addBarangGroup = async (body) => {
    const res = await axios.post(`${api.host()}/barang-group/save`, body, {
      headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
    });
    return res.data;
  };

  updateBarangGroup = async (body) => {
    const res = await axios.post(`${api.host()}/barang-group/update`, body, {
      headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
    });
    return res.data;
  };

  deleteBarangGroup = async (id) => {
    const res = await axios.delete(`${api.host()}/barang-group/delete/${id}`, {
      headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
    });
    return res.data;
  };

  selectBarangGroup = async (controller) => {
    const res = await axios.get(`${api.host()}/barang-group/list`, {
      signal: controller.signal,
      headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
    });
    return res.data;
  };

  getBarangGroup = async (controller, id) => {
    const res = await axios.get(`${api.host()}/barang-group/detail/${id}`, {
      signal: controller.signal,
      headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
    });
    return res.data;
  };

  // #endregion



  // getDataByParams = async (data, url) => {
  //   const res = await axios.get(`${api.host()}${url}`, {
  //     headers: api.headers(`${import.meta.env.COOKIE_NAME}`),
  //     params: data,
  //   });

  //   return res.data;
  // };
}

const http = new https();
export default http;
