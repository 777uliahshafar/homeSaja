(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"54pp":function(A,e,a){"use strict";a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt");var t=a("q1tI"),i=a.n(t),r=a("wx14"),s=a("zLVn"),n=a("TSYQ"),E=a.n(n),l=a("33Jr"),o=function(A){var e,a=A.className,t=A.listClassName,n=A.cssModule,o=A.size,c=A.tag,g=A.listTag,d=A["aria-label"],u=Object(s.a)(A,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),B=Object(l.a)(E()(a),n),m=Object(l.a)(E()(t,"pagination",((e={})["pagination-"+o]=!!o,e)),n);return i.a.createElement(c,{className:B,"aria-label":d},i.a.createElement(g,Object(r.a)({},u,{className:m})))};o.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var c=o,g=function(A){var e=A.active,a=A.className,t=A.cssModule,n=A.disabled,o=A.tag,c=Object(s.a)(A,["active","className","cssModule","disabled","tag"]),g=Object(l.a)(E()(a,"page-item",{active:e,disabled:n}),t);return i.a.createElement(o,Object(r.a)({},c,{className:g}))};g.defaultProps={tag:"li"};var d=g,u=(a("LK8F"),function(A){var e,a=A.className,t=A.cssModule,n=A.next,o=A.previous,c=A.first,g=A.last,d=A.tag,u=Object(s.a)(A,["className","cssModule","next","previous","first","last","tag"]),B=Object(l.a)(E()(a,"page-link"),t);o?e="Previous":n?e="Next":c?e="First":g&&(e="Last");var m,j=A["aria-label"]||e;o?m="‹":n?m="›":c?m="«":g&&(m="»");var Q=A.children;return Q&&Array.isArray(Q)&&0===Q.length&&(Q=null),u.href||"a"!==d||(d="button"),(o||n||c||g)&&(Q=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},Q||m),i.a.createElement("span",{className:"sr-only",key:"sr"},j)]),i.a.createElement(d,Object(r.a)({},u,{className:B,"aria-label":j}),Q)});u.defaultProps={tag:"a"};var B=u;e.a=function(A){var e=A.currentPage,a=A.numberOfPages,t=1===e,r=e===a,s=e-1==1?"/":"/page/"+(e-1).toString(),n="/page/"+(e+1).toString();return i.a.createElement(c,{"aria-label":"Page navigation example"},t?i.a.createElement(d,{disabled:!0},i.a.createElement(B,{previous:!0,href:"/"})):i.a.createElement(d,null,i.a.createElement(B,{previous:!0,href:s})),Array.from({length:a},(function(A,a){return e===a+1?i.a.createElement(d,{active:!0,key:"page-number"+(a+1)},i.a.createElement(B,{href:"/"+(0===a?"":"page/"+(a+1))},a+1)):i.a.createElement(d,{key:"page-number"+(a+1)},i.a.createElement(B,{href:"/"+(0===a?"":"page/"+(a+1))},a+1))})),r?i.a.createElement(d,{disabled:!0},i.a.createElement(B,{next:!0,href:n})):i.a.createElement(d,null,i.a.createElement(B,{next:!0,href:n})))}},HVC4:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby blog"}},"allMarkdownRemark":{"totalCount":10,"edges":[{"node":{"fields":{"slug":"/gatsby-searchbox/"},"id":"a9330b10-df98-5cd8-a5ab-6a36eef7981e","frontmatter":{"title":"Searchbox will come soon","tags":["one","three"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGhgJSBpP/EABgQAQEAAwAAAAAAAAAAAAAAAAEDAiEi/9oACAEBAAEFAk5tkk13/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQADEBFR/9oACAEBAAY/Ak2RtR//xAAWEAEBAQAAAAAAAAAAAAAAAAABAEH/2gAIAQEAAT8hKaoBTk//2gAMAwEAAgADAAAAEHPf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EDF//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABkQAQADAQEAAAAAAAAAAAAAAAEAEUEx0f/aAAgBAQABPxAHGR6ATGJT4RAUT//Z","aspectRatio":4.947368421052632,"src":"/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg","srcSet":"/static/f50ec2f2261e9988a642d30e6ec42249/285b1/howl650.jpg 188w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/0b683/howl650.jpg 375w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg 650w","sizes":"(max-width: 650px) 100vw, 650px"}}},"date":"February 2019"},"excerpt":"If you are reading this, you know Gatsby is awesome! Dolore anim duis enim sint elit et dolor pariatur ipsum anim dolor et consequat velit…"}},{"node":{"fields":{"slug":"/gatsby-pagination/"},"id":"3c73db80-f0db-57e2-8b19-3cfea6026852","frontmatter":{"title":"Pagination is complicated","tags":["one","two"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGhgJSBpP/EABgQAQEAAwAAAAAAAAAAAAAAAAEDAiEi/9oACAEBAAEFAk5tkk13/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQADEBFR/9oACAEBAAY/Ak2RtR//xAAWEAEBAQAAAAAAAAAAAAAAAAABAEH/2gAIAQEAAT8hKaoBTk//2gAMAwEAAgADAAAAEHPf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EDF//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABkQAQADAQEAAAAAAAAAAAAAAAEAEUEx0f/aAAgBAQABPxAHGR6ATGJT4RAUT//Z","aspectRatio":4.947368421052632,"src":"/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg","srcSet":"/static/f50ec2f2261e9988a642d30e6ec42249/285b1/howl650.jpg 188w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/0b683/howl650.jpg 375w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg 650w","sizes":"(max-width: 650px) 100vw, 650px"}}},"date":"January 2019"},"excerpt":"If you are reading this, you know Gatsby is awesome! Dolore anim duis enim sint elit et dolor pariatur ipsum anim dolor et consequat velit…"}},{"node":{"fields":{"slug":"/gatsby-burgermenu/"},"id":"80dbac3a-b4c1-5a90-b0cb-c5c790746428","frontmatter":{"title":"Burgermenu gatsby is powerful","tags":["one","three"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGhgJSBpP/EABgQAQEAAwAAAAAAAAAAAAAAAAEDAiEi/9oACAEBAAEFAk5tkk13/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQADEBFR/9oACAEBAAY/Ak2RtR//xAAWEAEBAQAAAAAAAAAAAAAAAAABAEH/2gAIAQEAAT8hKaoBTk//2gAMAwEAAgADAAAAEHPf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EDF//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABkQAQADAQEAAAAAAAAAAAAAAAEAEUEx0f/aAAgBAQABPxAHGR6ATGJT4RAUT//Z","aspectRatio":4.947368421052632,"src":"/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg","srcSet":"/static/f50ec2f2261e9988a642d30e6ec42249/285b1/howl650.jpg 188w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/0b683/howl650.jpg 375w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg 650w","sizes":"(max-width: 650px) 100vw, 650px"}}},"date":"January 2019"},"excerpt":"If you are reading this, you know Gatsby is awesome! Dolore anim duis enim sint elit et dolor pariatur ipsum anim dolor et consequat velit…"}},{"node":{"fields":{"slug":"/gatsby-component/"},"id":"402843d4-f231-5692-af24-4b9e403b8110","frontmatter":{"title":"Component gatsby is easy","tags":["one","two"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAGhgJSBpP/EABgQAQEAAwAAAAAAAAAAAAAAAAEDAiEi/9oACAEBAAEFAk5tkk13/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQADEBFR/9oACAEBAAY/Ak2RtR//xAAWEAEBAQAAAAAAAAAAAAAAAAABAEH/2gAIAQEAAT8hKaoBTk//2gAMAwEAAgADAAAAEHPf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/EDF//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QZ//EABkQAQADAQEAAAAAAAAAAAAAAAEAEUEx0f/aAAgBAQABPxAHGR6ATGJT4RAUT//Z","aspectRatio":4.947368421052632,"src":"/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg","srcSet":"/static/f50ec2f2261e9988a642d30e6ec42249/285b1/howl650.jpg 188w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/0b683/howl650.jpg 375w,\\n/static/f50ec2f2261e9988a642d30e6ec42249/63137/howl650.jpg 650w","sizes":"(max-width: 650px) 100vw, 650px"}}},"date":"January 2019"},"excerpt":"If you are reading this, you know Gatsby is awesome! Dolore anim duis enim sint elit et dolor pariatur ipsum anim dolor et consequat velit…"}}]}}}')},RXBc:function(A,e,a){"use strict";a.r(e);var t=a("q1tI"),i=a.n(t),r=a("Bl7J"),s=a("WORS"),n=a("HVC4"),E=a("Wbzz"),l=a("xHx8"),o=a("54pp"),c="2598018657",g=function(){var A;return i.a.createElement(E.b,{query:c,render:function(e){return A=Math.ceil(e.allMarkdownRemark.totalCount/4),i.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(A){var e=A.node;return i.a.createElement(l.a,{key:e.id,slug:e.fields.slug,keyword:e.frontmatter.keyword,title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,fluid:e.frontmatter.image.childImageSharp.fluid,tags:e.frontmatter.tags})})),i.a.createElement(o.a,{currentPage:1,numberOfPages:A}))},data:n})};a("q4sD"),e.default=function(){return i.a.createElement(r.a,null,i.a.createElement(s.a,{text:"Welcome"}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement(g,null))}},q4sD:function(A,e,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-33f3bf28132af22874c5.js.map