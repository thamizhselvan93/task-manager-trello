(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(33),c=n.n(r),i=(n(86),n(13)),s=n(14),l=n(16),u=n(15),d=n(17),p=n(35),f=n(26),h=n(8),b=n(43),m=n.n(b),g=n(58),k=n.n(g);k.a.initializeApp({apiKey:"AIzaSyCF3he5hYHnn_PMNYz7oZf0-nk4Ym1NJ5E",authDomain:"taskmanager-ec3aa.firebaseapp.com",databaseURL:"https://taskmanager-ec3aa.firebaseio.com",projectId:"taskmanager-ec3aa",storageBucket:"taskmanager-ec3aa.appspot.com",messagingSenderId:"562232183908"});var x=k.a.firestore(),v=n(3),O=n(4);function j(){var t=Object(v.a)(["\n  padding: 10px;\n\n"]);return j=function(){return t},t}function w(){var t=Object(v.a)(["\n  padding: 10px;\n  background-color: rebeccapurple;\n  color: white;\n  font-weight: bold;\n"]);return w=function(){return t},t}function E(){var t=Object(v.a)(["\n    float: right;\n    font-size: 20px;\n    cursor: pointer;\n    margin-right: 20px;\n    margin-top: 10px; \n"]);return E=function(){return t},t}function M(){var t=Object(v.a)(["\n    background-color: white; \n    color: black; \n    border: 2px solid #ccc;\n    padding: 16px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: block;\n    font-size: 16px;\n    margin: 4px 2px;\n    -webkit-transition-duration: 0.4s; /* Safari */\n    transition-duration: 0.4s;\n    cursor: pointer;\n    &:hover {\n        border: 2px solid #555;\n        background-color: #555;\n        color: white;\n    }\n"]);return M=function(){return t},t}function S(){var t=Object(v.a)(["\n    padding: 12px 20px;\n    width: 70%;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: 3px solid #ccc;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    min-height: 100px;\n    outline: none;\n    &:focus {\n        border: 3px solid #555;\n    }\n"]);return S=function(){return t},t}function D(){var t=Object(v.a)(["\n    padding: 12px 20px;\n    width: 70%;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: 3px solid #ccc;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    outline: none;\n    &:focus {\n        border: 3px solid #555;\n    }\n"]);return D=function(){return t},t}function y(){var t=Object(v.a)(["\n  padding-left: 5px;\n  font-size: 12px;\n"]);return y=function(){return t},t}function C(){var t=Object(v.a)(["\n  text-transform: capitalize;\n  font-weight: bold;\n  padding: 5px;\n  display: block;\n"]);return C=function(){return t},t}function T(){var t=Object(v.a)(["\n  position: relative;\n  padding: 5px;\n  border-bottom-radius: 5px;\n  background-color: ",";\n  color: #fff;\n  font-size: 12px;\n  margin-left: 10px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  vertical-align: super;\n"]);return T=function(){return t},t}function z(){var t=Object(v.a)(["  \n  min-height: 150px;\n  background-color: #fff;\n  border-radius: 10px;\n  margin: 20px 1px 20px 1px;\n  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);\n  border-top: 13px solid ",";\n  &:hover {\n    cursor: pointer;\n  }\n"]);return z=function(){return t},t}function I(){var t=Object(v.a)(["\n  display: inline-block;\n  margin: 0 auto;\n  margin: 20px;\n  background-color: #f2f2f2;\n  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);\n  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);\n  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.29);\n  border-radius: 10px;\n  height: 500px;\n  width: 250px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);return I=function(){return t},t}function A(){var t=Object(v.a)(["\n  font-size: 24px;\n  font-weight: bold;\n"]);return A=function(){return t},t}function N(){var t=Object(v.a)(["\n  background-color: #f2f3f7;\n  height: 100%;\n  width: 100%;\n  padding: 30px;\n"]);return N=function(){return t},t}function P(){var t=Object(v.a)(["\n\n"]);return P=function(){return t},t}var W=O.a.div(P()),B=O.a.div(N()),H=O.a.p(A()),J=O.a.div(I()),R=O.a.div(z(),function(t){var e=t.cat;return"Project"===e?"#ffbe2b":"Development"===e?"#6245ff":"black"}),Y=O.a.span(T(),function(t){var e=t.cat;return"Project"===e?"#ffbe2b":"Development"===e?"#6245ff":"black"}),q=O.a.span(C()),F=O.a.span(y()),K=O.a.input(D()),L=O.a.textarea(S()),U=O.a.button(M()),Z=O.a.span(E()),$=O.a.div(w()),_=O.a.div(j()),G=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).onSubmit=function(){if(console.log("this",Object(h.a)(t)),t.props.edit)return x.collection("tasks").doc(t.props.task[0].id).update({desc:t.state.taskDesc,title:t.state.taskTitle,cat:t.state.taskCat}).then(function(){console.log("Document successfully updated!"),t.props.closeModal()}).catch(function(t){console.error("Error updating document: ",t)});x.collection("tasks").add({creator:"thamizh",currentOwner:"thamizh",desc:t.state.taskDesc,title:t.state.taskTitle,status:t.props.status,cat:t.state.taskCat}).then(function(t){console.log("Document written with ID: ",t.id)}).catch(function(t){console.error("Error adding document: ",t)}),t.props.closeModal()},t.deleteTask=function(){t.props.edit&&x.collection("tasks").where("title","==",t.props.task[0].title).get().then(function(t){t.forEach(function(t){x.collection("tasks").doc(t.id).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(t){console.error("Error removing document: ",t)})})}).catch(function(t){console.log("Error getting documents: ",t)}),t.props.closeModal()},t.setState({taskTitle:"",taskDesc:"",deleteTask:"",taskCat:""}),t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.props.task&&this.props.task.length>0?this.setState({taskTitle:this.props.task[0].title,taskDesc:this.props.task[0].desc,taskCat:this.props.task[0].cat}):this.setState({taskTitle:"",taskDesc:"",taskCat:""})}},{key:"render",value:function(){var t=this;return o.a.createElement(W,null,o.a.createElement(Z,{onClick:this.props.closeModal},o.a.createElement("i",{className:"fa fa-close"})),o.a.createElement(Z,{onClick:this.deleteTask},o.a.createElement("i",{className:"fa fa-trash"})),o.a.createElement("p",null," Title "),o.a.createElement(K,{value:this.state.taskTitle,onChange:function(e){return t.setState({taskTitle:e.target.value})}}),o.a.createElement("p",null," Description "),o.a.createElement(L,{value:this.state.taskDesc,onChange:function(e){return t.setState({taskDesc:e.target.value})}}),o.a.createElement("p",null," Category "),o.a.createElement(K,{value:this.state.taskCat,onChange:function(e){return t.setState({taskCat:e.target.value})}}),o.a.createElement(U,{onClick:this.onSubmit}," Add Task "))}}]),e}(a.Component),Q="",V={content:{overflow:"hidden",margin:"2%","margin-left":"5%","margin-right":"5%",border:"none","background-color":"#f2f2f2"}},X=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).handleEditModal=function(e){t.props.openModals(e)},t.onDragStart=function(t){Q=t.id},t.onDragOver=function(t,e){t.preventDefault()},t.onDrop=function(t,e){return x.collection("tasks").doc(Q).update({status:e}).then(function(){console.log("Document successfully updated!")}).catch(function(t){console.error("Error updating document: ",t)})},t.state={modalIsOpen:!1},t.openModal=t.openModal.bind(Object(h.a)(t)),t.closeModal=t.closeModal.bind(Object(h.a)(t)),t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){var t=this;return o.a.createElement(J,{onDragOver:function(e){return t.onDragOver(e,t.props.cat)},onDrop:function(e){return t.onDrop(e,t.props.cat)}},o.a.createElement(Z,null,o.a.createElement("i",{className:"fa fa-plus",onClick:this.openModal})),o.a.createElement($,null," ",this.props.title," "),o.a.createElement(m.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,ariaHideApp:!1,style:V},o.a.createElement(G,{closeModal:this.closeModal,status:this.props.cat,edit:!1})),o.a.createElement(_,null,this.props.tasks.map(function(e,n){return o.a.createElement(R,{cat:e.cat,key:n,onClick:function(){return t.handleEditModal(e)},draggable:!0,onDragStart:function(){return t.onDragStart(e)}},o.a.createElement(Y,{cat:e.cat}," ",e.cat||"Development"," "),o.a.createElement(q,null," ",e.title," "),o.a.createElement(F,null," -> ",e.desc," "))})))}}]),e}(a.Component),tt={content:{overflow:"hidden",margin:"2%","margin-left":"5%","margin-right":"5%",border:"none","background-color":"#f2f2f2"}},et=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={modalIsOpen:!1,todo:[],wip:[],test:[],comp:[],current:[]},t.editModal=t.editModal.bind(Object(h.a)(t)),t.closeModal=t.closeModal.bind(Object(h.a)(t)),t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"editModal",value:function(t){this.setState({current:[].concat(Object(f.a)(this.state.current),[t]),modalIsOpen:!0})}},{key:"closeModal",value:function(){this.setState({current:[],modalIsOpen:!1})}},{key:"componentDidMount",value:function(){var t=this;x.collection("tasks").where("status","==","todo").onSnapshot(function(e){t.setState({todo:[]}),e.forEach(function(e){e=Object(p.a)({},e.data(),{id:e.id}),t.setState({todo:[].concat(Object(f.a)(t.state.todo),[e])})})}),x.collection("tasks").where("status","==","wip").onSnapshot(function(e){t.setState({wip:[]}),e.forEach(function(e){e=Object(p.a)({},e.data(),{id:e.id}),t.setState({wip:[].concat(Object(f.a)(t.state.wip),[e])})})}),x.collection("tasks").where("status","==","comp").onSnapshot(function(e){t.setState({comp:[]}),e.forEach(function(e){e=Object(p.a)({},e.data(),{id:e.id}),t.setState({comp:[].concat(Object(f.a)(t.state.comp),[e])})})}),x.collection("tasks").where("status","==","test").onSnapshot(function(e){t.setState({test:[]}),e.forEach(function(e){e=Object(p.a)({},e.data(),{id:e.id}),t.setState({test:[].concat(Object(f.a)(t.state.test),[e])})})})}},{key:"render",value:function(){return o.a.createElement(B,null,o.a.createElement(m.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,ariaHideApp:!1,style:tt},o.a.createElement(G,{closeModal:this.closeModal,status:this.props.cat,task:this.state.current,edit:!0})),o.a.createElement(H,null," Task board "),o.a.createElement(X,{title:"To do",tasks:this.state.todo,cat:"todo",openModals:this.editModal}),o.a.createElement(X,{title:"Work in Progress",tasks:this.state.wip,cat:"wip",openModals:this.editModal}),o.a.createElement(X,{title:"Testing",tasks:this.state.test,cat:"test",openModals:this.editModal}),o.a.createElement(X,{title:"Completed",tasks:this.state.comp,cat:"comp",openModals:this.editModal}))}}]),e}(a.Component),nt=n(11),at=Object(nt.a)(),ot=n(160),rt=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(ot.b,{history:at},o.a.createElement(ot.a,{exact:!0,path:"/",component:et}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},81:function(t,e,n){t.exports=n(158)},86:function(t,e,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.367edff3.chunk.js.map