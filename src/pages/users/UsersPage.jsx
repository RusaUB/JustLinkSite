import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

export default function UsersPage() {
    const dataUsers = [
      {
        id: 0,
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        penalties: Math.floor(Math.random() * 10) + 1, // Random penalties between 1 and 10
        points: Math.floor(Math.random() * 50) + 1, // Random points between 1 and 50
        eventParticipations: Math.floor(Math.random() * 30) + 1, // Random event participations between 1 and 30
        birthday: "Dec 16 2006",
      },
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        penalties: Math.floor(Math.random() * 10) + 1, // Random penalties between 1 and 10
        points: Math.floor(Math.random() * 50) + 1, // Random points between 1 and 50
        eventParticipations: Math.floor(Math.random() * 30) + 1, // Random event participations between 1 and 30
        birthday: "Nov 02 2005",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        penalties: Math.floor(Math.random() * 10) + 1, // Random penalties between 1 and 10
        points: Math.floor(Math.random() * 50) + 1, // Random points between 1 and 50
        eventParticipations: Math.floor(Math.random() * 30) + 1, // Random event participations between 1 and 30
        birthday: "Sep 26 2006",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        penalties: Math.floor(Math.random() * 10) + 1, // Random penalties between 1 and 10
        points: Math.floor(Math.random() * 50) + 1, // Random points between 1 and 50
        eventParticipations: Math.floor(Math.random() * 30) + 1, // Random event participations between 1 and 30
        birthday: "Apr 10 2005",
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        penalties: Math.floor(Math.random() * 10) + 1, // Random penalties between 1 and 10
        points: Math.floor(Math.random() * 50) + 1, // Random points between 1 and 50
        eventParticipations: Math.floor(Math.random() * 30) + 1, // Random event participations between 1 and 30
        birthday: "Aug 30 2005",
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        penalties: Math.floor(Math.random() * 10) + 1, // Random penalties between 1 and 10
        points: Math.floor(Math.random() * 50) + 1, // Random points between 1 and 50
        eventParticipations: Math.floor(Math.random() * 30) + 1, // Random event participations between 1 and 30
        birthday: "Jan 13 2006",
      },
    ];
return (
  <Table aria-label="table with ellipsis texts" noWrap sx={{ width: "100%" }}>
    <thead>
      <tr>
        <th>Name</th>
        <th style={{ width: "30%", textAlign: "center" }}>Description</th>
        <th style={{ textAlign: "center" }}>Penalties</th>
        <th style={{ textAlign: "center" }}>Event Participations</th>
        <th style={{ textAlign: "center" }}>Points</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {dataUsers.map((user, index) => (
        <tr key={user.id}>
          <td style={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar src={user.img} />
              <Box sx={{ minWidth: 0 }}>
                <Typography noWrap fontWeight="lg">
                  Name Surname
                </Typography>
                <Typography noWrap level="body-sm">
                  {user.birthday}
                </Typography>
              </Box>
            </Box>
          </td>
          <td style={{ textAlign: "center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </td>
          <td style={{ textAlign: "center" }}>{user.penalties}</td>
          <td style={{ textAlign: "center" }}>{user.eventParticipations}</td>
          <td style={{ textAlign: "center" }}>{user.points}</td>
          <td style={{ textAlign: "center" }}>
            <Typography noWrap>
              <Link href="#text-ellipsis" startDecorator="ℹ️">
                Quick Actions
              </Link>
            </Typography>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
}
