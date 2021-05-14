import {API, sendData} from "./util/utils";

const getPostsHandler = async (req, res) => {
  try {
    const data = await API.getPosts(req.cookies.authorization, req.params.page, req.payload)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostsPageCountHandler = async (req, res) => {
  try {
    const data = await API.getPostsCount(req.cookies.authorization, req.payload)
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

const updatePostHandler = async (req, res) => {
  try {
    const data = await API.updatePost(req.cookies.authorization, req.params.url, req.payload)
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

const addPostsHandler = async (req, res) => {
  try {
    const data = await API.addPost(req.cookies.authorization, req.payload)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};


export {
  getPostsHandler,
  getPostsPageCountHandler,
  getPostHandler,
  updatePostHandler,
  getUrlAvailableHandler,
  addPostsHandler
}
