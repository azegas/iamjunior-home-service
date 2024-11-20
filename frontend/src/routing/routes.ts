type Routes = {
  home: string;
  services: string;
  contact: string;
  about: string;
  login: string;
  register: string;
  search: (categoryName: string) => string;
  business: (id: string) => string;
  favorites: string;
  dashboard: string;
  page404: string;
};

const routes: Routes = {
  home: '/',
  services: '/services',
  contact: '/contact',
  about: '/about',
  login: '/login',
  register: '/register',
  search: (categoryName: string) => `/search/${categoryName}`,
  business: (id: string) => `/business/${id}`,
  favorites: '/favorites',
  dashboard: '/dashboard',
  page404: '*',
};

export default routes;
