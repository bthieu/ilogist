import { useState } from 'react';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import logData from '../../data/logData.json';
import activityData from '../../data/activityData.json';


function LogView() {
  const [ logList, setLogList ] = useState(logData);
  // const [ currentLogContent, setCurrentLogContent ] = useState('');

  const handleChangeLogContent = (event, index) => {
    const newLogItemContent = event.target.value;
    setLogList((data) => {
      data[index] = {...data[index], content: newLogItemContent};
      return [...data];
    });
  };

  const handleChangeActivity = (event, index) => {
    const selectedActivityId = event.target.value;

    //find the selected option
    const selectedActivity = activityData.find(activity => activity.id === selectedActivityId);

    setLogList((data) => {
      data[index] = {...data[index], activity: selectedActivity};
      return [...data];
    });

    // console.log(event.target);
    // console.log(event.target.value);
  };

  // const handleCurrentLogContentChange = (event) => {
  //   setCurrentLogContent(event.target.value);
  // };
  const addNewLogItem = () => {
    setLogList((data) => {
      return [...data, {
        createdAt: (new Date()).getTime(),
        updatedAt: (new Date()).getTime()
      }];
    });
  };

  const saveLogList = () => {
    console.log(logList);
  };

  return (
    <div>
      {
        logList.map((logItem, logIndex) => (
          <div key={logIndex}>
            <div>
              {/* <Select defaultValue={logItem?.activity?.id} onChange={(event) => handleChangeActivity(event, logIndex)}>
                {activityData.map((activity) => (
                  <Option key={activity.id} value={activity.id}>{activity.name}</Option>
                ))}
              </Select> */}
              <select value={logItem?.activity?.id} onChange={(event) => handleChangeActivity(event, logIndex)}>
                {activityData.map((activity) => (
                  <option key={activity.id} value={activity.id}>{activity.name}</option>
                ))}
              </select>
            </div>
            <textarea value={logItem.content} onChange={(event) => {handleChangeLogContent(event, logIndex)}}/>
          </div>
        ))
      }
      <button onClick={addNewLogItem}>Add</button>
      <button onClick={saveLogList}>Save</button>
      {/** new form */}
      {/* <div>
        <div>
          <Select>
            {activityData.map((activity) => (
              <Option key={activity.id} value={activity.id}>{activity.name}</Option>
            ))}
          </Select>
        </div>
        <textarea value={currentLogContent} onChange={handleCurrentLogContentChange} />
      </div> */}
    </div>
  );
}

export default LogView;