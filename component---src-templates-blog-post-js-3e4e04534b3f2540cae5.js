(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return o});var a=n(7),r=n.n(a),l=n(0),i=n.n(l),u=n(154),c=(n(156),n(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return i.a.createElement(u.a,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"48rem",padding:"1.0rem 1.0875rem"}},i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:{display:"block"}},e.frontmatter.date),i.a.createElement("hr",null),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html},className:"mainPost"})))},t}(i.a.Component));t.default=c;var o="3323781368"},150:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),l=n(4),i=n.n(l),u=n(33),c=n.n(u);n.d(t,"a",function(){return c.a});n(151);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"gianw.github.io",menuLinks:[{name:"Home",link:"/"},{name:"Brain",link:"/brain"},{name:"About",link:"/about"}]}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),l=n(4),i=n.n(l),u=n(55),c=n(2),o=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(34),n(157),n(155),n(7)),i=n.n(l),u=n(152),c=n(150),o=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement("header",null,r.a.createElement("div",{style:{padding:"1.0rem 1.0875rem"}},r.a.createElement("h2",{style:{margin:0,float:"right"}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Gian Winckler")),r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},e.map(function(e){return r.a.createElement(c.a,{key:e.name,to:e.link},r.a.createElement("li",null," ",e.name))})))))},t}(r.a.Component),m=function(e){return r.a.createElement(c.b,{query:"3401424843",render:function(t){return r.a.createElement(o,Object.assign({data:t},e))},data:u})},s=n(158);t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,"Gian Winckler")),r.a.createElement(m,null),r.a.createElement("main",null,t))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3e4e04534b3f2540cae5.js.map