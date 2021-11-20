const PAGE_URL = {
  BASE: "/",

  Dashboard: "/",
  Component1:"/component-right",
  Login: "/login",
  example:"example",

  V2: {
    InputType:"type-input",
    Metadata:{
      main:"metadata",
      detail:":id",
      new:"new",
      review:"review/:id"
      // search:"/metadata/:query?",
    },
    FormGroup:{
      main:"form-group",
      new:"new",
      detail:":id"
    },
    Treeview:{
      main:"treeview",
      list:':id'
      
    },
    Operate:
    {
      Detail:{
        Route: 'operate',
        API: ':id',
        operateReview:'review/:id',
        edit:'edit/:id/',
        detail:"detail/:id",
        init:'init',
      },
      List:{
        Init: 'init',
        Review:'/operate/list/review'
      }
    }
  },

};

export default PAGE_URL;
