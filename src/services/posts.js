import {Posts} from "../API/posts";

const PostsService = {

  getPosts(page, payload) {
    return Posts.getPosts(page, payload);
  },

  getPageCount(payload) {
    return Posts.getPageCount(payload);
  },

  addPost(payload) {
    return Posts.addPost(payload);
  },

  deletePost(url) {
    return Posts.deletePost(url);
  },
}

export default PostsService
