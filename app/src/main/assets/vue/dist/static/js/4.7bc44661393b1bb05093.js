webpackJsonp([4],{Dd8w:function(t,e,a){"use strict";e.__esModule=!0;var s,o=a("woOf"),n=(s=o)&&s.__esModule?s:{default:s};e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t}},R4wc:function(t,e,a){var s=a("kM2E");s(s.S+s.F,"Object",{assign:a("To3L")})},To3L:function(t,e,a){"use strict";var s=a("lktj"),o=a("1kS7"),n=a("NpIQ"),r=a("sB3e"),i=a("MU5D"),l=Object.assign;t.exports=!l||a("S82l")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=l({},t)[a]||Object.keys(l({},e)).join("")!=s})?function(t,e){for(var a=r(t),l=arguments.length,u=1,c=o.f,d=n.f;l>u;)for(var p,f=i(arguments[u++]),m=c?s(f).concat(c(f)):s(f),v=m.length,g=0;v>g;)d.call(f,p=m[g++])&&(a[p]=f[p]);return a}:l},TszV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),o=a.n(s),n=a("ykFg"),r=(a("rLAy"),a("NYxO")),i=a("mtWM"),l=a.n(i);function u(t){l.a.post("http://121.42.177.97:8080/redfive/im/user.do?user_name="+t.userName).then(function(t){console.log(t.data),window.localStorage.setItem("uid",t.data.data.im_user),window.localStorage.setItem("appkey",t.data.data.appkey),window.localStorage.setItem("credential",t.data.data.im_pwd)}).catch(function(t){throw t})}function c(t){l.a.post("http://121.42.177.97:8080/red/user/findfriend.do?name="+t.userName).then(function(t){console.log(t.data.data),window.localStorage.setItem("myId",t.data.data.user_id)}).catch(function(t){throw t})}n.default,o()({},Object(r.b)(["userMsg"]));var d={name:"app-mine-login-box",data:function(){return{userInfo:{userName:"",password:""}}},methods:{userInfos:function(t,e){var a=this;l.a.post("http://api.zhimaim.com/api/token",{username:this.userInfo.userName,password:this.userInfo.password}).then(function(t){!0===t.data.success?(window.localStorage.setItem("userName",a.userInfo.userName),window.localStorage.setItem("token_expire",t.data.data.expires_in),window.localStorage.setItem("token",t.data.data.access_token),u({userName:a.userInfo.userName}),c({userName:a.userInfo.userName}),a.$vux.toast.show({text:"登录成功！"}),a.$router.push({path:"/message"})):a.$vux.toast.show({type:"cancel",text:"用户名或密码错误"})}).catch(function(t){throw a.$vux.toast.show({type:"warn",text:"网络故障！"}),t})}},components:{AppMineRegister:n.default},computed:o()({},Object(r.b)(["userMsg"]))},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-mine-login-box"},[s("div",{staticClass:"re-links"},[s("router-link",{attrs:{to:{name:"appMineRegister"}}},[t._v("注册")])],1),t._v(" "),s("div",{staticClass:"login-ico"},[s("img",{attrs:{src:a("iQH9"),alt:"红包牛牛"}}),t._v(" "),s("form",{attrs:{action:"",method:""},on:{submit:function(e){e.preventDefault(),t.userInfos(e)}}},[s("div",{staticClass:"login-item"},[s("label",{staticClass:"label",attrs:{for:"tel"}},[t._v("手机号")]),t._v(" "),s("p",{staticClass:"login"},[s("i",{staticClass:"iconfont icon-mobile"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.userName,expression:"userInfo.userName"}],staticClass:"tel",attrs:{type:"number",name:"tel",placeholder:"请输入手机号"},domProps:{value:t.userInfo.userName},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"userName",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"login-item"},[s("label",{staticClass:"label",attrs:{for:"pwd"}},[t._v("密码")]),t._v(" "),s("p",{staticClass:"login"},[s("i",{staticClass:"iconfont icon-suo"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.password,expression:"userInfo.password"}],staticClass:"pwd",attrs:{type:"password",name:"pwd",placeholder:"请输入密码"},domProps:{value:t.userInfo.password},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"password",e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"login-btn login-on",attrs:{type:"submit"}},[t._v("登录")])]),t._v(" "),s("router-link",{staticClass:"forgot",attrs:{to:{name:"appMineForgot"}}},[t._v("忘记密码")])],1)])},staticRenderFns:[]};var f=a("VU/8")(d,p,!1,function(t){a("vZX0")},"data-v-39ab5a5e",null).exports,m={name:"app-mine-login",components:{AppMineLoginBox:f}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-mine-login"},[e("app-mine-login-box")],1)},staticRenderFns:[]},g=a("VU/8")(m,v,!1,null,null,null);e.default=g.exports},V3tA:function(t,e,a){a("R4wc"),t.exports=a("FeBl").Object.assign},vZX0:function(t,e){},woOf:function(t,e,a){t.exports={default:a("V3tA"),__esModule:!0}}});
//# sourceMappingURL=4.7bc44661393b1bb05093.js.map