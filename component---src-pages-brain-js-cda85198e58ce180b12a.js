(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,n,t){"use strict";t.r(n);var a=t(7),r=t.n(a),i=t(0),l=t.n(i),u=(t(159),t(155)),c=(t(156),t(151)),o=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.brains,t=e.imgs;return l.a.createElement("div",{className:"cardGrid"},n.map(function(e){var n=e.node,a=n.frontmatter.title||n.fields.slug;return l.a.createElement(c.a,{style:{textDecoration:"none"},to:n.fields.slug,className:"brainCard",key:a},l.a.createElement("div",null,l.a.createElement("h3",{className:"cardBrainTitle"},a),l.a.createElement("p",{className:"cardBrainImg"},t.map(function(e){return e.node.name===a?l.a.createElement("img",{src:e.node.publicURL,alt:a,key:e.node.id}):""}))))}))},n}(l.a.Component);t.d(n,"pageQuery",function(){return m});var s=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props.data,n=e.allMarkdownRemark.edges,t=e.allFile.edges;return l.a.createElement(u.a,null,l.a.createElement(o,{brains:n,imgs:t}))},n}(l.a.Component),m=(n.default=s,"1464856524")},151:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var a=t(0),r=t.n(a),i=t(4),l=t.n(i),u=t(33),c=t.n(u);t.d(n,"a",function(){return c.a});t(152);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,n,t){var a;e.exports=(a=t(154))&&a.default||a},153:function(e){e.exports={data:{site:{siteMetadata:{title:"gianw.github.io",menuLinks:[{name:"Home",link:"/"},{name:"Brain",link:"/brain"},{name:"Tags",link:"/tags"},{name:"About",link:"/about"}]}}}}},154:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),r=t.n(a),i=t(4),l=t.n(i),u=t(55),c=t(2),o=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},n.default=o},155:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=(t(34),t(158),t(156),t(7)),l=t.n(i),u=t(153),c=t(151),o=function(e){function n(){return e.apply(this,arguments)||this}return l()(n,e),n.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement("header",null,r.a.createElement("div",{style:{padding:"1.0rem 1.0875rem"}},r.a.createElement("h2",{style:{margin:0,float:"right"}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Gian Winckler")),r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},e.map(function(e){return r.a.createElement(c.a,{key:e.name,to:e.link},r.a.createElement("li",null," ",e.name))})))))},n}(r.a.Component),s=function(e){return r.a.createElement(c.b,{query:"3401424843",render:function(n){return r.a.createElement(o,Object.assign({data:n},e))},data:u})},m=t(157);n.a=function(e){var n=e.children;return r.a.createElement("div",null,r.a.createElement(m.Helmet,null,r.a.createElement("title",null,"Gian Winckler")),r.a.createElement(s,null),r.a.createElement("main",null,n))}}}]);
//# sourceMappingURL=component---src-pages-brain-js-cda85198e58ce180b12a.js.map