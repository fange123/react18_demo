import React from "react";
import { Button, List, Popover, Typography } from "antd";

const Demo = () => {
  const content = (
    <div style={{ padding: 10 }}>
      <List
        bordered
        dataSource={[{ id: 1, name: "棋手管理" }]}
        renderItem={(item) => (
          <List.Item style={{ padding: 0 }}>
            <Typography.Text>{item.name}</Typography.Text>
          </List.Item>
        )}
      />
      <Button type='link' style={{ padding: 0 }}>
        新增项目
      </Button>
    </div>
  );
  return (
    <Popover
      open={true}
      content={content}
      title={<span style={{ padding: 5 }}>收藏项目</span>}
    >
      <span>项目</span>
    </Popover>
  );
};

export default Demo;
