export const openSidebar = () => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.setProperty("--SideNavigation-slideIn", "1");
  }
};

export const closeSidebar = () => {
  if (typeof document !== "undefined") {
    document.documentElement.style.removeProperty("--SideNavigation-slideIn");
    document.body.style.removeProperty("overflow");
  }
};

export const toggleSidebar = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--SideNavigation-slideIn");
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
};

export const openMessagesPane = () => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.setProperty("--MessagesPane-slideIn", "1");
  }
};

export const closeMessagesPane = () => {
  if (typeof document !== "undefined") {
    document.documentElement.style.removeProperty("--MessagesPane-slideIn");
    document.body.style.removeProperty("overflow");
  }
};

export const toggleMessagesPane = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--MessagesPane-slideIn");
    if (slideIn) {
      closeMessagesPane();
    } else {
      openMessagesPane();
    }
  }
};


export function getAllDaysInMonth(month, year) {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const daysInMonth = [];

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    daysInMonth.push({
      date: date.getDate(),
      month: date.toLocaleString("en", { month: "long" }),
      day: date.toLocaleString("en", { weekday: "short" }),
    });
  }

  return daysInMonth;
}

export const truncateString = (text, maxLength)  => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength - 3) + "...";
  }
}