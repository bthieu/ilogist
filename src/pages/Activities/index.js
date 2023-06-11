import ActivityList from "./ActivityList";

const activityData = [
  {
    id: 1,
    name: 'Reading',
    type: 'standard',
    desc: '',
    createdAt: 1686457509119,
    updatedAt: 1686457509119,
    data: null
  },
  {
    id: 2,
    name: 'Coding',
    type: 'standard',
    desc: '',
    createdAt: 1686457509119,
    updatedAt: 1686457509119,
    data: null
  },
  {
    id: 3,
    name: 'Money',
    type: 'number',
    desc: '',
    createdAt: 1686457509119,
    updatedAt: 1686457509119,
    data: null
  }
];

export default function Activities() {
  return (
    <div>
      <ActivityList activities={activityData}/>
    </div>
  );
}