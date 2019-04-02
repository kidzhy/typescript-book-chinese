(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{308:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"解析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析器","aria-hidden":"true"}},[t._v("#")]),t._v(" 解析器")]),t._v(" "),a("p",[t._v("TypeScript 解析器代码均位于 "),a("code",[t._v("praser.ts")]),t._v(" 中。在内部，由解析器控制扫描器将源码转化为 AST。下面是期望结果的回顾：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("源码 ~~ 扫描器 ~~> Token 流 ~~ 解析器 ~~> AST\n")])])]),a("p",[t._v("解析器实现为一个单例（其原因类似扫描器，如果能重新初始化就不重新构建）。实际实现成 "),a("code",[t._v("namespace Parser")]),t._v("，包含解析器的各种"),a("em",[t._v("状态")]),t._v("变量和单例扫描器（"),a("code",[t._v("const scanner")]),t._v("）。该扫描器由解析器函数管理。")]),t._v(" "),a("h3",{attrs:{id:"程序对解析器的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序对解析器的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 程序对解析器的使用")]),t._v(" "),a("p",[t._v("解析器由程序间接驱动（通过之前提到过的 "),a("code",[t._v("CompilerHost")]),t._v("）。基本上，简化的调用栈如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("程序 ->\n    CompilerHost.getSourceFile ->\n        (全局函数 parser.ts).createSourceFile ->\n            Parser.parseSourceFile\n")])])]),a("p",[a("code",[t._v("parseSourceFile")]),t._v(" 不仅准备好解析器的状态，还调用 "),a("code",[t._v("initializeState")]),t._v(" 准备好扫描器的状态。然后使用 "),a("code",[t._v("parseSourceFileWorker")]),t._v(" 继续解析源代码。")]),t._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("深入解析器的内部之前，这里有个使用 TypeScript 解析器的示例，（使用 "),a("code",[t._v("ts.createSourceFile")]),t._v("）获取一个源文件的 AST 并打印它。")]),t._v(" "),a("p",[a("code",[t._v("code/compiler/parser/runParser.ts")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ntypescript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printAllChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'----'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("formatSyntaxKind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printAllChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sourceCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\nvar foo = 123;\n`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sourceFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSourceFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.ts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScriptTarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printAllChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("该段代码会打印以下内容：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("SourceFile "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" SyntaxList "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" VariableStatement "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" VariableDeclarationList "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" VarKeyword "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" SyntaxList "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" VariableDeclaration "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" Identifier "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" FirstAssignment "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" FirstLiteralToken "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" SemicolonToken "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" EndOfFileToken "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n")])])]),a("p",[t._v("如果把头向左倾，这个看起来像棵（右侧）树")]),t._v(" "),a("h2",{attrs:{id:"解析器函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析器函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 解析器函数")]),t._v(" "),a("p",[t._v("如前所述，"),a("code",[t._v("parseSourceFile")]),t._v(" 设置初始状态并将工作交给 "),a("code",[t._v("parseSourceFileWorker")]),t._v(" 函数。")]),t._v(" "),a("h3",{attrs:{id:"parsesourcefileworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsesourcefileworker","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("parseSourceFileWorker")])]),t._v(" "),a("p",[t._v("该函数先创建一个 "),a("code",[t._v("SourceFile")]),t._v(" AST 节点，然后从 "),a("code",[t._v("parseStatements")]),t._v(" 函数开始解析源代码。一旦返回结果，就用额外信息（例如 "),a("code",[t._v("nodeCount")]),t._v(", "),a("code",[t._v("identifierCount")]),t._v("等） 完善 "),a("code",[t._v("SourceFile")]),t._v(" 节点。")]),t._v(" "),a("h3",{attrs:{id:"parsestatements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsestatements","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("parseStatements")])]),t._v(" "),a("p",[t._v("是最重要的 "),a("code",[t._v("parseXXX")]),t._v(" 系函数之一（概念接下来介绍）。它根据扫描器返回的当前 token 来切换（调用相应的 "),a("code",[t._v("parseXXX")]),t._v(" 函数），例如：如果当前 token 是一个 "),a("code",[t._v("SemicolonToken")]),t._v("（分号标记），就会调用 "),a("code",[t._v("paserEmptyStatement")]),t._v(" 为空语句创建一个 AST 节点。")]),t._v(" "),a("h3",{attrs:{id:"节点创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 节点创建")]),t._v(" "),a("p",[t._v("解析器有一系列 "),a("code",[t._v("parseXXX")]),t._v(" 函数用来创建相应类型为"),a("code",[t._v("XXX")]),t._v("的节点，通常在相应类型的节点出现时被（其他解析器函数）调用。该过程的典型示例是解析空语句（例如 "),a("code",[t._v(";;;;;")]),t._v("）时要用的 "),a("code",[t._v("parseEmptyStatement()")]),t._v(" 函数。下面是其全部代码：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseEmptyStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Statement "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Statement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SyntaxKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EmptyStatement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseExpected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SyntaxKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SemicolonToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finishNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("它展示了 3 个关键函数 "),a("code",[t._v("createNode")]),t._v(", "),a("code",[t._v("parseExpected")]),t._v(" 和 "),a("code",[t._v("finishNode")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"createnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createnode","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("createNode")])]),t._v(" "),a("p",[t._v("解析器函数 "),a("code",[t._v("function createNode(kind: SyntaxKind, pos?: number): Node")]),t._v(" 负责创建节点，设置节点的 "),a("code",[t._v("SyntaxKind")]),t._v("（语法类别），和初始位置（默认使用当前扫描器状态提供的位置信息）。")]),t._v(" "),a("h4",{attrs:{id:"parseexpected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parseexpected","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("parseExpected")])]),t._v(" "),a("p",[t._v("解析器的 "),a("code",[t._v("parseExpected")]),t._v(" 函数 "),a("code",[t._v("function parseExpected(kind: SyntaxKind, diagnosticMessage?: DiagnosticMessage): boolean")]),t._v(" 会检查解析器状态中的当前 token 是否与指定的 "),a("code",[t._v("SyntaxKind")]),t._v(" 匹配。如果不匹配，会报告传入的 "),a("code",[t._v("diagnosticMessage")]),t._v("（诊断消息），未传入则使用某种通用形式 "),a("code",[t._v("xxx expected")]),t._v(" 进行报告。该函数内部用 "),a("code",[t._v("parseErrorAtPosition")]),t._v(" 函数（使用扫描位置）提供良好的错误报告。")]),t._v(" "),a("h4",{attrs:{id:"finishnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finishnode","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("finishNode")])]),t._v(" "),a("p",[t._v("解析器的 "),a("code",[t._v("finishNode")]),t._v(" 函数 "),a("code",[t._v("function finishNode<T extends Node>(node: T, end?: number): T")]),t._v(" 设置节点的 "),a("code",[t._v("end")]),t._v(" 位置，并添加一些有用的信息，例如上下文标志（"),a("code",[t._v("parserContextFlags")]),t._v("）以及解析该节点前出现的错误（有错的话，就不能在增量解析中重用此 AST 节点）。")])])},[],!1,null,null,null);s.default=r.exports}}]);