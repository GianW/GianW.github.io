(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),c=(a(165),a(158)),o=(a(162),a(152)),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.brains,a=e.imgs;return l.a.createElement("div",{className:"cardGrid"},t.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return l.a.createElement(o.a,{style:{textDecoration:"none"},to:t.fields.slug,className:"brainCard",key:n},l.a.createElement("div",null,l.a.createElement("h3",{className:"cardBrainTitle"},n),l.a.createElement("p",{className:"cardBrainImg"},a.map(function(e){return e.node.name===n?l.a.createElement("img",{src:e.node.publicURL,alt:n,key:e.node.id}):""}))))}))},t}(l.a.Component),u=a(159);a.d(t,"pageQuery",function(){return p});var s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges,a=e.allFile.edges;return l.a.createElement(c.a,null,l.a.createElement(u.a,{title:"Gian Winckler page",keywords:["blog","gatsby","javascript","react"]}),l.a.createElement(m,{brains:t,imgs:a}))},t}(l.a.Component),p=(t.default=s,"1464856524")},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(153);var m=r.a.createContext({}),u=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"gianw.github.io",menuLinks:[{name:"Home",link:"/"},{name:"Brain",link:"/brain"},{name:"Tags",link:"/tags"},{name:"About",link:"/about"}]}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(56),o=a(2),m=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(34),a(164),a(162),a(7)),l=a.n(i),c=a(154),o=a(152),m=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement("header",null,r.a.createElement("div",{style:{padding:"1.0rem 1.0875rem"}},r.a.createElement("h2",{style:{margin:0,float:"right"}},r.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Gian Winckler")),r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},e.map(function(e){return r.a.createElement(o.a,{key:e.name,to:e.link},r.a.createElement("li",null," ",e.name))})))))},t}(r.a.Component),u=function(e){return r.a.createElement(o.b,{query:"3401424843",render:function(t){return r.a.createElement(m,Object.assign({data:t},e))},data:c})},s=a(156);t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,"Gian Winckler")),r.a.createElement(u,null),r.a.createElement("main",null,t))}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),l=a(156),c=a(4),o=a.n(c),m=a(152),u=function(e){e.title;var t=e.description,a=e.keywords,r=(e.image,e.pathname),c=e.article;return i.a.createElement(m.b,{query:s,render:function(e){var n=e.site.siteMetadata,o=n.title,m=(n.author,n.siteUrl),u=n.twitter,s=n.avatar,p={title:o||"Gian Winckler",description:t||"Software engineer",url:""+m+(r||"/"),twitterUsername:u||"gianwinckler",image:s||""};return i.a.createElement(l.Helmet,null,i.a.createElement("meta",{itemprop:"name",content:p.title}),i.a.createElement("meta",{name:"description",content:p.description}),i.a.createElement("meta",{name:"image",content:p.image}),p.url&&i.a.createElement("meta",{property:"og:url",content:p.url}),!c?null:i.a.createElement("meta",{property:"og:type",content:"article"}),p.title&&i.a.createElement("meta",{property:"og:title",content:p.title}),p.description&&i.a.createElement("meta",{property:"og:description",content:p.description}),p.image&&i.a.createElement("meta",{property:"og:image",content:p.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p.twitterUsername&&i.a.createElement("meta",{name:"twitter:creator",content:p.twitterUsername}),p.title&&i.a.createElement("meta",{name:"twitter:title",content:p.title}),p.description&&i.a.createElement("meta",{name:"twitter:description",content:p.description}),p.image&&i.a.createElement("meta",{name:"twitter:image",content:p.image}),a&&a.length>0&&i.a.createElement("meta",{name:"keywords",content:a.join(", ")}))},data:n})};t.a=u;var s="581140094";u.propTypes={title:o.a.string,description:o.a.string,image:o.a.string,pathname:o.a.string,article:o.a.bool},u.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"gianw.github.io",author:"Gian Winckler",siteUrl:"https://gianw.github.io/",social:{twitter:"gianwinckler"}}}}}}}]);
//# sourceMappingURL=component---src-pages-brain-js-55f191ef2b119955697e.js.map