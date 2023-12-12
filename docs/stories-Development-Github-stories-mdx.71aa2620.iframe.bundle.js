/*! For license information please see stories-Development-Github-stories-mdx.71aa2620.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstencil_prototyp=self.webpackChunkstencil_prototyp||[]).push([[177],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/Development/Github.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Users_dennis_Documents_GitHub_MIO_Viewer_Impfpass_Stencil_stencil_prototyp_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",h4:"h4",strong:"strong"},(0,_Users_dennis_Documents_GitHub_MIO_Viewer_Impfpass_Stencil_stencil_prototyp_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Entwicklung/Arbeit mit Github"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"arbeit-mit-github",children:"Arbeit mit GitHub"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Den Quellcode für den Prototypen finden Sie im ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/mio42-GmbH/Anzeige-MIO-Impfpass",target:"_blank",rel:"nofollow noopener noreferrer",children:"zugehörigen GitHub Repository"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"github-account-erstellen",children:"Github Account Erstellen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Um an diesem Projekt zu mitzuentwickeln, wird ein GitHub Account benötigt.\nDieser kann einfach auf ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"}),' erstellt werden, unter "Sign up" oben rechts.']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./githubSignUp.png",alt:"Bei GitHub über 'Sign Up' registieren"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"lokales-git-installieren",children:"Lokales Git Installieren"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Weiterhin muss Git auf dem lokalen Rechner installiert sein.\nDazu empfehlen wir die Installation eines grafischen Git-Clients wie ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://desktop.github.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub-Desktop"}),"\nDieser Client von GitHub installiert eine gebündelte Version von Git auf dem System."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Alternativ kann mit anderen Clients wie ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"SourceTree"}),", der integrierten Git-Funktionalität in VS Code, oder ohne grafische Oberfläche auf dem Terminal gearbeitet werden.\nIn diesen Fällen muss eventuell eine separate Git-Installation auf dem Betriebssystem erfolgen.\nFür Windows geht das beispielsweise mit ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://git-scm.com/download/win",target:"_blank",rel:"nofollow noopener noreferrer",children:"Git for Windows"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Für Mac OSX, empfehlen wir die Installation von Git per Homebrew mit"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"brew install git"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Für Linux empfiehlt sich die Installation per Standard Package Manager, für Ubuntu beispielsweise"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"sudo apt-get install git"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"lokal-mit-dem-git-repository-arbeiten",children:"Lokal mit dem Git Repository arbeiten"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Um das Repository lokal zu bearbeiten, wird dieses geklont. Dazu kann es über die Webseite in GitHub Desktop geöffnet werden:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./openWithGithubDesktop.png",alt:"'Open with Github Desktop' Option auf GitHub.com"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Anschließend zeigt GitHub Desktop je nach aktuellem Status des Projektes entweder eine Übersicht um den Code zu öffnen:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./openInVSCode.png",alt:"'Open in Visual Studio Code' Option in GitHub Desktop"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"oder eine Übersicht der Änderungen zum Committen und Pushen auf GitHub:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./githubDesktopCommit.png",alt:"Commit-Ansicht in GitHub Desktop"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Committen und Pushen ist auch in VSCode integriert möglich:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Committen:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./vsCodeCommit.png",alt:"Commit-Ansicht in VS Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Pushen/Pullen:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./vsCodePushPull.png",alt:"Push/Pull-Knopf in VS Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"branches",children:"Branches"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"branch-erstellen",children:"Branch erstellen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Da mehrere Entwickler an diesem Projekt gleichzeitig arbeiten, empfiehlt es sich, nicht direkt auf dem master-Branch zu arbeiten."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Ein neuer Branch sollte bei der Arbeit an neuen Features/Fixes erstellt werden und einen sinnvollen sprechenden Namen erhalten."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"branch-erstellen-in-github-desktop",children:"Branch erstellen in GitHub Desktop"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./githubDesktopCreateBranch.png",alt:"Branch in GitHub Desktop erstellen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"branch-erstellen-in-vs-code",children:"Branch erstellen in VS Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Aktueller Branch wird unten links in Statusleiste angezeigt, zum Branch wechseln anklicken:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./vsCodeBranchButton.png",alt:"Knopf um Branch in VS Code zu wechseln"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:'Anschließend "Neuen Branch erstellen" wählen und einen Branchnamen eingeben'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./vsCodeCreateBranch.png",alt:"Neuen Branch in VS Code erstellen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Neuer Branchname sollte in Statusleiste angezeigt werden"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./vsCodePublishBranchButton.png",alt:"Neuen Branch in VS Code veröffentlichen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"branches-mergen",children:"Branches Mergen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Nachdem die Arbeit auf dem Branch abgeschlossen wurde und ein funktionierender Stand hergestellt wurde, kann der Branch wieder in den Master-Branch gemerged werden."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Dazu müssen alle Änderungen committed werden."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Anschließend muss jeweils der Master-Branch, in den gemerged werden soll, wieder ausgewählt werden."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"branches-mergen-in-github-desktop",children:"Branches Mergen in GitHub Desktop"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./githubDesktopMergeBranch.png",alt:"Branches in GitHub Desktop mergen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"branches-mergen-in-vs-code",children:"Branches Mergen in VS Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"In VSCode können Branches über das Kontextmenü in der Quellcodeverwaltung gemerged werden:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:"./vsCodeBranchMenu.png",alt:"Branch Kontextmenü in VS Code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:'anschließend "Branch" > "Branch zusammenführen" auswählen'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"Nächste Seite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"../?path=/docs/entwicklung-komponentenbasiertes-arbeiten--docs",children:"Komponentenbasiertes Arbeiten"})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Entwicklung/Arbeit mit Github",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_dennis_Documents_GitHub_MIO_Viewer_Impfpass_Stencil_stencil_prototyp_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);