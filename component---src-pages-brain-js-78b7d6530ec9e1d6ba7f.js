(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dQ0n:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),o=(r("43g+"),r("Bl7J")),c=(r("f3/d"),r("Wbzz"));var i=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.brains,r=e.imgs;return n.a.createElement("div",{className:"cardGrid"},t.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement(c.Link,{style:{textDecoration:"none"},to:t.fields.slug,className:"brainCard",key:a},n.a.createElement("div",null,n.a.createElement("h3",{className:"cardBrainTitle"},a),n.a.createElement("p",{className:"cardBrainImg"},r.map((function(e){return e.node.name===a?n.a.createElement("img",{src:e.node.publicURL,alt:a,key:e.node.id}):""})))))})))},a}(n.a.Component),p=r("vrFN");r.d(t,"pageQuery",(function(){return s}));var l=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,r=e.allFile.edges;return n.a.createElement(o.a,null,n.a.createElement(p.a,{title:"Gian Winckler page",keywords:["blog","gatsby","javascript","react"]}),n.a.createElement(i,{brains:t,imgs:r}))},a}(n.a.Component),s=(t.default=l,"1464856524")}}]);
//# sourceMappingURL=component---src-pages-brain-js-78b7d6530ec9e1d6ba7f.js.map