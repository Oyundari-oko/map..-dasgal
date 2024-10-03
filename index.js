const users = [
  {
    name: "Alice",
    projects: [
      { title: "Project X", status: "active" },
      { title: "Project Y", status: "completed" },
    ],
  },
  {
    name: "Bob",
    projects: [{ title: "Project Z", status: "inactive" }],
  },
  {
    name: "Charlie",
    projects: [
      { title: "Project A", status: "active" },
      { title: "Project B", status: "active" },
    ],
  },
];
const user = users.map((project) => {
  const avctiveUse = project.projects.filter(
    (user) => user.status === "active"
  );
  return avctiveUse;
});
console.log(user);
