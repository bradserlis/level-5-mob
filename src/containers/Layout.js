import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link } from 'react-router-dom';



const LayoutContainer = (props) => {
  const { Header, Content, Footer, Sider } = Layout;
 
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="home" theme="twoTone" />
            <span className="nav-text">nav 1</span>
            <Link to='/' />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="right-circle" theme='twoTone' />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="right-circle" theme='twoTone' />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="right-circle" theme="twoTone" />
            <span className='nav-text'>FFXIV</span>
            <Link to='/ffxiv' />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: 'rgb(155, 209, 255)', padding: 0, textAlign:'center' }}>
        <h2> Level 5 Mob??? </h2>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            { props.children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Level 5 Mob</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutContainer;

