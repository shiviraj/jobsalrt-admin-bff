import {API, sendData} from "./util/utils";

const getPostsHandler = async (req, res) => {
  try {
    console.log(req.params)
    const data = await API.getPosts(req.cookies.authorization, req.params.page)
    res.send(sendData(data, req))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
};


export {getPostsHandler}
