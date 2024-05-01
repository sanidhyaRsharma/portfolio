export default function Skills() {
  const skills = [
    { id:0, name: "Java", value: 98 },
    { id:1, name: "Spring Boot", value: 95 },
    { id:2, name: "Python", value: 90 },
    { id:3, name: "Android", value: 85 },
    { id:4, name: "SQL", value: 95 },
    { id:5, name: "React", value: 75 },
    { id:6, name: "Git", value: 95 },
    { id:7, name: "CI/CD", value: 85 },
    { id:8, name: "Apache Spark", value: 80}
  ];
  const listItems = skills.map((item) => (
    <li key={item.id} className="w-full lg:w-1/3 p-5">
      <div className="relative">
        <div className="py-2">{item.name}</div>
        <div className="absolute top-2 right-0">{item.value}%</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-900">
        <div
          className="bg-white h-2.5 rounded-full"
          style={{ width: item.value + "%" }}
        ></div>
      </div>
    </li>
  ));

  return (
    <div id="skills" className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-500 bg-opacity-50 flex flex-col rounded-3xl">
      <div className="text-4xl text-white p-4"> Skills </div>
      <hr />
      <div className="">
        <ul className="p-2 m-2 flex flex-wrap">{listItems}</ul>
      </div>
    </div>
  );
}
