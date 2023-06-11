import ActivityList from "./ActivityList";
import activityData from "../../data/activityData.json";

export default function Activities() {
  return (
    <div>
      <ActivityList activities={activityData} />
    </div>
  );
}
