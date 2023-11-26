
export const users = [
  {
    name: "Username 2.",
    username: "@username",
    avatar: "/static/images/avatar/2.jpg",
    online: true,
  },
  {
    name: "Username N.",
    username: "@username",
    avatar: "/static/images/avatar/3.jpg",
    online: false,
  },
];


export const slideItems = [
  {
    id: 1,
    bannerImg:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contentImg:
      "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    bannerImg:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contentImg:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    bannerImg:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    contentImg:
      "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export const newsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1613899209236-ea0496f96180?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const chats = [
  {
    id: "1",
    sender: users[0],
    messages: [
      {
        id: "1",
        content: "Lorem Ipsum is simply dummy text of the",
        timestamp: "Wednesday 9:00am",
        sender: users[0],
      },
      {
        id: "2",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Wednesday 9:10am",
        sender: "You",
      },
      {
        id: "3",
        timestamp: "Wednesday 11:30am",
        sender: users[0],
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        id: "4",
        timestamp: "Wednesday 2:00pm",
        sender: "You",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        id: "5",
        timestamp: "Wednesday 4:30pm",
        sender: users[0],
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        id: "6",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Thursday 10:16am",
        sender: users[0],
      },
      {
        id: "7",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Thursday 11:40am",
        sender: users[0],
      },
      {
        id: "3",
        timestamp: "Thursday 11:40am",
        sender: users[0],
        content: "LoremIpsum.pdf",
        attachment: {
          fileName: "LoremIpsum.pdf",
          type: "pdf",
          size: "1.2 MB",
        },
      },
      {
        id: "8",
        timestamp: "Thursday 11:41am",
        sender: "You",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        id: "9",
        timestamp: "Thursday 11:44am",
        sender: users[0],
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        id: "10",
        timestamp: "Today 2:20pm",
        sender: users[0],
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        id: "11",
        timestamp: "Just now",
        sender: "You",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
    ],
  },
  {
    id: "2",
    sender: users[1],
    messages: [
      {
        id: "1",
        content:
          "Lorem Ipsum is simply dummy text of the",
        timestamp: "Wednesday 9:00am",
        sender: users[1],
      },
      {
        id: "2",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Wednesday 9:05am",
        sender: "You",
      },
      {
        id: "3",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Wednesday 9:30am",
        sender: users[1],
      },
      {
        id: "4",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Wednesday 9:35am",
        sender: "You",
      },
      {
        id: "5",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Wednesday 10:00am",
        sender: users[1],
      },
      {
        id: "6",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        timestamp: "Wednesday 10:05am",
        sender: "You",
      },
    ],
  },
];