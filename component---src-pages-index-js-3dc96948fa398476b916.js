(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=(n(165),n(159)),c=n(158),l=n(190),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement(u.a,{title:"Gian Winckler page",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(l.a,{posts:e}))},t}(o.a.Component);t.default=s;var f="2978736111"},152:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(33),c=n.n(u);n.d(t,"a",function(){return c.a});n(153);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e){e.exports={data:{site:{siteMetadata:{title:"gianw.github.io",menuLinks:[{name:"Home",link:"/"},{name:"Brain",link:"/brain"},{name:"Tags",link:"/tags"},{name:"About",link:"/about"}]}}}}},155:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(56),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,n){var a=n(173).Symbol;e.exports=a},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(34),n(164),n(162),n(7)),o=n.n(i),u=n(154),c=n(152),l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement("header",null,r.a.createElement("div",{style:{padding:"1.0rem 1.0875rem"}},r.a.createElement("h2",{style:{margin:0,float:"right"}},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Gian Winckler")),r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},e.map(function(e){return r.a.createElement(c.a,{key:e.name,to:e.link},r.a.createElement("li",null," ",e.name))})))))},t}(r.a.Component),s=function(e){return r.a.createElement(c.b,{query:"3401424843",render:function(t){return r.a.createElement(l,Object.assign({data:t},e))},data:u})},f=n(156);t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(f.Helmet,null,r.a.createElement("title",null,"Gian Winckler")),r.a.createElement(s,null),r.a.createElement("main",null,t))}},159:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(156),u=n(4),c=n.n(u),l=n(152),s=function(e){e.title;var t=e.description,n=e.keywords,r=(e.image,e.pathname),u=e.article;return i.a.createElement(l.b,{query:f,render:function(e){var a=e.site.siteMetadata,c=a.title,l=(a.author,a.siteUrl),s=a.twitter,f={title:c||"Gian Winckler",description:t||"Desenvolvimento developer",url:""+l+(r||"/"),twitterUsername:s||"gianwinckler"};return i.a.createElement(o.Helmet,null,i.a.createElement("meta",{name:"description",content:f.description}),i.a.createElement("meta",{name:"image",content:f.image}),f.url&&i.a.createElement("meta",{property:"og:url",content:f.url}),!u?null:i.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&i.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&i.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&i.a.createElement("meta",{property:"og:image",content:f.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f.twitterUsername&&i.a.createElement("meta",{name:"twitter:creator",content:f.twitterUsername}),f.title&&i.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&i.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&i.a.createElement("meta",{name:"twitter:image",content:f.image}),n&&n.length>0&&i.a.createElement("meta",{name:"keywords",content:n.join(", ")}))},data:a})};t.a=s;var f="794042506";s.propTypes={title:c.a.string,description:c.a.string,image:c.a.string,pathname:c.a.string,article:c.a.bool},s.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"gianw.github.io",author:"Gian Winckler",siteUrl:"https://gianw.github.io/",social:{twitter:"gianwinckler"}}}}}},161:function(e,t,n){var a=n(172);e.exports=function(e){return null==e?"":a(e)}},166:function(e,t,n){var a=n(167)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},167:function(e,t,n){var a=n(168),r=n(169),i=n(182),o=RegExp("['’]","g");e.exports=function(e){return function(t){return a(i(r(t).replace(o,"")),e,"")}}},168:function(e,t){e.exports=function(e,t,n,a){var r=-1,i=null==e?0:e.length;for(a&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}},169:function(e,t,n){var a=n(170),r=n(161),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,a).replace(o,"")}},170:function(e,t,n){var a=n(171)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},171:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},172:function(e,t,n){var a=n(157),r=n(175),i=n(176),o=n(177),u=1/0,c=a?a.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(o(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-u?"-0":n}},173:function(e,t,n){var a=n(174),r="object"==typeof self&&self&&self.Object===Object&&self,i=a||r||Function("return this")();e.exports=i},174:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(74))},175:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},176:function(e,t){var n=Array.isArray;e.exports=n},177:function(e,t,n){var a=n(178),r=n(181),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&a(e)==i}},178:function(e,t,n){var a=n(157),r=n(179),i=n(180),o="[object Null]",u="[object Undefined]",c=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:o:c&&c in Object(e)?r(e):i(e)}},179:function(e,t,n){var a=n(157),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,u=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var a=!0}catch(c){}var r=o.call(e);return a&&(t?e[u]=n:delete e[u]),r}},180:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},181:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},182:function(e,t,n){var a=n(183),r=n(184),i=n(161),o=n(185);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?r(e)?o(e):a(e):e.match(t)||[]}},183:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},184:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},185:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",i="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+o+"|"+u+")",d="(?:"+s+"|"+u+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),g="(?:"+[i,c,l].join("|")+")"+p,x=RegExp([s+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,g].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},190:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(152),c=n(166),l=n.n(c),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return o.a.createElement("div",{className:"cardGrid"},e.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,a=t.frontmatter.description||"",r=t.frontmatter.tags||[];return o.a.createElement("div",{className:"postCard",key:n},o.a.createElement(u.a,{style:{textDecoration:"none"},to:t.fields.slug},o.a.createElement("h3",{className:"cardPostTitle"},n),o.a.createElement("small",{className:"cardPostDate"},t.frontmatter.date),o.a.createElement("p",{className:"cardPostDesc"}," ",a)),o.a.createElement("div",{className:"tagPostGrid"},r.map(function(e){return o.a.createElement(u.a,{to:"/tags/"+l()(e)+"/",className:"tagPost",key:e},e)})))}))},t}(o.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-3dc96948fa398476b916.js.map