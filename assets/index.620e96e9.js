var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=("undefined"!=typeof require&&require,(e,o)=>{var r={};for(var s in e)a.call(e,s)&&o.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&t)for(var s of t(e))o.indexOf(s)<0&&n.call(e,s)&&(r[s]=e[s]);return r});import{i as s,C as l}from"./index.63a16e16.js";import{R as c,b as i,t as u,U as g,$ as d,a0 as m,P as f,a1 as h,a2 as b,a3 as p,a4 as w,B as x,q as E,I as v,a5 as y,a6 as S}from"./vendor.2a2d3f91.js";var k=[{id:"4de5457415f1429ea318f8b112a59a6c",name:"谷歌",value:"google",href:"https://www.google.com/search?q=",sugurl:"https://suggestqueries.google.com/complete/search?client=youtube&q=#content#&jsonp=window.google.ac.h",icon:"./img/engineLogo/google.ico",isShow:!0,selected:!1},{id:"3176606942b5445a913c099aeac9ddb0",name:"必应",value:"bing",href:"https://cn.bing.com/search?q=",sugurl:"https://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug",icon:"./img/engineLogo/bing.ico",isShow:!0,selected:!0},{id:"755551cec9054314a50e74ac9130c34b",name:"百度",value:"baidu",href:"https://www.baidu.com/s?wd=",sugurl:"https://suggestion.baidu.com/su?wd=#content#&cb=window.baidu.sug",icon:"./img/engineLogo/baidu.svg",isShow:!0,selected:!1},{id:"e9275210f149443b9d554a59861887c8",name:"搜狗",value:"sougou",href:"https://www.sogou.com/web?query=",sugurl:"https://www.sogou.com/suggnew/ajajjson?type=web&key=#content#",icon:"./img/engineLogo/sougou.ico",isShow:!0,selected:!1},{id:"ee4b853b01cd4c9bb3fdcb814c13b298",name:"好搜",value:"好搜",href:"https://www.so.com/s?ie=utf-8&fr=hao_360so&src=home_hao_360so&q=",sugurl:"https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&format=json&word=#content#&callback=window.so.sug",icon:"./img/engineLogo/so360.ico",isShow:!0,selected:!1},{id:"db34d1185cdf42339f17dd34f25b897b",name:"Magi",value:"magi",href:"https://magi.com/search?q=",sugurl:"https://magi.com/suggest?size=8&q=#content#&callback=window.magi.sug",icon:"./img/engineLogo/magi.png",isShow:!0,selected:!1},{id:"ace54031b5bb4b4693e4ffc4cc304199",name:"夸克",value:"quark",href:"https://quark.sm.cn/s?q=",sugurl:"https://quark.sm.cn/api/quark_sug?q=#content#&callback=window.quark.sug",icon:"./img/engineLogo/quark.ico",isShow:!0,selected:!1}];const q=({onChange:e})=>{const[t,a]=c.useState([]),[n,o]=c.useState({}),r=()=>{new Promise((e=>{e({code:200,msg:"获取成功",data:k})})).then((t=>{if(a(t.data),0===t.data.length)return;const n=localStorage.getItem("engine_id");if(n){const a=t.data.find((e=>e.id===n));o(a||t.data[0]),e&&e(a||t.data[0])}else o(t.data[0]),e&&e(t.data[0])}))};return c.useEffect((()=>{r()}),[]),c.createElement("div",{className:"w-full text-left mb-1 flex justify-start items-center overflow-x-auto"},t.map((t=>c.createElement(i,{key:t.id,className:u("mx-1",{"bg-primary text-white":t.id===n.id}),size:"small",label:t.name,onClick:a=>{return n=t,localStorage.setItem("engine_id",n.id),o(n),void(e&&e(n));var n}}))))};const N=e=>{var t=e,{open:a,anchorEl:n,wd:o,onSelect:l}=t;r(t,["open","anchorEl","wd","onSelect"]);const[i,u]=c.useState([]),[x,E]=c.useState({}),[v,y]=c.useState(!1),S=function(e,t=300,a=[]){const{current:n}=g.exports.useRef({fn:e,timer:void 0});return g.exports.useEffect((function(){n.fn=e}),[e]),g.exports.useCallback((function(...e){n.timer&&clearTimeout(n.timer),n.timer=setTimeout((()=>{n.fn(...e)}),t)}),a)}((function(){k()}),300),k=()=>{o?(y(!0),(e=>s.get("/v1/resource/baidu/sug",{params:{wd:e}}))(o).then((e=>{let t=e.data.data;u(t.sugs),E(t.engine),y(!1)}))):u([])};return c.useEffect((()=>{S()}),[o]),c.createElement(d,{open:a&&o.length>0,anchorEl:n,transition:!0,placement:"bottom",container:n,className:"z-10"},c.createElement(m,{className:"mt-1",style:{width:`${null==n?void 0:n.clientWidth}px`}},c.createElement(f,{spinning:v,indicator:c.createElement(h,{spin:!0})},i.length?c.createElement(c.Fragment,null,c.createElement(b,{disablePadding:!0},i.map(((e,t)=>c.createElement(p,{button:!0,key:t,onClick:()=>{l(e.content)}},e.content)))),c.createElement("p",{className:"px-5 py-2 text-right"},"数据来源：",x.name)):c.createElement(w,{image:w.PRESENTED_IMAGE_SIMPLE}))))},j=e=>{var s=e,{onChange:l,onPressEnter:i,onBtnClick:u,onFocus:g,onBlur:d,value:m,defaultValue:f,primaryText:h}=s,b=r(s,["onChange","onPressEnter","onBtnClick","onFocus","onBlur","value","defaultValue","primaryText"]);const[p,w]=c.useState(f||m||""),[E,v]=c.useState({}),[y,S]=c.useState(!1),[k,j]=c.useState(""),[C,P]=c.useState(null);return c.createElement("div",{className:"search-input max-w-2xl w-4/5",onFocus:e=>{S(!0),P(e.currentTarget)},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||S(!1)}},c.createElement(q,{onChange:e=>{v(e)}}),c.createElement("div",{className:"flex justify-center items-center rounded-md shadow-xl overflow-hidden"},c.createElement("input",((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&o(e,s,r[s]);if(t)for(var s of t(r))n.call(r,s)&&o(e,s,r[s]);return e})({className:"py-2 px-4 border-none leading-4 sm:leading-7 outline-none flex-grow rounded-tr-none rounded-br-none placeholder-gray-400 focus:placeholder-gray-200 transition-all",type:"text",value:p,onChange:e=>{w(e.target.value),j(e.target.value),l&&l(e,e.target.value,E)},onFocus:e=>{g&&g(e)},onBlur:e=>{d&&d(e)},onKeyDown:e=>{"Enter"===e.code&&i&&i(p,E)}},b)),c.createElement(x,{className:"w-16 sm:w-24 rounded-tl-none px-2 sm:px-4 leading-4 sm:leading-7 text-center tracking-widest rounded-bl-none bg-primary text-white",size:"large",variant:"contained",disableElevation:!0,onClick:()=>{u&&u(p,E)}},"搜索")),c.createElement(N,{open:y,wd:k,anchorEl:C,onSelect:e=>{u&&u(e,E)}}))},C=e=>{var t=e,{history:a}=t;r(t,["history"]);return c.createElement("div",{className:"index-page flex flex-col h-screen"},c.createElement("div",{className:"index-navbar-box bg-gray-500 flex-grow max-h-12 text-right align-middle"},c.createElement(E,{title:"网址导航"},c.createElement(v,{onClick:()=>a.push("/navigation")},c.createElement(y,null))),c.createElement(E,{title:"设置"},c.createElement(v,{onClick:()=>a.push("/setting")},c.createElement(S,null)))),c.createElement("div",{className:"index-logo-box bg-red-500 flex-grow max-h-48 sm:max-h-72"}),c.createElement("div",{className:"index-input-box bg-yellow-500 flex-grow max-h-20 flex justify-center items-center"},c.createElement(j,{placeholder:"请输入搜索内容"})),c.createElement("div",{className:"index-content-box bg-green-500 flex-grow"}),c.createElement("div",{className:"index-copyright-box bg-blue-500 flex-grow max-h-8 text-center leading-8"},c.createElement(l,null)))};export{C as default};
