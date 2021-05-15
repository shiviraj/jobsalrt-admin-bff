import {API, removeEmptyListFromObject, sendData} from "./util/utils";

const addPostsHandler = async (req, res) => {
  try {
    const data = await API.addPost(req.cookies.authorization, req.payload)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const deletePostHandler = async (req, res) => {
  try {
    const data = await API.deletePost(req.cookies.authorization, req.params.url)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostHandler = async (req, res) => {
  try {
    const data = await API.getPost(req.cookies.authorization, req.params.url)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostsHandler = async (req, res) => {
  try {
    req.payload.filters = removeEmptyListFromObject(req.payload.filters)
    const data = await API.getPosts(req.cookies.authorization, req.params.page, req.payload)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostsPageCountHandler = async (req, res) => {
  try {
    req.payload.filters = removeEmptyListFromObject(req.payload.filters)
    const data = await API.getPostsCount(req.cookies.authorization, req.payload)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getUrlAvailableHandler = async (req, res) => {
  try {
    const data = await API.urlAvailable(req.cookies.authorization, req.params.url)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const updatePostHandler = async (req, res) => {
  try {
    const data = await API.updatePost(req.cookies.authorization, req.params.url, req.payload)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};


export {
  addPostsHandler, deletePostHandler,
  getPostHandler,
  getPostsHandler,
  getPostsPageCountHandler,
  getUrlAvailableHandler,
  updatePostHandler
}
