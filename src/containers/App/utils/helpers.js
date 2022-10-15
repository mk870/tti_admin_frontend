export const menuItems = (pathname) => [
  { label: null, icon: "employess", isActive: isActive(pathname, "employees") },
];

const isActive = (pathname, tab) => pathname.startsWith(`/${tab}`);
