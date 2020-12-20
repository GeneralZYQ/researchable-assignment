(this["webpackJsonpreasearchable-assignment"]=this["webpackJsonpreasearchable-assignment"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(2),l=a.n(r),i=a(5),s=a.n(i);a(15),a.p,a(16);var o=a(6),c=a(7),u=a(3),h=a(9),d=a(8),g=a(1);a(17);function m(t,e){var a=t.toString(),n=e.toString(),r=0;if(a.length===n.length){for(var l=0;l<a.length;l++)a[l]!==n[l]&&r++;return r}throw new Error("Strings do not have equal length")}var b=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;if(Object(o.a)(this,a),n=e.call(this,t),null===localStorage.getItem("numbers"))n.state={list:[],value:""};else{var r=localStorage.getItem("numbers"),l=JSON.parse(r).map((function(t){return parseInt(t)}));n.state={list:l,value:""}}return n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),console.log("I was triggered during constructor"),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=document.createElement("script");t.src="https://buttons.github.io/buttons.js",t.async=!0,document.body.appendChild(t),this.plot_hamming()}},{key:"handleSubmit",value:function(t){if(isNaN(parseInt(this.state.value))||5!==this.state.value.length)"clear"===this.state.value?(localStorage.clear(),alert("numbers clear")):alert("Please input a 5-digit integer");else if(parseInt(this.state.value)>99999||parseInt(this.state.value)<0)alert("invalid number");else{parseInt(this.state.value);if(null===localStorage.getItem("numbers")){(e=[]).push(this.state.value),localStorage.setItem("numbers",JSON.stringify(e))}else{var e,a=localStorage.getItem("numbers");(e=JSON.parse(a)).includes(this.state.value)||e.push(this.state.value),localStorage.setItem("numbers",JSON.stringify(e))}}}},{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"plot_hamming",value:function(){for(var t=this.state.list,e=[],a=0;a<=t.length-1;a++)for(var n=a+1;n<=t.length-1;n++)e.push([t[a],t[n]]);var r=["slateblue","green","steelblue","pink","orange","yellow"],l=20,i=20,s=20,o=800-s-20,c=750-l-i,u=30,h=100,d=100,b=g.select("#body").append("svg").attr("width",o).attr("height",c),p=g.scale.linear().domain([0,1e5]).range([0,600]),v=g.scale.linear().domain([0,1e5]).range([0,600]),f=g.svg.axis().scale(p).orient("bottom");v.range([600,0]);var x=g.svg.axis().scale(v).orient("left");b.append("g").attr("class","axis").attr("transform","translate("+d+","+(c-h)+")").attr("fill","white").call(f).selectAll("text").style("text-anchor","end").attr("dx","-1.5em").attr("dy","0em").attr("transform","rotate(-65)"),b.append("g").attr("class","axis").attr("transform","translate("+d+","+(c-h-600)+")").attr("fill","white").call(x).selectAll("text").style("text-anchor","end").attr("dx","-2.0em").attr("dy","0.1em");for(b.selectAll("circle").data(e).enter().append("circle").attr("fill",(function(t,e){var a=m(t[0],t[1]);return r[a]})).attr("cx",(function(t){return p(t[0])+d})).attr("cy",(function(t){return v(t[1])+u-i})).attr("r",15).on("mouseenter",(function(t,e){g.select(this).transition().duration(300).attr("opacity",.6).attr("r",20);var a=d+p(t[0]),n=v(t[1])+u-i;b.append("line").attr("id","horizentalLine").attr("x1",d).attr("y1",n).attr("x2",a).attr("y2",n).attr("stroke","white"),b.append("line").attr("id","verticalLine").attr("x1",a).attr("y1",n).attr("x2",a).attr("y2",c-h).attr("stroke","white");b.append("text").attr("id","xLabel").attr("class","x label").attr("text-anchor","end").attr("x",-o+h+i+l).attr("y",a).attr("transform","rotate(-90)").attr("fill","yellow").attr("font-size","12px").text(t[0].toString()),b.append("text").attr("id","yLabel").attr("class","y label").attr("text-anchor","end").attr("y",n).attr("x",d-s).attr("fill","yellow").attr("font-size","12px").text(t[1].toString())})).on("mouseleave",(function(){g.select(this).transition().duration(300).attr("opacity",1).attr("r",15),b.selectAll("#xLabel").remove(),b.select("#yLabel").remove(),b.select("#horizentalLine").remove(),b.select("#verticalLine").remove()})),a=0;a<=e.length-1;a++){var y=m(e[a][0],e[a][1]);b.append("text").attr("class","value").attr("text-anchor","middle").attr("x",d+p(e[a][0])).attr("y",v(e[a][1])+u-i+4).text(y)}}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{id:"body",className:"Hamming",children:Object(n.jsx)("h3",{className:"PlotTitle",children:"This is the hamming distance plot"})}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"numberInput",children:[Object(n.jsxs)("label",{children:["5-digit Number:",Object(n.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(n.jsx)("input",{type:"submit",value:"Submit"})]}),Object(n.jsx)("div",{class:"container",id:"forkButton",children:Object(n.jsx)("a",{class:"github-button",href:"https://github.com/GeneralZYQ/researchable-assignment","data-icon":"octicon-repo-forked","aria-label":"Fork ntkme/github-buttons on GitHub",children:"Fork"})})]})}}]),a}(l.a.Component),p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,l=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),l(t),i(t)}))};s.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.37c87be8.chunk.js.map