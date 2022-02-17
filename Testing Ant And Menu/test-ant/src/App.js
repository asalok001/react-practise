import React from 'react';
import "antd/dist/antd.css";
import { Menu } from 'antd';
import Test from './Test';

const { SubMenu } = Menu;

export default function App() {
  // Test();
  return (
    <>
      <Test />
      <div style={{
        display: 'block', width: 700, padding: 30
      }}>
        <h4>ReactJS Ant-Design Menu Component</h4>
        <Menu
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['1']}
          style={{ width: 300 }}
          mode="inline"
        >
          <SubMenu key="1" title="Settings">
            <Menu.Item key="2">Option 1</Menu.Item>
            <Menu.Item key="3">Option 2</Menu.Item>
            <SubMenu key="4" title="Sub-Menu">
              <Menu.Item key="5">Option 3</Menu.Item>
              <Menu.Item key="6">Option 4</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="7" title="Profile">
            <Menu.Item key="8">Option 5</Menu.Item>
            <Menu.Item key="9">Option 6</Menu.Item>
            <Menu.Item key="10">Option 7</Menu.Item>
            <Menu.Item key="11">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
}
