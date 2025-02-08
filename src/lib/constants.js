export const tabs = [
  { id: 1, name: "All Posts(32)", active: true },
  { id: 2, name: "Article" },
  { id: 3, name: "Event" },
  { id: 4, name: "Education" },
  { id: 5, name: "Job" },
];

export const recommendedGroups = [
  { id: 1, name: "Leisure", image: "/groups/group1.png" },
  { id: 2, name: "Activism", image: "/groups/group2.png" },
  { id: 3, name: "MBA", image: "/groups/group3.png" },
  { id: 4, name: "Philosophy", image: "/groups/group4.png" },
];

export const posts = [
  {
    id: 1,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    category: "✍️ Article",
    user: { name: "Sarthak Kamra", image: "/users/user1.png" },
    image: "/posts/post1.jpg",
    views: "1.4k",
  },
  {
    id: 2,
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    category: "🔬️ Education",
    user: { name: "Sarah West", image: "/users/user2.png" },
    image: "/posts/post2.jpg",
    views: "4.8K",
  },
  {
    id: 3,
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    category: "🗓️ Meetup",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    user: { name: "Ronal Jones", image: "/users/user3.png" },
    splBtn: true,
    btnText: "Visit Website",
    btnType: "danger",
    image: "/posts/post3.jpg",
    views: "800",
  },
  {
    id: 4,
    title: "Software Developer",
    category: "💼️ Job",
    org: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    user: { name: "Joseph Gray", image: "/users/user4.png" },
    splBtn: true,
    btnText: "Apply on Timesjobs",
    btnType: "success",
    views: "1.7k",
  },
];
