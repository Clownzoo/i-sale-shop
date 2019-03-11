import Loadable from "react-loadable";

const loadable = (fileUrl) => Loadable({
  loader: () => import(`views/${fileUrl}`),
  loading: () => ('')
});

const routers = [
  {
    path: "/",
    exact: true,
    component: loadable("home/HomeView.js")
  },
  {
    path: '/login',
    component: loadable("login/LoginView.js")
  },
  {
    path: '/test',
    component: loadable("test/TestView.js")
  },
  {
    path: '/hello',
    component: loadable("hello/HelloView.js")
  }
];

export default routers;