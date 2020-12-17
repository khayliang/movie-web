import React from "react";
import { Layout, Menu, Input, Button } from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import styles from './index.less'
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default ({children}: {children: any}) => {
  return(
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <MenuOutlined className={styles.menuIcon}/>
          <Search
            placeholder="Enter movie name"
            allowClear
            className={styles.searchBar}
            enterButton="Search"
          />
          <Button type="primary">Sign In</Button>
        </Menu>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}