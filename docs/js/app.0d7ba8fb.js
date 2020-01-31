(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tsm-editor/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0052":function(e,t,n){"use strict";var o=n("f580"),i=n.n(o);i.a},"1fee":function(e,t,n){},"264d":function(e,t,n){},"2c8b":function(e,t,n){},"2d4d":function(e,t,n){"use strict";var o=n("264d"),i=n.n(o);i.a},"3d85":function(e,t,n){},"4b83":function(e,t,n){"use strict";var o=n("9479"),i=n.n(o);i.a},"56b7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=n("2bdd"),r=n.n(i),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"panel",attrs:{id:"editor"}},[n("h1",[e._v("Formula Editor")]),n("p",[e._v(" Use the boxes below to write a TSM price formula. ")]),n("Editor")],1),n("section",{staticClass:"panel",attrs:{id:"reference"}},[n("CommandReference")],1),n("footer",[e._v(" Made with ❤️ by trenchy ")])])},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor-container"},[n("EditorEventLayer",{ref:"editor",staticClass:"editor",attrs:{"initial-content":e.content}})],1)},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"editor-space",style:{height:e.containerHeight+"px"}},[n("div",{staticClass:"editor-renderer"},[n("Syntax",{attrs:{code:e.rawContent}})],1),n("div",{ref:"editor",staticClass:"editor-event",attrs:{contenteditable:"true",spellcheck:"false"},on:{keydown:e.onKeyDown,keyup:e.onKeyUp,blur:e.onBlur,input:e.onInput,paste:e.onPaste,click:e.onClick}}),n("Dropdown",{staticClass:"dropdown",attrs:{visible:e.dropdownIsVisible,position:e.dropdownPosition,symbols:e.dropdownSymbolResults,functions:e.dropdownFunctionResults,"on-select":e.onSelect,"selected-index":e.dropdownSelectedIndex}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.debug,expression:"debug"}],staticClass:"pannel debug-panel"},[e._v(" "+e._s(e.rawContent)+" ")])],1)},d=[],f=(n("99af"),n("b0c0"),n("ac1f"),n("5319"),n("d4ec")),p=function e(t,n){Object(f["a"])(this,e),this.x=t,this.y=n},m=function e(t,n,o,i){Object(f["a"])(this,e),this.x=t,this.y=n,this.width=o,this.height=i};function h(){var e=window.getSelection();return e.rangeCount>0&&!0===e.getRangeAt(0).collapsed?e.getRangeAt(0):null}function b(e){try{var t=e.getRangeAt(0).cloneRange();if(t.getClientRects){t.collapse(!0);var n=t.getClientRects(),o=n.length>0?n[0]:null;if(o)return new m(o.left,o.top,0,o.height)}}catch(i){}return new m(0,0,0,0)}function w(){var e=b(window.getSelection());return new p(e.x,e.y+e.height)}function v(e){e.collapse(!0);var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}function g(e,t,n){return e.substring(0,n.startOffset)+t+e.substring(n.endOffset)}n("1276");function y(e){return e.split(/[\s\(\)\{\}]+/)}n("4de4"),n("4d63"),n("25f0");var C=function e(t,n,o){Object(f["a"])(this,e),this.name=t,this.args=n,this.definition=o},S=function e(t,n){Object(f["a"])(this,e),this.name=t,this.definition=n},x=[new S("DBGlobalHistorical","Global Historical Price"),new S("DBGlobalMarketAvg","Global Market Value Average"),new S("DBGlobalMinBuyoutAvg","Global Minimum Buyout Average"),new S("DBGlobalSaleAvg","Global Sale Average"),new S("DBHistorical","Historical Price"),new S("DBMarket","Market Value"),new S("DBMinBuyout","Minimum Buyout"),new S("DBRegionHistorical","Region Historical Price"),new S("DBRegionMarketAvg","Region Market Value Average"),new S("DBRegionMinBuyoutAvg","Region Minimum Buyout Average"),new S("DBRegionSaleAvg","Region Sale Average"),new S("Crafting","Crafting Cost"),new S("Destroy","Destroy Value"),new S("VendorBuy","Buy from Vendor"),new S("VendorSell","Sell to Vendor"),new S("avgBuy","Average Buy Price"),new S("avgSell","Average Sell Price"),new S("matPrice","Crafting Material Cost"),new S("maxBuy","Max Buy Price"),new S("maxSell","Max Sell Price")],_=[new C("min",["a","b"],"Returns the numerical minimum between a and b"),new C("max",["a","b"],"Returns the numerical maximum between a and b"),new C("first",["n.."],"Returns the first valid price in the list"),new C("check",["n","b","c"],"If the first parameter is greater than 0, return the second parameter. Otherwise, return the third parameter."),new C("convert",["variable","optional_item"],"Returns the lowest cost conversion of the item being evaluated.")],R=[new S("[Item Name]","Reference an item by name."),new S("item:ID","Reference an item by ID.")];function E(e){var t=new RegExp(e.replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\[/g,"\\[").replace(/\]/g,"\\]"),"ig");return{functions:_.filter((function(e){return t.test(e.name)})),symbols:x.filter((function(e){return t.test(e.name)}))}}n("caad"),n("07ac"),n("2532");var O={KEY_UP:38,KEY_DOWN:40,KEY_ESCAPE:27,KEY_ENTER:13,KEY_SHIFT:16,KEY_TAB:9};function k(e){return Object.values(O).includes(e)}var D=O,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown panel",style:e.positionCSS},[n("ul",[e._l(e.symbols,(function(t,o){return n("SymbolDropdown",{key:"symbol"+o,class:o===e.selectedIndex?"selected":"",attrs:{item:t},on:{click:function(n){return e.didChooseOption(t)}}})})),e._l(e.functions,(function(t,o){return n("FunctionDropdown",{key:"function"+o,class:o+e.symbols.length===e.selectedIndex?"selected":"",attrs:{item:t},on:{click:function(n){return e.didChooseOption(t)}}})}))],2),n("div",{staticClass:"hint"},[n("Icon",{attrs:{name:"bulb"}}),e._v(" Hit enter or tab to insert. Select with arrow keys. ")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.debug,expression:"debug"}],staticClass:"debug-panel panel"},[n("div",[e._v("Selected Option: "+e._s(e.selectedIndex))]),n("div",{staticClass:"position"},[e._v("Position: "+e._s(e.position.x)+", "+e._s(e.position.y))])])])},P=[],I=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"dropdown-row panel"},[n("Syntax",{staticClass:"name",attrs:{code:e.item.name+"("+e.item.args.join(", ")+")"}}),n("Icon",{staticClass:"function",attrs:{name:"function"}}),n("p",{staticClass:"definition"},[e._v(" "+e._s(e.item.definition)+" ")])],1)}),B=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{class:"icon "+e.name})},T=[],A={name:"Icon",props:{name:{type:String,default:"nope"}}},M=A,F=(n("d7ee"),n("2877")),K=Object(F["a"])(M,$,T,!1,null,"3339b743",null),N=K.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"ide",domProps:{innerHTML:e._s(e.stylizedContent)}})},V=[],Y=(n("4160"),n("a15b"),n("159b"),n("3835")),L=function(e,t){return'<span class="token '.concat(e.join(" "),'">').concat(t,"</span>")},G=/(\d+g)/g,U=/(\d+s)/g,W=/(\d+c)/g,z=/(\[.+\])/g,J=/(item:(\d+|ID))/g,q=/\(/g,Q=/\)/g,X=[[/\//g,"/"],[/-/g,"-"],[/\*/g,"*"],[/\+/g,"+"],[/%/g,"%"]];function Z(e){var t=e;X.forEach((function(e){var n=Object(Y["a"])(e,2),o=n[0],i=n[1];t=t.replace(o,L(["maths"],i))})),_.forEach((function(e){t=t.replace(new RegExp("".concat(e.name,"\\s?\\("),"gi"),L(["function"],"".concat(e.name,"(")))})),x.forEach((function(e){t=t.replace(new RegExp(e.name,"gi"),L(["symbol"],e.name))})),t=t.replace(q,L(["parens"],"(")),t=t.replace(Q,L(["parens"],")"));var n=function(e){return function(t,n){return L(["currency",e],n)}};return t=t.replace(G,n("gold")),t=t.replace(U,n("silver")),t=t.replace(W,n("copper")),t=t.replace(z,(function(e,t){return L(["item"],t)})),t=t.replace(J,(function(e,t){return L(["item"],t)})),t}var ee={name:"Syntax",props:{code:String},computed:{stylizedContent:function(){return Z(this.code)}}},te=ee,ne=(n("fc87"),Object(F["a"])(te,H,V,!1,null,"10734910",null)),oe=ne.exports,ie={name:"FunctionDropdown",components:{Icon:N,Syntax:oe},props:{item:Object}},re=ie,ae=(n("2d4d"),Object(F["a"])(re,I,B,!1,null,"a645cc64",null)),se=ae.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"dropdown-row panel"},[n("Syntax",{staticClass:"name",attrs:{code:e.item.name}}),n("Icon",{staticClass:"symbol",attrs:{name:"symbol"}}),n("p",{staticClass:"definition"},[e._v(" "+e._s(e.item.definition)+" ")])],1)},le=[],ue={name:"SymbolDropdown",components:{Icon:N,Syntax:oe},props:{item:Object}},de=ue,fe=(n("f435"),Object(F["a"])(de,ce,le,!1,null,"5e653f76",null)),pe=fe.exports,me={name:"Dropdown",components:{FunctionDropdown:se,SymbolDropdown:pe,Icon:N},props:{visible:{type:Boolean,default:!1},position:{type:Object,default:function(){return new p(0,0)}},functions:{type:Array,default:function(){return[]}},symbols:{type:Array,default:function(){return[]}},onSelect:Function,selectedIndex:Number,debug:Boolean},methods:{didChooseOption:function(e){this.onSelect&&this.onSelect(e)}},computed:{positionCSS:function(){var e=this.position.x;if(this.$el){var t=this.$el.getBoundingClientRect();e=Math.min(e,window.innerWidth-t.width)}return{position:"absolute",left:"".concat(e,"px"),top:"".concat(this.position.y,"px"),visibility:this.visible?"visible":"hidden"}}}},he=me,be=(n("dc86"),Object(F["a"])(he,j,P,!1,null,"57f65449",null)),we=be.exports,ve={name:"EditorEventLayer",components:{Dropdown:we,Syntax:oe},props:{initialContent:{type:String,default:""}},data:function(){return{debug:this.$store.state.debug,content:this.initialContent,rawContent:this.initialContent,containerHeight:150,dropdownPosition:new p(0,0),dropdownSelectedIndex:0,dropdownFunctionResults:[],dropdownSymbolResults:[],dropdownSearchTerm:""}},computed:{dropdownIsVisible:function(){return this.dropdownFunctionResults.length>0||this.dropdownSymbolResults.length>0},dropdownCombinedResults:function(){return this.dropdownSymbolResults.concat(this.dropdownFunctionResults)}},mounted:function(){var e=this;this.$refs.editor.innerText=this.content,this.$store.dispatch("loadFromLocation").then((function(t){e.$refs.editor.innerText=t,e.rawContent=t,e.content=t})).catch((function(){}))},methods:{getCurrentCaretPosition:function(){var e=w();return new p(e.x,e.y)},onInput:function(){this.rawContent=this.$refs.editor.innerText,this.containerHeight=this.$refs.editor?this.$refs.editor.scrollHeight:100,this.$store.commit("save",this.rawContent),this.$store.dispatch("saveToLocation")},onKeyDown:function(e){return!k(e.keyCode)||(this.dropdownIsVisible&&this.onNavigationKeyPress(e.keyCode),e.preventDefault(),e.stopPropagation(),!1)},onKeyUp:function(e){if(k(e.keyCode))return e.preventDefault(),e.stopPropagation(),!1;var t=h();if(t){var n=e.target.innerText.substr(0,t.startOffset);if(n&&n.length>2){var o=y(n);o.length>0&&o[o.length-1].length>1&&this.performWordLookup(this.getCurrentCaretPosition(),o[o.length-1])}}return!0},onBlur:function(){this.hideDropdown()},onPaste:function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").replace(/\n/g," ");this.$refs.editor.innerText=t,this.onInput()},onClick:function(){this.hideDropdown()},hideDropdown:function(){this.dropdownSelectedIndex=0,this.dropdownFunctionResults=[],this.dropdownSymbolResults=[]},performWordLookup:function(e,t){var n=this.$el.getBoundingClientRect(),o=E(t),i=o.symbols,r=o.functions;this.dropdownPosition=new p(e.x-n.left,e.y-n.top),this.dropdownFunctionResults=r,this.dropdownSymbolResults=i,this.dropdownSearchTerm=t},onNavigationKeyPress:function(e){var t=this.dropdownSelectedIndex;switch(e){case D.KEY_UP:t-=1;break;case D.KEY_DOWN:t+=1;break;case D.KEY_ESCAPE:t=0,this.hideDropdown();break;case D.KEY_ENTER:case D.KEY_TAB:this.onSelect(this.dropdownCombinedResults[t]);break;default:break}this.dropdownSelectedIndex=Math.min(this.dropdownCombinedResults.length-1,Math.max(0,t))},onSelect:function(e){var t=this,n=h();if(n){n.setStart(n.startContainer,n.startOffset-this.dropdownSearchTerm.length);var o=n.startOffset;this.rawContent=g(this.$refs.editor.innerText,e.name,n),this.$refs.editor.innerText=this.rawContent,this.$nextTick((function(){var n=t.$refs.editor.childNodes,i=n[n.length-1],r=document.createRange();r.setStart(i,o+e.name.length),v(r),t.hideDropdown(),t.onInput()}))}}}},ge=ve,ye=(n("0052"),Object(F["a"])(ge,u,d,!1,null,"68c02178",null)),Ce=ye.exports,Se={name:"Editor",components:{EditorEventLayer:Ce},computed:{content:function(){return this.$store.state.formula}}},xe=Se,_e=(n("b5ef"),Object(F["a"])(xe,c,l,!1,null,"2aad1970",null)),Re=_e.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reference"},[n("section",{staticClass:"functions"},[n("h3",[n("Icon",{attrs:{name:"function"}}),e._v(" Functions")],1),n("section",{staticClass:"sub-panel"},e._l(e.functions,(function(e,t){return n("FunctionReference",{key:"function"+t,staticClass:"function-row",attrs:{item:e}})})),1)]),n("section",{staticClass:"symbols"},[n("h3",[n("Icon",{attrs:{name:"symbol"}}),e._v(" Variables")],1),n("section",{staticClass:"sub-panel"},[e._l(e.specialFeatures,(function(e,t){return n("SymbolReference",{key:"feat"+t,staticClass:"symbol-row",attrs:{item:e}})})),e._l(e.symbols,(function(e,t){return n("SymbolReference",{key:"symbol"+t,staticClass:"symbol-row",attrs:{item:e}})}))],2)])])},Oe=[],ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Syntax",{staticClass:"name",attrs:{code:e.item.name+"("+e.item.args.join(", ")+")"}}),n("p",{staticClass:"definition"},[e._v(" "+e._s(e.item.definition)+" ")])],1)},De=[],je={name:"FunctionReference",components:{Syntax:oe},props:{item:Object}},Pe=je,Ie=(n("5bb2"),Object(F["a"])(Pe,ke,De,!1,null,"505c1789",null)),Be=Ie.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Syntax",{staticClass:"name",attrs:{code:e.item.name}}),n("p",{staticClass:"definition"},[e._v(" "+e._s(e.item.definition)+" ")])],1)},Te=[],Ae={name:"SymbolReference",components:{Syntax:oe},props:{item:Object}},Me=Ae,Fe=(n("4b83"),Object(F["a"])(Me,$e,Te,!1,null,"49c5226a",null)),Ke=Fe.exports,Ne={name:"CommandReference",components:{FunctionReference:Be,SymbolReference:Ke,Icon:N},data:function(){return{symbols:x,functions:_,specialFeatures:R}}},He=Ne,Ve=(n("a364"),Object(F["a"])(He,Ee,Oe,!1,null,"0efad24e",null)),Ye=Ve.exports,Le={name:"app",components:{Editor:Re,CommandReference:Ye}},Ge=Le,Ue=(n("5c0b"),n("9034"),Object(F["a"])(Ge,a,s,!1,null,"3ab35686",null)),We=Ue.exports,ze=(n("96cf"),n("1da1")),Je=n("2f62"),qe=(n("d3b7"),n("8e73")),Qe=n.n(qe),Xe=Qe()("lzw");function Ze(){var e=window.location.hash;return e&&e.length>1?Xe.decompress(e.substr(1)).then((function(e){return e.formula})):new Promise((function(e,t){return t(Error("Parse error"))}))}function et(e){return null===e||e.length<1?new Promise((function(e,t){return t(Error("Nothing to save"))})):Xe.compress({formula:e}).then((function(e){var t="#".concat(e);return t!==window.location.hash&&window.history.pushState(null,null,t),e}))}o["a"].use(Je["a"]);var tt=new Je["a"].Store({state:{debug:!1,formula:"dbminbuyout([Ghost Iron Ore]) matprice([Ink of Dreams]) dbmarket + convert(dbminbuyout, item:79251)",lastSave:null},mutations:{save:function(e,t){e.formula=t},clearSaveTimeout:function(e){e.lastSave=null},startNewTimeout:function(e,t){e.lastSave=t}},actions:{loadFromLocation:function(){return Object(ze["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Ze());case 1:case"end":return e.stop()}}),e)})))()},saveToLocation:function(e){var t=e.commit,n=e.state;return Object(ze["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.lastSave&&(window.clearTimeout(n.lastSave),t("clearSaveTimeout"),n.debug&&console.log("Canceled save...")),o=window.setTimeout((function(){et(n.formula).catch(console.log),n.debug&&console.log("Saved...")}),1e3),t("startNewTimeout",o);case 3:case"end":return e.stop()}}),e)})))()}}});o["a"].use(r.a,{config:{id:"UA-49351028-1"}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(We)},store:tt}).$mount("#app")},"5bb2":function(e,t,n){"use strict";var o=n("6739"),i=n.n(o);i.a},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},6739:function(e,t,n){},9034:function(e,t,n){"use strict";var o=n("1fee"),i=n.n(o);i.a},9479:function(e,t,n){},"9c0c":function(e,t,n){},a364:function(e,t,n){"use strict";var o=n("3d85"),i=n.n(o);i.a},b0de:function(e,t,n){},b5ef:function(e,t,n){"use strict";var o=n("d071"),i=n.n(o);i.a},d071:function(e,t,n){},d7ee:function(e,t,n){"use strict";var o=n("b0de"),i=n.n(o);i.a},dc86:function(e,t,n){"use strict";var o=n("ddf3"),i=n.n(o);i.a},ddf3:function(e,t,n){},f435:function(e,t,n){"use strict";var o=n("2c8b"),i=n.n(o);i.a},f580:function(e,t,n){},fc87:function(e,t,n){"use strict";var o=n("56b7"),i=n.n(o);i.a}});
//# sourceMappingURL=app.0d7ba8fb.js.map