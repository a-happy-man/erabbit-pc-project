"use strict";(self["webpackChunkerabbit_pc_project"]=self["webpackChunkerabbit_pc_project"]||[]).push([[816],{8391:function(a,t,e){var s=e(3396),c=e(9242),o=e(5435);const i=document.createElement("div");i.setAttribute("class","xtx-message-container"),document.body.appendChild(i);let d=null;t["Z"]=({type:a,text:t})=>{const e=(0,s.Wm)(o["default"],{type:a,text:t});(0,c.sY)(e,i),clearTimeout(d),d=setTimeout((()=>{(0,c.sY)(null,i)}),3e3)}},816:function(a,t,e){e.r(t),e.d(t,{default:function(){return Ca}});var s=e(3396);const c={class:"main"};function o(a,t,e,o,i,d){const n=(0,s.up)("AppTopNav"),r=(0,s.up)("AppHeader"),l=(0,s.up)("AppHeaderSticky"),p=(0,s.up)("router-view"),v=(0,s.up)("AppFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n),(0,s.Wm)(r),(0,s.Wm)(l),(0,s._)("div",c,[(0,s.Wm)(p)]),(0,s.Wm)(v)],64)}var i=e(7139);const d=a=>((0,s.dD)("data-v-000f020c"),a=a(),(0,s.Cn)(),a),n={class:"app-topnav"},r={class:"container"},l={href:"javascript:;"},p=d((()=>(0,s._)("i",{class:"iconfont icon-user"},null,-1))),v=d((()=>(0,s._)("li",null,[(0,s._)("a",{href:"javascript:;"},"免费注册")],-1))),f=(0,s.uE)('<li data-v-000f020c><a href="javascript:;" data-v-000f020c>我的订单</a></li><li data-v-000f020c><a href="javascript:;" data-v-000f020c>会员中心</a></li><li data-v-000f020c><a href="javascript:;" data-v-000f020c>帮助中心</a></li><li data-v-000f020c><a href="javascript:;" data-v-000f020c>关于我们</a></li><li data-v-000f020c><a href="javascript:;" data-v-000f020c><i class="iconfont icon-phone" data-v-000f020c></i>手机版</a></li>',5);function u(a,t,e,c,o,d){const u=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("nav",n,[(0,s._)("div",r,[(0,s._)("ul",null,[c.profile.token?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("li",null,[(0,s._)("a",l,[p,(0,s.Uk)((0,i.zw)(c.profile.account),1)])]),(0,s._)("li",null,[(0,s._)("a",{onClick:t[0]||(t[0]=a=>c.logout()),href:"javascript:;"},"退出登录")])],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s._)("li",null,[(0,s.Wm)(u,{to:"/login"},{default:(0,s.w5)((()=>[(0,s.Uk)("请先登录")])),_:1})]),v],64)),f])])])}e(7658);var _=e(65),m=e(2483),h={name:"AppTopnav",setup(){const a=(0,_.oR)(),t=(0,s.Fl)((()=>a.state.user.profile)),e=(0,m.tv)(),c=()=>{a.commit("user/setUser",{}),a.commit("cart/setCartList",[]),e.push("/login")};return{profile:t,logout:c}}},w=e(89);const g=(0,w.Z)(h,[["render",u],["__scopeId","data-v-000f020c"]]);var k=g;const y=a=>((0,s.dD)("data-v-6d7d5f50"),a=a(),(0,s.Cn)(),a),C={class:"app-header"},A={class:"container"},j={class:"logo"},H=y((()=>(0,s._)("div",{class:"search"},[(0,s._)("i",{class:"iconfont icon-search"}),(0,s._)("input",{type:"text",placeholder:"搜一搜"})],-1)));function W(a,t,e,c,o,i){const d=(0,s.up)("RouterLink"),n=(0,s.up)("AppHeaderNav"),r=(0,s.up)("AppHeaderCart");return(0,s.wg)(),(0,s.iD)("header",C,[(0,s._)("div",A,[(0,s._)("h1",j,[(0,s.Wm)(d,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("小兔鲜")])),_:1})]),(0,s.Wm)(n),H,(0,s.Wm)(r)])])}const D={class:"app-header-nav"},x={class:"home"},b=["onMousemove","onMouseleave"],Z=["src"];function z(a,t,e,c,o,d){const n=(0,s.up)("RouterLink"),r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("ul",D,[(0,s._)("li",x,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("首页")])),_:1})]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.list,(a=>((0,s.wg)(),(0,s.iD)("li",{key:a.id,onMousemove:t=>c.show(a),onMouseleave:t=>c.hide(a)},[(0,s.Wm)(r,{onClick:t=>c.hide(a),to:`/category/${a.id}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(a.name),1)])),_:2},1032,["onClick","to"]),(0,s._)("div",{class:(0,i.C_)(["layer",{open:a.open}])},[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.children,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id},[(0,s.Wm)(r,{onClick:t=>c.hide(a),to:`/category/sub/${t.id}`},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.picture,alt:""},null,8,Z),(0,s._)("p",null,(0,i.zw)(t.name),1)])),_:2},1032,["onClick","to"])])))),128))])],2)],40,b)))),128))])}var L={name:"AppHeaderNav",setup(){const a=(0,_.oR)(),t=(0,s.Fl)((()=>a.state.category.list)),e=t=>{a.commit("category/show",t.id)},c=t=>{a.commit("category/hide",t.id)};return{list:t,show:e,hide:c}}};const R=(0,w.Z)(L,[["render",z],["__scopeId","data-v-87fcda62"]]);var $=R;const T=a=>((0,s.dD)("data-v-17045e43"),a=a(),(0,s.Cn)(),a),U={class:"cart"},I=T((()=>(0,s._)("i",{class:"iconfont icon-cart"},null,-1))),Y={key:0,class:"layer"},N={class:"list"},F=["src"],P={class:"center"},q={class:"name ellipsis-2"},M={class:"attr ellipsis"},E={class:"right"},K={class:"price"},S={class:"count"},B=["onClick"],X={class:"foot"},G={class:"total"};function J(a,t,e,c,o,d){const n=(0,s.up)("RouterLink"),r=(0,s.up)("XtxButton");return(0,s.wg)(),(0,s.iD)("div",U,[(0,s.Wm)(n,{to:"/cart",class:"curr"},{default:(0,s.w5)((()=>[I,(0,s._)("em",null,(0,i.zw)(a.$store.getters["cart/validTotal"]),1)])),_:1}),a.$store.getters["cart/validTotal"]&&"/cart"!==a.$route.path?((0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("div",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.$store.getters["cart/validList"],(a=>((0,s.wg)(),(0,s.iD)("div",{class:"item",key:a.skuId},[(0,s.Wm)(n,{to:`/product/${a.id}`},{default:(0,s.w5)((()=>[(0,s._)("img",{src:a.picture,alt:""},null,8,F),(0,s._)("div",P,[(0,s._)("p",q,(0,i.zw)(a.name),1),(0,s._)("p",M,(0,i.zw)(a.attrsText),1)]),(0,s._)("div",E,[(0,s._)("p",K,"¥"+(0,i.zw)(a.nowPrice),1),(0,s._)("p",S,"x"+(0,i.zw)(a.count),1)])])),_:2},1032,["to"]),(0,s._)("i",{onClick:t=>c.deleteCart(a.skuId),class:"iconfont icon-close-new"},null,8,B)])))),128))]),(0,s._)("div",X,[(0,s._)("div",G,[(0,s._)("p",null,(0,i.zw)(a.$store.getters["cart/validTotal"])+"件商品",1),(0,s._)("p",null,"¥"+(0,i.zw)(a.$store.getters["cart/validAmount"]),1)]),(0,s.Wm)(r,{type:"plain",onClick:t[0]||(t[0]=t=>a.$router.push("/cart"))},{default:(0,s.w5)((()=>[(0,s.Uk)("去购物车结算")])),_:1})])])):(0,s.kq)("",!0)])}var O=e(8391),Q={name:"AppHeaderCart",setup(){const a=(0,_.oR)();a.dispatch("cart/findCartList").then((()=>{(0,O.Z)({type:"success",text:"更新本地购物车成功"})}));const t=t=>{a.dispatch("cart/deleteCart",t).then((()=>{(0,O.Z)({type:"success",text:"删除成功"})})).catch((a=>{console.log(a),(0,O.Z)({type:"error",text:"删除失败"})}))};return{deleteCart:t}}};const V=(0,w.Z)(Q,[["render",J],["__scopeId","data-v-17045e43"]]);var aa=V,ta={name:"AppHeader",components:{AppHeaderNav:$,AppHeaderCart:aa}};const ea=(0,w.Z)(ta,[["render",W],["__scopeId","data-v-6d7d5f50"]]);var sa=ea,ca=e(3947);const oa={class:"app-footer"},ia=(0,s.uE)('<div class="contact" data-v-255fa189><div class="container" data-v-255fa189><dl data-v-255fa189><dt data-v-255fa189>客户服务</dt><dd data-v-255fa189><i class="iconfont icon-kefu" data-v-255fa189></i> 在线客服</dd><dd data-v-255fa189><i class="iconfont icon-question" data-v-255fa189></i> 问题反馈</dd></dl><dl data-v-255fa189><dt data-v-255fa189>关注我们</dt><dd data-v-255fa189><i class="iconfont icon-weixin" data-v-255fa189></i> 公众号</dd><dd data-v-255fa189><i class="iconfont icon-weibo" data-v-255fa189></i> 微博</dd></dl><dl data-v-255fa189><dt data-v-255fa189>下载APP</dt><dd class="qrcode" data-v-255fa189><img src="'+ca+'" data-v-255fa189></dd><dd class="download" data-v-255fa189><span data-v-255fa189>扫描二维码</span><span data-v-255fa189>立马下载APP</span><a href="javascript:;" data-v-255fa189>下载页面</a></dd></dl><dl data-v-255fa189><dt data-v-255fa189>服务热线</dt><dd class="hotline" data-v-255fa189>400-0000-000 <small data-v-255fa189>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-255fa189><div class="container" data-v-255fa189><div class="slogan" data-v-255fa189><a href="javascript:;" data-v-255fa189><i class="iconfont icon-footer01" data-v-255fa189></i><span data-v-255fa189>价格亲民</span></a><a href="javascript:;" data-v-255fa189><i class="iconfont icon-footer02" data-v-255fa189></i><span data-v-255fa189>物流快捷</span></a><a href="javascript:;" data-v-255fa189><i class="iconfont icon-footer03" data-v-255fa189></i><span data-v-255fa189>品质新鲜</span></a></div><div class="copyright" data-v-255fa189><p data-v-255fa189><a href="javascript:;" data-v-255fa189>关于我们</a><a href="javascript:;" data-v-255fa189>帮助中心</a><a href="javascript:;" data-v-255fa189>售后服务</a><a href="javascript:;" data-v-255fa189>配送与验收</a><a href="javascript:;" data-v-255fa189>商务合作</a><a href="javascript:;" data-v-255fa189>搜索推荐</a><a href="javascript:;" data-v-255fa189>友情链接</a></p><p data-v-255fa189>CopyRight © 小兔鲜儿</p></div></div></div>',2),da=[ia];function na(a,t,e,c,o,i){return(0,s.wg)(),(0,s.iD)("footer",oa,da)}var ra={name:"AppFooter"};const la=(0,w.Z)(ra,[["render",na],["__scopeId","data-v-255fa189"]]);var pa=la,va=e(9242);const fa={class:"container"},ua={class:"right"};function _a(a,t,e,c,o,d){const n=(0,s.up)("RouterLink"),r=(0,s.up)("AppHeaderNav");return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(["app-header-sticky",{show:c.y>=78}])},[(0,s.wy)((0,s._)("div",fa,[(0,s.Wm)(n,{class:"logo",to:"/"}),(0,s.Wm)(r),(0,s._)("div",ua,[(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("品牌")])),_:1}),(0,s.Wm)(n,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("专题")])),_:1})])],512),[[va.F8,c.y>=78]])],2)}var ma=e(8401),ha={name:"AppHeaderSticky",components:{AppHeaderNav:$},setup(){const{y:a}=(0,ma.b)();return{y:a}}};const wa=(0,w.Z)(ha,[["render",_a],["__scopeId","data-v-fe1010e8"]]);var ga=wa,ka={name:"Layout",components:{AppTopNav:k,AppHeader:sa,AppFooter:pa,AppHeaderSticky:ga},setup(){const a=(0,_.oR)();a.dispatch("category/getList")}};const ya=(0,w.Z)(ka,[["render",o]]);var Ca=ya},3947:function(a,t,e){a.exports=e.p+"img/qrcode.f8ff6896.jpg"}}]);
//# sourceMappingURL=816.1742da1c.js.map