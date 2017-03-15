!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["react-xmasonry"]=t(require("React")):e["react-xmasonry"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,n=(e.width,e.measured,e.style),r=a(e,["width","measured","style"]);return d.default.createElement("div",s({},r,{style:s({},n,t.defaultStyle),className:this.props.measured?"xblock":""}),this.props.children)}}]),t}(d.default.Component);f.defaultProps={width:1,measured:!1},f.defaultStyle={position:"absolute",boxSizing:"border-box"},t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blocks:{},containerHeight:0,columns:1,containerWidth:0},n.container=null,n.mounted=!1,n.resizeListener=null,n.debouncedResizeTimeout=0,n.debounceRate=50,n.fixedHeight=0,n.containerWidth=n.state.containerWidth,n.columns=n.state.columns,n.props.responsive&&window.addEventListener("resize",n.resizeListener=n.onResize.bind(n)),n.onResize(),n}return i(t,e),s(t,[{key:"getColumns",value:function(e){return Math.max(1,Math.round(e/this.props.targetBlockWidth))}},{key:"updateContainerWidth",value:function(){var e=this.container.getBoundingClientRect().width;return e===this.containerWidth||(this.setState({columns:this.columns=this.getColumns(e),containerWidth:this.containerWidth=e,blocks:{}}),!1)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.updateContainerWidth()&&this.measureChildren()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.resizeListener&&window.removeEventListener("resize",this.resizeListener)}},{key:"componentWillReceiveProps",value:function(e){if(e.children.length<this.props.children.length){for(var t=new Set,n={},r=0;r<e.children.length;r++)t.add(e.children[r].key);for(var a=0;a<this.props.children.length;a++)t.has(this.props.children[a].key)||(n[this.props.children[a].key]={});this.recalculatePositions(null,n)}}},{key:"componentDidUpdate",value:function(){this.updateContainerWidth()&&this.measureChildren()}},{key:"measureChildren",value:function(){for(var e={},t=0;t<this.container.children.length;t++){var n=this.container.children[t];if(n.hasAttribute("data-xkey")){var r=n.getBoundingClientRect(),a=r.height;e[n.getAttribute("data-xkey")]={height:Math.ceil(a)}}}Object.keys(e).length>0&&this.recalculatePositions(e)}},{key:"recalculatePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=void 0,a=Array.from({length:this.columns},function(){return 0});if(n){r={};for(var o in this.state.blocks)this.state.blocks.hasOwnProperty(o)&&!n.hasOwnProperty(o)&&(r[o]=this.state.blocks[o]);for(var i in e)e.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(r[i]=e[i])}else r=l({},this.state.blocks,e);for(var s=0;s<this.container.children.length;s++){var u=this.container.children[s],c=u.getAttribute("data-key");if(r.hasOwnProperty(c)&&(!n||!n.hasOwnProperty(c))){var d=+u.getAttribute("data-width")||1,f=t.getBestFitColumn(a,d),h=f.col,p=f.height,m=p+r[c].height;r[c].left=this.containerWidth*h/this.columns,r[c].top=p;for(var y=0;y<d;++y)a[h+y]=m}}if(this.props.center&&0===a[a.length-1]){for(var b=1;0===a[a.length-1-b];++b);var v=this.containerWidth*b/this.columns/2;for(var g in r)r.hasOwnProperty(g)&&(r[g].left+=v)}this.setState({blocks:r,containerHeight:Math.max.apply(null,a)})}},{key:"onResize",value:function(){var e=this;if(this.mounted){if(this.debouncedResizeTimeout)return clearTimeout(this.debouncedResizeTimeout),void(this.debouncedResizeTimeout=setTimeout(function(){e.debouncedResizeTimeout=null,e.updateContainerWidth(e)},this.debounceRate));this.updateContainerWidth(),this.debouncedResizeTimeout=setTimeout(function(){return e.debouncedResizeTimeout=0},this.debounceRate)}}},{key:"render",value:function(){var e=this,n=0,r=Array.prototype.slice.call(this.props.children).map(function(t){var r=e.state.blocks[t.key],a=Math.min(t.props.width,e.columns);return r||++n,r?c.default.cloneElement(t,{"data-key":t.key,"data-width":a,style:{width:Math.floor(a*e.containerWidth/e.columns),height:r.height,left:Math.floor(r.left),top:r.top},measured:!0,width:a}):c.default.cloneElement(t,{"data-key":t.key,"data-width":a,"data-xkey":t.key,style:{width:Math.floor(a*e.containerWidth/e.columns),visibility:"hidden"},width:a})}),a=n?this.fixedHeight:this.fixedHeight=this.state.containerHeight;return c.default.createElement("div",{className:"xmasonry",style:l({},t.containerStyle,{height:a}),ref:function(t){return e.container=t}},r)}}],[{key:"getBestFitColumn",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=1/0,a=0;a<e.length-t+1;++a){var o=Math.max.apply(null,e.slice(a,a+t));o<r&&(r=o,n=a)}return{col:n,height:r}}}]),t}(c.default.Component);d.propTypes={center:c.default.PropTypes.bool,responsive:c.default.PropTypes.bool,targetBlockWidth:c.default.PropTypes.number},d.defaultProps={center:!0,responsive:!0,targetBlockWidth:300},d.containerStyle={position:"relative"},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.XBlock=t.XMasonry=void 0;var a=n(2),o=r(a),i=n(1),l=r(i);t.XMasonry=o.default,t.XBlock=l.default,"undefined"!=typeof window&&(window.XMasonry=o.default,window.XBlock=l.default)},,function(e,t,n){"use strict";function r(){var e=["#ffff8d","#ff8a80","#a7ffeb","#ffd180","#80d8ff","#ccff90","#cfd8dc"];return e[Math.floor(Math.random()*e.length)]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=i.split(/\./g),n=Math.floor(Math.random()*(t.length-2)),r=e||1+Math.floor(Math.random()*(t.length-n+1));return t.splice(n,r).join(".")}function o(e){return{id:e,header:"This is a dummy card",body:a(),width:Math.floor(1+1.5*Math.random()),color:r()}}Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomColor=r,t.getRandomText=a,t.getRandomCard=o;var i="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula leo a justo auctor, ut tristique mauris finibus. Curabitur sit amet dignissim lorem. Sed semper, mauris vel maximus efficitur, erat sem facilisis tellus, nec porta libero odio non nisi. Ut sed mi at metus pharetra vehicula et ut urna. Vestibulum sed nibh aliquet, tempor quam sed, facilisis erat. In commodo porttitor lacus, eget feugiat ipsum aliquam at. Donec ut suscipit odio. Ut dictum porttitor nunc, vel fringilla neque interdum vitae. Etiam non dolor eget arcu iaculis vehicula. Nulla volutpat varius venenatis. Praesent ac porttitor nunc. Fusce quis ex arcu. Donec at erat velit. Mauris nec metus nisi. Nunc ex lorem, vulputate nec felis id, commodo fringilla nunc. Donec dui velit, consequat venenatis rutrum sit amet, imperdiet nec nulla. In hac habitasse platea dictumst. Sed at ligula quis tortor consequat gravida a ac ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vel bibendum ante. Fusce eros turpis, accumsan sit amet lobortis non, egestas in tellus. Phasellus lacinia nec odio quis molestie. Nullam vestibulum sed lectus a molestie. Nulla varius ligula sollicitudin."},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(8),o=r(a),i=n(7),l=r(i);window.init=function(){ReactDOM.render(React.createElement("div",null,React.createElement("h1",{style:{textAlign:"center"}},"Cards Demo"),React.createElement("div",{className:"littleGray centerText"},React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/CardsDemo.css"},"CSS source")," | ",React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/CardsDemo.jsx"},"JavaScript source")),React.createElement(o.default,null),React.createElement("h1",{style:{textAlign:"center"}},"Articles Demo"),React.createElement("div",{className:"littleGray centerText"},"Use better CSS fixed ratio approach when possible (no image load hooks needed at all)"),React.createElement("div",{className:"littleGray centerText"},React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ArticlesDemo.css"},"CSS source")," | ",React.createElement("a",{target:"_blank",href:"https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ArticlesDemo.jsx"},"JavaScript source")),React.createElement(l.default,null)),document.getElementById("demoApp"))}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=a(u),d=n(3),f=n(5),h=r(f),p=0,m=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={data:t.generateArticles()},a=n,i(r,a)}return l(t,e),s(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"demo ArticlesDemo",id:"ArticlesDemo"},c.default.createElement("div",{className:"centerText"},c.default.createElement("button",{onClick:function(){return e.setState({data:t.generateArticles()})}},"Generate New")),c.default.createElement(d.XMasonry,{targetBlockWidth:400},this.state.data.map(function(e,t){return c.default.createElement(d.XBlock,{key:e.id,width:e.cardWidth},c.default.createElement("div",{className:"article"},c.default.createElement("div",{className:"imageBox"},c.default.createElement("div",{className:"image",style:{backgroundImage:"url("+e.cover+")"}},c.default.createElement("div",{className:"title"},e.title))),c.default.createElement("p",null,e.text)))})))}}]),t}(c.default.Component);m.generateArticles=function(){return Array.from({length:7+Math.floor(5*Math.random())},function(){return{id:++p,title:h.getRandomText(1),text:h.getRandomText(),cover:"img/wallpaper.jpg",cardWidth:Math.random()>.8?2:1}})},t.default=m},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=a(u),d=n(3),f=n(5),h=r(f),p=[{id:1,header:"Good News",body:"This is the dummy body. This is successfully rendered card.",color:h.getRandomColor()},{id:2,header:"Cool Masonry",body:"This is the dummy body. This is successfully rendered card.",color:h.getRandomColor()},{id:3,header:"Layout is Here!",body:"This card takes 2 columns. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.",width:2,color:h.getRandomColor()}],m=function(e){function t(){var e,n,r,a;o(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={data:p},r.lastCardId=r.state.data.length,a=n,i(r,a)}return l(t,e),s(t,[{key:"addCard",value:function(){this.setState({data:this.state.data.concat(h.getRandomCard(++this.lastCardId))})}},{key:"deleteCard",value:function(){if(!(this.state.data.length<1)){var e=this.state.data.slice();e.splice(Math.floor(Math.random()*e.length),1),this.setState({data:e})}}},{key:"replaceCard",value:function(){if(!(this.state.data.length<1)){var e=this.state.data.slice();e.splice(Math.floor(Math.random()*e.length),1,h.getRandomCard(++this.lastCardId)),this.setState({data:e})}}},{key:"render",value:function(){return c.default.createElement("div",{className:"demo CardsDemo",id:"CardsDemo"},c.default.createElement(d.XMasonry,null,this.state.data.map(function(e,t){return c.default.createElement(d.XBlock,{key:e.id,width:e.width||1},c.default.createElement("div",{className:"card",style:{backgroundColor:e.color}},c.default.createElement("h1",null,e.header,c.default.createElement("sup",null,e.id)),c.default.createElement("p",null,e.body)))})),c.default.createElement("div",{style:{textAlign:"center"}},c.default.createElement("button",{onClick:this.addCard.bind(this)},"Add Random Card"),c.default.createElement("button",{onClick:this.deleteCard.bind(this)},"Delete random card"),c.default.createElement("button",{onClick:this.replaceCard.bind(this)},"Replace random card")))}}]),t}(c.default.Component);t.default=m}])});