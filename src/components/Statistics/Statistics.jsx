import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A-1',
    mark: 57,
  },
  {
    name: 'A-2',
    mark: 53,
  },
  {
    name: 'A-3',
    mark: 49,
  },
  {
    name: 'A-4',
    mark: 60,
  },
  {
    name: 'A-5',
    mark: 50,
  },
  {
    name: 'A-6',
    mark: 30,
  },
  {
    name: 'A-7',
    mark: 60,
  },
  {
    name: 'A-8',
    mark: 58,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/dashed-line-chart-dxwzg';

  render() {
    return (
        <LineChart
          width={900}
          height={700}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="mark" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
    );
  }
}
