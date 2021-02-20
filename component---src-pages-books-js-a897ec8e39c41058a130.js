/*! For license information please see component---src-pages-books-js-a897ec8e39c41058a130.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RZpn:function(e,n,t){e.exports=t.p+"static/book-head-background2-019dcd2abfde64fcd5b0bf64234fa1c9.jpg"},TSYQ:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},ZsSW:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("7oih"),o=t("vrFN"),l=t("vOnD"),c=t("RZpn"),s=t.n(c),u=t("Raoh"),d=t.n(u),p=t("X13+");function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var f,h=t("TSYQ"),g=t.n(h),b=t("17x9"),v=t.n(b);function y(e,n){return void 0===e&&(e=""),void 0===n&&(n=f),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}var w="object"==typeof window&&window.Element||function(){};v.a.oneOfType([v.a.string,v.a.func,function(e,n,t){if(!(e[n]instanceof w))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},v.a.shape({current:v.a.any})]),v.a.oneOfType([v.a.func,v.a.string,v.a.shape({$$typeof:v.a.symbol,render:v.a.func}),v.a.arrayOf(v.a.oneOfType([v.a.func,v.a.string,v.a.shape({$$typeof:v.a.symbol,render:v.a.func})]))]),"undefined"==typeof window||!window.document||window.document.createElement;var k=function(e){var n=e.className,t=e.cssModule,a=e.type,i=e.size,o=e.color,l=e.children,c=e.tag,s=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","cssModule","type","size","color","children","tag"]),u=y(g()(n,!!i&&"spinner-"+a+"-"+i,"spinner-"+a,!!o&&"text-"+o),t);return r.a.createElement(c,m({role:"status"},s,{className:u}),l&&r.a.createElement("span",{className:y("sr-only",t)},l))};k.defaultProps={tag:"div",type:"border",children:"Loading..."};var x=k,E=t("FGyW"),C=(t("jDDT"),t("vDqi")),I=t.n(C),j=t("nz9S");var B=function(){var e,n=Object(a.useState)(""),t=n[0],i=n[1],o=Object(a.useState)(!1),l=o[0],c=o[1],s=Object(a.useState)([]),u=s[0],m=s[1],f=Object(a.useState)("AIzaSyDhRJe2nEkW1hfDn0ajPly6Mjb1NXRidQg"),h=f[0],g=(f[1],function(){c(!0),I.a.get("https://www.googleapis.com/books/v1/volumes?q="+t+"&country=US&maxResults=40&key="+h).then((function(e){e.data.items.length>0&&(m(e.data.items),c(!1))})).catch((function(e){c(!0),E.b.error(""+e.response.data.error.message)}))});return r.a.createElement("div",null,r.a.createElement(O,null,r.a.createElement(_,null,r.a.createElement("h1",null,"Przeszukaj bibliotekę"),r.a.createElement("input",{placeholder:"Wpisz nazwę książki lub autora",value:t,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&g()}}),r.a.createElement("button",{type:"submit",onClick:g}," ",r.a.createElement(p.a,null)))),(e=u.map((function(e,n){var t="";return void 0!==e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail&&(t=e.volumeInfo.imageLinks.thumbnail):t=d.a.toString(),r.a.createElement("div",{key:e.id},r.a.createElement(j.a,{thumbnail:t,title:e.volumeInfo.title,pageCount:e.volumeInfo.pageCount,language:e.volumeInfo.language,authors:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,description:e.volumeInfo.description,previewLink:e.volumeInfo.previewLink,selfLinkForBookshelf:e.selfLink}))})),l?r.a.createElement(N,null,r.a.createElement(x,{style:{width:"3rem",height:"3rem"}})):r.a.createElement(S,null,r.a.createElement(z,null,e))),r.a.createElement(E.a,null))},O=l.b.div.withConfig({displayName:"Books__MainImage",componentId:"sc-15n7rev-0"})(["background:#0c0c0c;display:flex;justify-content:center;align-items:center;flex-direction:column;background:linear-gradient( 180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 35%,rgba(0,0,0,0.1) 100%),url(",") no-repeat center;background-size:cover;color:#fff;align-items:center;width:100%;height:80vh;margin-top:-80px;"],s.a),_=l.b.div.withConfig({displayName:"Books__SearchBookForm",componentId:"sc-15n7rev-1"})(["text-align:center;letter-spacing:2px;h1{font-size:clamp(1.5rem,4vw,2rem);}input{padding:1rem 1.5rem;outline:none;width:100vh;height:48px;border:none;}button[type=submit]{border:none;color:white;background-color:#F26A2E;width:10vh;height:49px;cursor:pointer;}button:hover{background-color:#077BF1;transform:translateY(-2px);}@media screen and (max-width:1024px){font-size:14px;display:flex;flex-direction:column;input{width:70vh;}button[type=submit]{width:70vh;height:40px;}}@media screen and (max-width:768px){font-size:14px;display:flex;flex-direction:column;input{width:50vh;}button[type=submit]{width:50vh;height:40px;}}@media screen and (max-width:320px){font-size:14px;display:flex;flex-direction:column;input{width:50vh;margin-left:1rem;}button[type=submit]{width:50vh;height:40px;margin-left:1rem;}}"]),N=l.b.div.withConfig({displayName:"Books__SpinnerContainer",componentId:"sc-15n7rev-2"})(["display:flex;justify-content:center;margin-top:3rem;"]),S=l.b.div.withConfig({displayName:"Books__BooksContainer",componentId:"sc-15n7rev-3"})(["display:flex;flex-direction:column;justify-content:center;padding:4rem calc((100vw - 1300px) / 2);"]),z=l.b.div.withConfig({displayName:"Books__BooksContent",componentId:"sc-15n7rev-4"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:10px;padding:2rem;@media screen and (max-width:1000px){grid-template-columns:repeat(3,1fr);}@media screen and (max-width:768px){grid-template-columns:repeat(2,1fr);}@media screen and (max-width:500px){grid-template-columns:1fr;}"]);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Book Searcher"}),r.a.createElement(B,null))}},nz9S:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("vOnD"),o=t("YNLi");n.a=function(e){var n=e.thumbnail,t=e.title,i=e.pageCount,d=e.language,p=e.authors,m=e.publisher,f=e.description,h=e.previewLink,g=e.selfLinkForBookshelf,b=Object(a.useState)(!1),v=b[0],y=b[1],w=function(){return y(!0)};return r.a.createElement(c,{style:{width:"233px"}},r.a.createElement(s,{onClick:w},r.a.createElement("img",{src:n,alt:t,style:{width:"100%",height:"300px",cursor:"pointer"}})),r.a.createElement(u,null,r.a.createElement("button",{onClick:w},"Open book"),r.a.createElement(l,null,t)),v?r.a.createElement(o.a,{thumbnail:n,title:t,pageCount:i,language:d,authors:p,publisher:m,description:f,previewLink:h,selfLinkForBookshelf:g}):null)};var l=i.b.h3.withConfig({displayName:"BookCard__CardTitle",componentId:"phlwby-0"})(["padding:0.5rem;"]),c=i.b.div.withConfig({displayName:"BookCard__Card",componentId:"phlwby-1"})(["border-style:ridge;padding:0.5rem;width:100%;transition:0.2s ease;"]),s=i.b.div.withConfig({displayName:"BookCard__CardImg",componentId:"phlwby-2"})(["filter:brightness(70%);transition:0.4s cubic-bezier(0.075,0.82,0.165,1);&:hover{filter:brightness(100%);}a > img{padding:1rem 0;width:100px;}"]),u=i.b.div.withConfig({displayName:"BookCard__CardBody",componentId:"phlwby-3"})(["display:flex;flex-direction:column;button{border:none;color:white;background-color:#077BF1;cursor:pointer;height:100%;padding:0.5rem;}button:hover{background-color:#F26A2E;}"])}}]);
//# sourceMappingURL=component---src-pages-books-js-a897ec8e39c41058a130.js.map