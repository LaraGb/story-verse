import React from "react";
import Column from "../column/Column";
import Bold from "../bold/Bold";
import Heading from "../heading/Heading";
import NotificationItem from "../notification-item/NotificationItem";
import MiniCalendar from "../mini-calendar/MiniCalendar";

export default function UserDataSideBar() {
  return (
    <div className="p-8">
      <Column>
        <Column>
          <div className="flex flex-col items-center space-y-2">
            <img
              className="rounded w-20 h-20 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtoJ4N0ggR90ZkuuAKugKBf2fjqmKyuXEgQ&usqp=CAU"
              alt="Extra large avatar"
            />
            <div>
              <Bold>User Name</Bold>
              <p>User Dados</p>
            </div>
          </div>
          <ul className="flex [&>:not(:last-child)]:border-r-2 [&>li]:px-4">
            <li>
              <span>Blond</span>
              <Bold>O+</Bold>
            </li>
            <li>
              <span>Blond</span>
              <Bold>O+</Bold>
            </li>
            <li>
              <span>Blond</span>
              <Bold>O+</Bold>
            </li>
          </ul>
        </Column>

        <Column>
          <Bold>Calendário</Bold>
          <MiniCalendar />
        </Column>

        <Column>
          <Bold>Notificações</Bold>
          <div>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </div>
        </Column>
      </Column>
    </div>
  );
}
