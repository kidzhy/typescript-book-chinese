(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{307:function(e,t,r){"use strict";r.r(t);var o=r(2),v=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序","aria-hidden":"true"}},[e._v("#")]),e._v(" 程序")]),e._v(" "),r("p",[e._v("程序定义在 "),r("code",[e._v("program.ts")]),e._v(" 中。"),r("router-link",{attrs:{to:"/project/compilationContext.html"}},[e._v("编译上下文")]),e._v("在 TypeScript 编译器中被视为一个 "),r("code",[e._v("Program")]),e._v("，它包含 "),r("code",[e._v("SourceFile")]),e._v(" 和编译选项")],1),e._v(" "),r("h2",{attrs:{id:"compilerhost-的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compilerhost-的使用","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("CompilerHost")]),e._v(" 的使用")]),e._v(" "),r("p",[e._v("CompilerHost 是与操作环境（OE, Operating Enviornment）进行交互的机制：")]),e._v(" "),r("p",[r("code",[e._v("Program")]),e._v(" "),r("em",[e._v("-使用->")]),e._v(" "),r("code",[e._v("CompilerHost")]),e._v(" "),r("em",[e._v("-使用->")]),e._v(" "),r("code",[e._v("System")])]),e._v(" "),r("p",[e._v("用 "),r("code",[e._v("CompilerHost")]),e._v(" 作中间层的原因是可以让接口对 "),r("code",[e._v("Program")]),e._v(" 的需求进行细粒度的调整，而无需考虑操作环境的需求。（例如："),r("code",[e._v("Program")]),e._v(" 无需关心 "),r("code",[e._v("System")]),e._v(" 的 "),r("code",[e._v("fileExists")]),e._v(" 函数）")]),e._v(" "),r("p",[e._v("对"),r("code",[e._v("System")]),e._v("而言还有其他的使用者（比如测试）")]),e._v(" "),r("h2",{attrs:{id:"sourcefile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sourcefile","aria-hidden":"true"}},[e._v("#")]),e._v(" SourceFile")]),e._v(" "),r("p",[e._v("程序有个 API，用于获取 SourceFile："),r("code",[e._v("getSourceFiles(): SourceFile[];")]),e._v("。得到的每个元素均是一棵抽象语法树的根节点（称做 "),r("code",[e._v("SourceFile")]),e._v("）")])])},[],!1,null,null,null);t.default=v.exports}}]);