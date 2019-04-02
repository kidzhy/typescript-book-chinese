(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{235:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"抽象语法树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象语法树","aria-hidden":"true"}},[t._v("#")]),t._v(" 抽象语法树")]),t._v(" "),a("h3",{attrs:{id:"node-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-节点","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 节点")]),t._v(" "),a("p",[t._v("节点是抽象语法树（AST） 的基本构造块。语法上，通常 "),a("code",[t._v("Node")]),t._v(" 表示非末端（non-terminals）节点。但是，有些末端节点，如：标识符和文字也会保留在树中。")]),t._v(" "),a("p",[t._v("AST 节点文档由两个关键部分构成。一是节点的 "),a("code",[t._v("SyntaxKind")]),t._v(" 枚举，用于标识 AST 中的类型。二是其接口，即实例化 AST 时节点提供的 API。")]),t._v(" "),a("p",[t._v("这里是 "),a("code",[t._v("interface Node")]),t._v(" 的一些关键成员：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TextRange")]),t._v(" 标识该节点在源文件中的起止位置。")]),t._v(" "),a("li",[a("code",[t._v("parent?: Node")]),t._v(" 当前节点（在 AST 中）的父节点")])]),t._v(" "),a("p",[a("code",[t._v("Node")]),t._v(" 还有一些其他的成员，标志（flags）和修饰符（modifiers）等。你可以在源码中搜索 "),a("code",[t._v("interface Node")]),t._v(" 来查看，而上面提到对节点的遍历是非常重要的。")]),t._v(" "),a("h3",{attrs:{id:"sourcefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sourcefile","aria-hidden":"true"}},[t._v("#")]),t._v(" SourceFile")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SyntaxKind.SourceFile")])]),t._v(" "),a("li",[a("code",[t._v("interface SourceFile")]),t._v(".")])]),t._v(" "),a("p",[t._v("每个 "),a("code",[t._v("SourceFile")]),t._v(" 都是一棵 AST 的顶级节点，它们包含在 "),a("code",[t._v("Program")]),t._v(" 中。")]),t._v(" "),a("h2",{attrs:{id:"ast-技巧：访问子节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ast-技巧：访问子节点","aria-hidden":"true"}},[t._v("#")]),t._v(" AST 技巧：访问子节点")]),t._v(" "),a("p",[t._v("有个工具函数 "),a("code",[t._v("ts.forEachChild")]),t._v("，可以用来访问 AST 任一节点的所有子节点。")]),t._v(" "),a("p",[t._v("下面是简化的代码片段，用于演示如何工作：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" forEachChild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cbNodeArray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SyntaxKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visitNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BinaryExpression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visitNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BinaryExpression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operatorToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visitNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BinaryExpression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SyntaxKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IfStatement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visitNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfStatement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visitNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfStatement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thenStatement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visitNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cbNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfStatement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elseStatement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .... 更多")]),t._v("\n")])])]),a("p",[t._v("该函数主要检查 "),a("code",[t._v("node.kind")]),t._v(" 并据此判断 node 的接口，然后在其子节点上调用 "),a("code",[t._v("cbNode")]),t._v("。但是，要注意该函数不会为"),a("em",[t._v("所有")]),t._v("子节点调用 "),a("code",[t._v("visitNode")]),t._v("（例如：SyntaxKind.SemicolonToken）。想获得某 AST 节点的"),a("em",[t._v("所有")]),t._v("子节点，只要调用该节点的成员函数 "),a("code",[t._v(".getChildren")]),t._v("。")]),t._v(" "),a("p",[t._v("如下函数会打印 AST 节点详细信息：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printAllChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'----'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("syntaxKindToName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printAllChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们进一步讨论解析器时会看到该函数的使用示例。")]),t._v(" "),a("h2",{attrs:{id:"ast-技巧：syntaxkind-枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ast-技巧：syntaxkind-枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" AST 技巧：SyntaxKind 枚举")]),t._v(" "),a("p",[a("code",[t._v("SyntaxKind")]),t._v(" 被定义为一个常量枚举，如下所示：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" SyntaxKind "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EndOfFileToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SingleLineCommentTrivia"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 更多")]),t._v("\n")])])]),a("p",[t._v("这是个"),a("router-link",{attrs:{to:"/typings/enums.html#常量枚举"}},[t._v("常量枚举")]),t._v("，方便"),a("em",[t._v("内联")]),t._v("（例如："),a("code",[t._v("ts.SyntaxKind.EndOfFileToken")]),t._v(" 会变为 "),a("code",[t._v("1")]),t._v("），这样在使用 AST 时就不会有处理引用的额外开销。但编译时需要使用 --preserveConstEnums 编译标志，以便枚举"),a("em",[t._v("在运行时仍可用")]),t._v("。JavaScript 中你也可以根据需要使用 "),a("code",[t._v("ts.SyntaxKind.EndOfFileToken")]),t._v("。另外，可以用以下函数，将枚举成员转化为可读的字符串：")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("syntaxKindToName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"ast-杂项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ast-杂项","aria-hidden":"true"}},[t._v("#")]),t._v(" AST 杂项")]),t._v(" "),a("p",[t._v("杂项（Trivia）是指源文本中对正常理解代码不太重要的部分，例如：空白，注释，冲突标记。（为了保持轻量）杂项"),a("em",[t._v("不会存储")]),t._v("在 AST 中。但是可以"),a("em",[t._v("视需要")]),t._v("使用一些 "),a("code",[t._v("ts.*")]),t._v(" API 来获取。")]),t._v(" "),a("p",[t._v("展示这些 API 前，你需要理解以下内容：")]),t._v(" "),a("h3",{attrs:{id:"杂项的所有权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#杂项的所有权","aria-hidden":"true"}},[t._v("#")]),t._v(" 杂项的所有权")]),t._v(" "),a("p",[t._v("通常：")]),t._v(" "),a("ul",[a("li",[t._v("token 拥有它后面 "),a("em",[t._v("同一行")]),t._v(" 到下一个 token 之前的所有杂项")]),t._v(" "),a("li",[t._v("该行之后的注释都与下个的 token 相关")])]),t._v(" "),a("p",[t._v("对于文件中的前导（leading）和结束（ending）注释：")]),t._v(" "),a("ul",[a("li",[t._v("源文件中的第一个 token 拥有所有开始的杂项")]),t._v(" "),a("li",[t._v("而文件最后的一些列杂项则附加到文件结束符上，该 token 长度为 0")])]),t._v(" "),a("h3",{attrs:{id:"杂项-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#杂项-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 杂项 API")]),t._v(" "),a("p",[t._v("注释在多数基本使用中，都是让人关注的杂项。节点的注释可以通过以下函数获取：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("函数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("ts.getLeadingCommentRanges")])]),t._v(" "),a("td",[t._v("给定源文本及其位置，返回给定位置后第一个换行符到 token 本身之间的注释范围（可能需要结合 "),a("code",[t._v("ts.Node.getFullStart")]),t._v(" 使用）。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ts.getTrailingCommentRanges")])]),t._v(" "),a("td",[t._v("给定源文本及其位置，返回给定位置后第一个换行符之前的注释范围（可能需要结合 "),a("code",[t._v("ts.Node.getEnd")]),t._v(" 使用）。")])])])]),t._v(" "),a("p",[t._v("假设下面是某个源文件的一部分：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("debugger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*hello*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bye")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*hi*/")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n")])])]),a("p",[t._v("对 "),a("code",[t._v("function")]),t._v(" 而言，"),a("code",[t._v("getLeadingCommentRanges")]),t._v(" 仅返回最后的两个注释 "),a("code",[t._v("//bye")]),t._v(" 和 "),a("code",[t._v("/*hi*/")]),t._v("。\n另外，而在 "),a("code",[t._v("debugger")]),t._v(" 语句结束位置调用 "),a("code",[t._v("getTrailingCommentRanges")]),t._v(" 会得到注释 "),a("code",[t._v("/*hello*/")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"token-start-和-full-start-位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-start-和-full-start-位置","aria-hidden":"true"}},[t._v("#")]),t._v(" Token Start 和 Full Start 位置")]),t._v(" "),a("p",[t._v('节点有所谓的 "token start" 和 "full start" 位置。')]),t._v(" "),a("ul",[a("li",[t._v("Token Start：比较自然的版本，即文件中一个 token 的文本开始的位置。")]),t._v(" "),a("li",[t._v("Full Start：是指扫描器从上一个重要 token 开始扫描的位置。")])]),t._v(" "),a("p",[t._v("AST 节点有 "),a("code",[t._v("getStart")]),t._v(" 和 "),a("code",[t._v("getFullStart")]),t._v(" API 用于获取以上两种位置，还是这个例子：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("debugger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*hello*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bye")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*hi*/")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n")])])]),a("p",[t._v("对 "),a("code",[t._v("function")]),t._v(" 而言，token start 即 "),a("code",[t._v("function")]),t._v(" 的位置，而 "),a("em",[t._v("full")]),t._v(" start 是 "),a("code",[t._v("/*hello*/")]),t._v(" 的位置。要注意，full start 甚至会包含前一节点拥有的杂项。")])])},[],!1,null,null,null);s.default=e.exports}}]);