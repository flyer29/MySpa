(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),c=(n(15),n(6)),i=n(5),s=n(1),u=n(2),m=n(4),f=n(3),p=(n(16),function(e){var t=e.liked,n=e.allPosts;return r.a.createElement("div",{className:"app-header d-flex"},r.a.createElement("h1",null,"\u0410\u043d\u0434\u0440\u0435\u0439 \u0411\u043e\u0440\u043e\u0434\u0438\u043d"),r.a.createElement("h2",null,"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 ",n,", \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",t))}),d=(n(17),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onUpdateSearch=function(e){var t=e.target.value;a.setState({term:t}),a.props.onUpdateSearch(t)},a.state={term:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),n}(a.Component)),b=(n(18),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,a=t.label,o=e.props,l=o.filter,c=o.onFilterSelect,i=l===n?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{key:n,type:"button",className:"btn ".concat(i),onClick:function(){return c(n)}},a)}));return r.a.createElement("div",{className:"btn-group"},t)}}]),n}(a.Component)),h=n(9),g=(n(19),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelete,a=e.onToggleImportant,o=e.onToggleLiked,l=e.important,c="app-list-item d-flex justify-content-between";return e.like&&(c+=" like"),l&&(c+=" important"),r.a.createElement("div",{className:c},r.a.createElement("span",{className:"app-list-item-label",onClick:o},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:" btn-star btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{type:"button",className:" btn-trash btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}}]),n}(a.Component));n(20);var v=function(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,o=e.onToggleLiked,l=t.map((function(e){if("object"===typeof e&&function(e){for(var t in e)return!0;return!1}(e)){var t=e.id,l=Object(h.a)(e,["id"]);return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(g,Object.assign({},l,{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleLiked:function(){return o(t)}})))}}));return r.a.createElement("ul",{className:"app-list list-group"},l)},j=(n(21),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onValueChange=function(e){a.setState({text:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.onAdd(a.state.text),a.setState({text:""})},a.state={text:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"\u041e \u0447\u0451\u043c \u0412\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u0443\u043c\u0430\u0435\u0442\u0435?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(a.Component)),O=(n(22),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).deleteItem=function(e){a.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n.slice(0,a),o=n.slice(a+1);return{data:[].concat(Object(i.a)(r),Object(i.a)(o))}}))},a.addItem=function(e){var t={label:e,important:!1,id:a.maxId++};a.setState((function(e){var n=e.data;return{data:[].concat(Object(i.a)(n),[t])}}))},a.searchPost=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.indexOf(t)>-1}))},a.filterPosts=function(e,t){return"like"===t?e.filter((function(e){return e.like})):e},a.onToggleImportant=function(e){a.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],o=Object(c.a)(Object(c.a)({},r),{},{important:!r.important});return{data:[].concat(Object(i.a)(n.slice(0,a)),[o],Object(i.a)(n.slice(a+1)))}}))},a.onToggleLiked=function(e){a.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],o=Object(c.a)(Object(c.a)({},r),{},{like:!r.like});return{data:[].concat(Object(i.a)(n.slice(0,a)),[o],Object(i.a)(n.slice(a+1)))}}))},a.onUpdateSearch=function(e){a.setState({term:e})},a.onFilterSelect=function(e){a.setState({filter:e})},a.state={data:[{label:"Going to learn React",important:!0,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.maxId=4,a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,o=t.filter((function(e){return e.like})).length,l=t.length,c=this.filterPosts(this.searchPost(t,n),a);return r.a.createElement("div",{className:"app"},r.a.createElement(p,{liked:o,allPosts:l}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(d,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(b,{filter:a,onFilterSelect:this.onFilterSelect})),r.a.createElement(v,{posts:c,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),r.a.createElement(j,{onAdd:this.addItem}))}}]),n}(a.Component));l.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8d9542bb.chunk.js.map