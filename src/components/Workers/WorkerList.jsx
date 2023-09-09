import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;

  if (workers.length < 1) {
    return;
  }

  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((furkan) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow"
            key={furkan.id}
            onClick={() => deleteWorker(furkan.id)}
          >
            <span>{furkan.name}</span>
            <span className="text-teal-700 font-medium">{furkan.wage}₺</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
