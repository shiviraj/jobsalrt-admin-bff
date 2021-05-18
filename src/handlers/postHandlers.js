import {API} from "./util/utils";

const addPostsHandler = async (req, res) => {
  try {
    const data = await API.addPost(req.headers.authorization, req.body)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const deletePostHandler = async (req, res) => {
  try {
    const data = await API.deletePost(req.headers.authorization, req.params.url)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostHandler = async (req, res) => {
  try {
    const data = await API.getPost(req.headers.authorization, req.params.url)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostsHandler = async (req, res) => {
  try {
    const data = await API.getPosts(req.headers.authorization, req.params.page, req.body)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getPostsPageCountHandler = async (req, res) => {
  try {
    const data = await API.getPostsCount(req.headers.authorization, req.body)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const getUrlAvailableHandler = async (req, res) => {
  try {
    const data = await API.urlAvailable(req.headers.authorization, req.params.url)
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};

const updatePostHandler = async (req, res) => {
    try {
      const data = await API.updatePost(req.headers.authorization, req.params.url, req.body)
      res.send(data)
    } catch
      (err) {
      console.log(err)
      res.sendStatus(404)
    }
  }
;


export {
  addPostsHandler, deletePostHandler,
  getPostHandler,
  getPostsHandler,
  getPostsPageCountHandler,
  getUrlAvailableHandler,
  updatePostHandler
}
