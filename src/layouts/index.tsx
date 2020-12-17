import React from 'react';
import { Layout, Input, Button, Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './index.less';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default ({ children }: { children: any }) => {
  const menu = (
    <Menu className={styles.dropdownMenu} theme="dark">
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Hot
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Trending
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Newest
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Layout>
        <Header>
          <Dropdown overlay={menu}>
            <MenuOutlined className={styles.menuIcon} />
          </Dropdown>
          <Search
            placeholder="Enter movie name"
            allowClear
            className={styles.searchBar}
            enterButton="Search"
          />
          <Button type="primary" className={styles.buttonSignin}>
            Sign In
          </Button>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </div>
  );
};
