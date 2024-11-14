const routes = {
  home: '/',
  services: '/services',
  contact: '/contact',
  about: '/about',
  login: '/login',
  register: '/register',
  search: (categoryName) => `/search/${categoryName}`,
  business: (id) => `/business/${id}`,
  favorites: '/favorites',
  dashboard: '/dashboard',
  page404: '*',
};

console.log('hello');

export default routes;
