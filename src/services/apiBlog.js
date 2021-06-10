import axios from 'axios';
import {notification} from 'antd';
const BlogPostUrl = 'https://blogpost-shecancode-api.herokuapp.com/api/v1/blog' ;
class BlogApi{
    async loginAuth(data){
        try{
            const response = await axios.post(BlogPostUrl +'/auth/signin', data)
            return response.data;
        }
        catch(e){
    notification.error({message:"User Not Found!"})
        }     
}
async signupAuth(data){
console.log(data)
    try{
        const response = await axios.post(BlogPostUrl +'/auth/signup', data)
        return response.data;
    }
    catch(e){
notification.error({message:"SignUp Failed, Please Try Again!"})
    }     
}
async getAllBlog(){
    try{
    const response = await axios.get(BlogPostUrl + '/dash/all');
    return response.data;
}
catch(e){
    notification.error({message:"Failed to get All Blogs!"}) 
}
}
async getOneBlog(id){
    try{
        const response = await axios.get(BlogPostUrl + '/dash/' +id);
        return response.data;
    }
    catch(e){
        notification.error({message:"Failed to get All Blogs!"}) 
    }
}
}
export default  new BlogApi();