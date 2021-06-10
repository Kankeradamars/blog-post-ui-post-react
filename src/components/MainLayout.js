import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import store from 'store';


const { Header, Content } = Layout;
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  };

  const handleSignOut=()=>{
    store.clearAll()
  }
  return (
    <Layout className="layout">
      <Header>

        <Menu theme="dark" float="left" mode="horizontal" className="links">
          <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
          {
            store.get("user") ?
              (<>
                <Menu.Item key="2"><Link to="/signin" onClick={handleSignOut}>SignOut</Link></Menu.Item>
              </>) :
              (<>
                <Menu.Item key="3"><Link to="/signup">SignUp</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/signin">SignIn</Link></Menu.Item>
              </>)
          }

        </Menu>
      </Header>
      <Content style={{ padding: '0 0px' }}>

        <div className="site-layout-content">
          {children}
        </div>
      </Content>

    </Layout>
  );
}
export default MainLayout;