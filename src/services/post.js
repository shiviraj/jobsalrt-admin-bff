import {Post} from "../API/post";

const PostService = {
  getPostByUrl(url) {
    return Post.getPostByUrl(url)
  },

  updatePost(url, post) {
    return Post.updatePost(url, post)
  },

  urlAvailable(url) {
    return Post.urlAvailable(url)
  },

  getUpdates(url) {
    return Post.getUpdates(url)
  }
}

export default PostService
