import React, { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import BlogApi from '../services/apiBlog';
import store from 'store';
import { Card } from 'antd';
import {notification} from 'antd';
import {useHistory} from 'react-router-dom';
const ViewBlog = ({ match }) => {

    const blogId = match.params.blogId;
    const [blog, setBlog] = useState({});
    const [user, setUser] = useState({});
    const history=useHistory(); // it is used as link to
    useEffect(() => {

        const user = store.get('user')
        if(!user){
            notification.warn({
                message:"please first login"
            })
            return history.push('/signin')
        }

        BlogApi.getOneBlog(blogId)
            .then((response) => {
                setBlog(response.data);
                setUser(response.data.userId);
            });
    }, []);
    return (
        <MainLayout>
            <Card style={{ width: '50% ', margin: '2% 0% 0% 25%' }}>
                <h1>{blog.title}</h1>
                <img src={blog.photo} Alt='Photo' style={{ width: '50% ', margin: '0% 0% 0% 13%' }}></img>
                <h5 style={{ margin: '3% 0% 0% 8%', font: '15px' }}>Posted By:&nbsp;&nbsp;{user.firstName}</h5>
                {/* <h5>Posted On:&nbsp;&nbsp;{blog.timeStamp.substring(0, 25)}</h5> */}
                <p>{blog.content}</p>
            </Card>
        </MainLayout>
    )
}
export default ViewBlog;