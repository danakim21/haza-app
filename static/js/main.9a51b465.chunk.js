(this["webpackJsonphaza-app"]=this["webpackJsonphaza-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(18),s=a.n(c),r=a(8),o=a(1);a(25);var i=function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a<10&&(a="0".concat(a));var l=e.getDate();l<10&&(l="0".concat(l));var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return n.a.createElement("h3",null,"".concat(t,"/").concat(a,"/").concat(l," ").concat(c))},m=a(9),u=a(10),h=a(12),d=a(11);a(26),a(27);var v=function(){var e=localStorage.getItem("activeTasks");return e=e?e.split(","):[],n.a.createElement("nav",null,n.a.createElement("p",null,0===e.length?"0 Task":"".concat(e.length," Tasks")),n.a.createElement(r.b,{to:"/",id:"incomplete"},"Incomplete"),n.a.createElement(r.b,{to:"/completed",id:"completed"},"Completed"))};function k(){var e=localStorage.getItem("activeTasks");return e&&e.length?"":n.a.createElement("p",{class:"no-tasks"},"There are no tasks")}var p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={activeTasks:[],completedTasks:[],currentTask:""},e.handleCompleteClick=function(t){var a=localStorage.getItem("activeTasks").split(",");a=a.filter((function(e){return e!==t}));var l=localStorage.getItem("completedTasks");(l=l.length?l.split(","):[]).push(t),e.setState({activeTasks:a,completedTasks:l}),localStorage.setItem("activeTasks",a),localStorage.setItem("completedTasks",l)},e.handleDeleteClick=function(t){var a=localStorage.getItem("activeTasks").split(",");-1!==a.indexOf(t)&&(a=a.filter((function(e){return e!==t})),e.setState({activeTasks:a}),localStorage.setItem("activeTasks",a))},e.checkTaskExists=function(e){var t=localStorage.getItem("activeTasks");return(t=t?t.split(","):[]).includes(e)},e.handleSubmit=function(t){t.preventDefault();var a=e.state.currentTask;if(""!==a){if(e.checkTaskExists(a))alert('Task "'.concat(a,'" already exists'));else{var l=e.state.activeTasks;l.push(e.state.currentTask),e.setState({activeTasks:l}),localStorage.setItem("activeTasks",l)}e.setState({currentTask:""})}},e.handleTaskChange=function(t){e.setState({currentTask:t.target.value})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("activeTasks");e=e?e.split(","):[];var t=localStorage.getItem("completedTasks");t=t?t.split(","):[],this.setState({activeTasks:e,completedTasks:t}),localStorage.setItem("activeTasks",e),localStorage.setItem("completedTasks",t)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement("form",{className:"addNewTask",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",onChange:this.handleTaskChange,value:this.state.currentTask,placeholder:"Add New Task",className:"inputNewTask"}),n.a.createElement("input",{type:"submit",value:"Add Task",className:"submitNewTask"})),n.a.createElement(k,null),n.a.createElement("ul",{id:"taskList"},this.state.activeTasks.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement("svg",{id:"task-checkbox",onClick:function(a){e.handleCompleteClick(t)},width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-check2-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"})),n.a.createElement("li",{key:a},t),n.a.createElement("svg",{id:"task-trash",onClick:function(a){e.handleDeleteClick(t)},width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})))}))))}}]),a}(n.a.Component);a(33);function g(){var e=localStorage.getItem("completedTasks");return e&&e.length?"":n.a.createElement("p",{class:"no-completed-tasks"},"There are no completed tasks")}var T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={activeTasks:[],completedTasks:[]},e}return Object(u.a)(a,[{key:"handleDeleteClick",value:function(e){var t=localStorage.getItem("completedTasks").split(",");t=t.filter((function(t){return t!==e})),this.setState({completedTasks:t}),localStorage.setItem("completedTasks",t)}},{key:"handleCheckClick",value:function(e){var t=localStorage.getItem("completedTasks").split(",");t=t.filter((function(t){return t!==e}));var a=localStorage.getItem("activeTasks");(a=a.length?a.split(","):[]).push(e),this.setState({activeTasks:a,completedTasks:t}),localStorage.setItem("activeTasks",a),localStorage.setItem("completedTasks",t)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("activeTasks"),t=localStorage.getItem("completedTasks");e=e.length?e.split(","):[],t=t.length?t.split(","):[],this.setState({activeTasks:e,completedTasks:t})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,null),n.a.createElement(g,null),n.a.createElement("ul",{id:"completedTaskList"},this.state.completedTasks.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement("svg",{id:"completed-task-checkbox",onClick:function(a){e.handleCheckClick(t)},width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-check2-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"})),n.a.createElement("li",{key:a},t),n.a.createElement("svg",{id:"completed-task-trash",onClick:function(a){e.handleDeleteClick(t)},width:"1.2em",height:"1.2em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})))}))))}}]),a}(n.a.Component);a(34);var f=function(){return n.a.createElement(r.a,null,n.a.createElement("a",{href:"https://github.com/danakim21/haza-app",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true",className:"github-logo-svg"},n.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm github-logo-128"}),n.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))),n.a.createElement("h1",null,"Haza"),n.a.createElement(i,null),n.a.createElement("div",{id:"mainBody"},n.a.createElement(o.a,{path:"/",exact:!0,component:p}),n.a.createElement(o.a,{path:"/completed",component:T})))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9a51b465.chunk.js.map