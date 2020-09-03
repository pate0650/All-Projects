const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/project/:id', name: 'project', component: project, props: true},
    {path: '/add', name: 'Add', component: addProject}
]

const router = new VueRouter({
    routes: routes
})