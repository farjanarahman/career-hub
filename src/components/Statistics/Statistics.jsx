import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    id: 1,
    name: "Assignment-1",
    mark: 60,
  },
  {
    id: 2,
    name: "Assignment-2",
    mark: 50,
  },
  {
    id: 3,
    name: "Assignment-3",
    mark: 40,
  },
  {
    id: 4,
    name: "Assignment-4",
    mark: 30,
  },
  {
    id: 5,
    name: "Assignment-5",
    mark: 40,
  },
  {
    id: 6,
    name: "Assignment-6",
    mark: 30,
  },
  {
    id: 7,
    name: "Assignment-7",
    mark: 60,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-area-chart-uw0k8';

  render() {
    return (
      <div>
        <h1>Assignment Marks</h1>
          <AreaChart
            width={800}
            height={700}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
      </div>
    );
  }
}
