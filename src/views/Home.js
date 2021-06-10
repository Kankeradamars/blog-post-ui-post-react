import React, { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import BlogApi from '../services/apiBlog';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const Home = () => {
    const [response, setResponse] = useState({});
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        BlogApi.getAllBlog()
        .then((response) => {
            setResponse(response);
            console.log(response);
            setBlog(response.data);
        });
    },
        [])
    return (
        <MainLayout>
            {blogs.map((blog, index) => {
                return (<Card.Grid>
                    <Link to = {`/view/blog/${blog._id}`}>
                    <h1>{blog.title}</h1>
                    <img src={blog.photo} Alt='Photo' style={{ width: '100% ' }}></img>
                    <h5>Posted By:&nbsp;&nbsp;{blog.userId.firstName}</h5>
                    <h5>Posted On:&nbsp;&nbsp;{blog.timeStamp.substring(0, 25)}</h5>
                    </Link>
                </Card.Grid>)
            })}
        </MainLayout>
    )
}
export default Home;