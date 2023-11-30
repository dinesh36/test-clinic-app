import DynamicPage from "~/components/DynamicPageLevel1.vue";

const routes = [
  // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'Dynamic Page', component: DynamicPage },
  // // will match anything starting with `/user-` and put it under `$route.params.afterUser`
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
