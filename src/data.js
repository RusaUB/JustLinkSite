
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