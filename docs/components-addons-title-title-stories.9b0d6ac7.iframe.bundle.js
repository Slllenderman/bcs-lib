"use strict";(self.webpackChunk_bauman_conference_library_mui_lib=self.webpackChunk_bauman_conference_library_mui_lib||[]).push([[989],{"./src/components/addons/title/title.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnotherVariant:()=>AnotherVariant,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/addons/title/index.tsx"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js");__webpack_require__("./node_modules/react/index.js");var Default={decorators:function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{marginLeft:"100px",marginTop:"50px",width:"1200px",textAlign:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})},args:{children:"Искусственный интеллект в автоматизированных системах управления и обработки данных",brushCount:2}},AnotherVariant={decorators:function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{marginLeft:"100px",marginTop:"50px",width:"1200px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})},args:{children:"Программный комитет конференции",brushCount:1}};let __WEBPACK_DEFAULT_EXPORT__={title:"Mui addons/Conference Titles",component:___WEBPACK_IMPORTED_MODULE_1__.h};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: Story => <Box marginLeft='100px' marginTop='50px' width='1200px' textAlign='center'><Story /></Box>,\n  args: {\n    children: 'Искусственный интеллект в автоматизированных системах управления и обработки данных',\n    brushCount: 2\n  }\n}",...Default.parameters?.docs?.source}}},AnotherVariant.parameters={...AnotherVariant.parameters,docs:{...AnotherVariant.parameters?.docs,source:{originalSource:"{\n  decorators: Story => <Box marginLeft='100px' marginTop='50px' width='1200px'><Story /></Box>,\n  args: {\n    children: 'Программный комитет конференции',\n    brushCount: 1\n  }\n}",...AnotherVariant.parameters?.docs?.source}}};let __namedExportsOrder=["Default","AnotherVariant"]},"./src/components/addons/title/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/index.tsx"),Title=function(props){var words=props.children.split(" ").map(function(word){return word.concat(" ")}),brush_border=Math.min(words.length,props.brushCount),theme=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.DP)({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{theme:theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{alignItems:props.align,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"subtitle1",colored:!0,display:"inline",fontK:props.fontK?props.fontK:1,children:words.slice(0,brush_border)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"subtitle1",display:"inline",fontK:props.fontK?props.fontK:1,children:words.slice(brush_border,words.length)})]})})};try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{brushCount:{defaultValue:null,description:"",name:"brushCount",required:!0,type:{name:"number"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"string"}},fontK:{defaultValue:null,description:"",name:"fontK",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/addons/title/index.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/addons/title/index.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}}}]);