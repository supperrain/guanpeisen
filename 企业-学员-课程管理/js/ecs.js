var routes = [
    {
        path:'/',
        component:{
            template:`
            <div><h1>mian</h1></div>
            `,
        },
    },
    {
        path:'/main',
        component:{
            template:'#courses-control',
        },
    }
];

var router = new VueRouter({
    routes: routes,
});

var app = new Vue({
    el:'#app',
    router:router,
});