import * as React from "react";
import "antd/dist/antd.css"
// import Button from 'antd/es/button';
import Button from '@antd/button';

export interface HelloProps { str: string; }

export const Hello = (props: HelloProps) => <Button type="primary" className="test-btn">确定</Button>;
