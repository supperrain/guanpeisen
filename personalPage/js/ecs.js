var routes = [
    {
        path:'/enterprise',
        component:{
            template:'#enterprise-control',
        },
    },
    {
        path:'/courses',
        component:{
            template:'#courses-control',
        }
    },
    {
        path:'/students',
        component:{
            template:'#students-control'
        }
    },
    {
        path:'*',
        redirect:'/enterprise'
    }
];

var router = new VueRouter({
    routes: routes,
});

var app = new Vue({
    el:'#app',
    router:router,
    methods:{
        toEnterprise:function(){
            $("#font1").removeClass("fontcolordark");
            $("#font1").addClass("fontcolorlight");
            $("#font2").removeClass("fontcolorlight");
            $("#font2").addClass("fontcolordark");
            $("#font3").removeClass("fontcolorlight");
            $("#font3").addClass("fontcolordark");
            $("#top-middle-hr1").show();
            $("#top-middle-hr2").hide();
            $("#top-middle-hr3").hide();
        },
        toCourses:function(){
            $("#font2").removeClass("fontcolordark");
            $("#font2").addClass("fontcolorlight");
            $("#font1").removeClass("fontcolorlight");
            $("#font1").addClass("fontcolordark");
            $("#font3").removeClass("fontcolorlight");
            $("#font3").addClass("fontcolordark");
            $("#top-middle-hr2").show();
            $("#top-middle-hr1").hide();
            $("#top-middle-hr3").hide();
        },
        toStudents:function(){
            $("#font3").removeClass("fontcolordark");
            $("#font3").addClass("fontcolorlight");
            $("#font2").removeClass("fontcolorlight");
            $("#font2").addClass("fontcolordark");
            $("#font1").removeClass("fontcolorlight");
            $("#font1").addClass("fontcolordark");
            $("#top-middle-hr3").show();
            $("#top-middle-hr2").hide();
            $("#top-middle-hr1").hide();
        }
    }
});