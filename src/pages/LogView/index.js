import { useState } from 'react';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import logData from '../../data/logData.json';
import activityData from '../../data/activityData.json';


function LogView() {
  const [ logList, setLogList ] = useState(logData);

  const handleLogChange = (event, index) => {
    const newLogItemContent = event.target.value;
    setLogList((data) => {
      data[index] = {...data[index], content: newLogItemContent};
      return [...data];
    });
  }

  return (
    <div>
      {
        logList.map((logItem, logIndex) => (
          <div key={logItem.id}>
            <div>
              <Select defaultValue={logItem.activity.id}>
                {activityData.map((activity) => (
                  <Option key={activity.id} value={activity.id}>{activity.name}</Option>
                ))}
              </Select>
            </div>
            <textarea value={logItem.content} onChange={(event) => {handleLogChange(event, logIndex)}}/>
          </div>
        ))
      }
    </div>
  );
}

export default LogView;