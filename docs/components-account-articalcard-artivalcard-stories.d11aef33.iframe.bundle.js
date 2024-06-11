"use strict";(self.webpackChunk_bauman_conference_library_mui_lib=self.webpackChunk_bauman_conference_library_mui_lib||[]).push([[80],{"./src/components/account/articalcard/artivalcard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FileUpload:()=>FileUpload,__namedExportsOrder:()=>__namedExportsOrder,default:()=>artivalcard_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),UploadFile=__webpack_require__("./node_modules/@mui/icons-material/esm/UploadFile.js"),dist=__webpack_require__("./node_modules/@bauman-conference-library/interface/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),themes=__webpack_require__("./src/themes/index.tsx"),ArticleCard=function(props){props=(0,dist.useWidget)(props);var _props_files,theme=(0,themes.DP)(props);return(0,jsx_runtime.jsx)(ThemeProvider.A,{theme:theme,children:(0,jsx_runtime.jsx)(Box.A,{sx:{border:1,borderColor:"primary.dark"},padding:"35px",width:"800px",children:(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"column",children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",fontK:props.font_size,marginBottom:"15px",children:props.title}),(0,jsx_runtime.jsx)(Typography.A,{variant:"h3",marginBottom:"25px",children:"Описание: ".concat(props.description)}),(0,jsx_runtime.jsx)(Divider.A,{}),(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"row",marginTop:"25px",children:[(0,jsx_runtime.jsxs)(Box.A,{children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"h3",marginBottom:"7px",color:"primary.dark",children:{reviewed:"Рецензирование: cтатья проверена","not reviewed":"Рецензирование: cтатья не проверена"}[props.review_state]}),(0,jsx_runtime.jsx)(Typography.A,{variant:"h5",children:"Последнее изменение статьи: ".concat(props.last_update_date.toLocaleDateString()," ").concat(props.last_update_date.toLocaleTimeString())})]}),(0,jsx_runtime.jsx)(Box.A,{marginLeft:"auto",children:(0,jsx_runtime.jsx)(Button.A,{component:react_router_dom_dist.N_,to:props.update_href,variant:"outlined",children:(0,jsx_runtime.jsx)(Typography.A,{variant:"h2",color:"primary.dark",children:"Редактировать"})})})]}),(0,jsx_runtime.jsx)(Box.A,{width:"450px",marginTop:"20px",children:null===(_props_files=props.files)||void 0===_props_files?void 0:_props_files.map(function(file,index){return(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"row",padding:"10px",margin:"10px 0",sx:{backgroundColor:"primary.light",borderRight:5,borderColor:"primary.dark"},alignContent:"center",justifyContent:"start",children:[(0,jsx_runtime.jsx)(Box.A,{display:"flex",alignItems:"center",children:(0,jsx_runtime.jsx)(Typography.A,{variant:"h3",children:file.name})}),(0,jsx_runtime.jsx)(Box.A,{margin:"0 0 0 auto",children:file.link?(0,jsx_runtime.jsx)(IconButton.A,{href:file.link,children:(0,jsx_runtime.jsx)(UploadFile.A,{})}):""})]},index)})})]})})})};try{ArticleCard.displayName="ArticleCard",ArticleCard.__docgenInfo={description:"",displayName:"ArticleCard",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},font_size:{defaultValue:null,description:"",name:"font_size",required:!1,type:{name:"number"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"Boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"WidgetTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/account/articalcard/index.tsx#ArticleCard"]={docgenInfo:ArticleCard.__docgenInfo,name:"ArticleCard",path:"src/components/account/articalcard/index.tsx#ArticleCard"})}catch(__react_docgen_typescript_loader_error){}var Default={args:{title:"Название статьи",last_update_date:new Date,review_state:"not reviewed",topic:"секция конференции",description:"описание..."}},FileUpload={args:{title:"Название статьи",last_update_date:new Date,review_state:"not reviewed",topic:"секция конференции",description:"описание...",files:[{name:"Какой-то файл",link:"#"},{name:"Какой-то файл",link:"#"},{name:"Какой-то файл",link:"#"}]}};let artivalcard_stories={title:"Account/Conference article",component:ArticleCard};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Название статьи',\n    last_update_date: new Date(),\n    review_state: \"not reviewed\",\n    topic: 'секция конференции',\n    description: 'описание...'\n  }\n}",...Default.parameters?.docs?.source}}},FileUpload.parameters={...FileUpload.parameters,docs:{...FileUpload.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Название статьи',\n    last_update_date: new Date(),\n    review_state: \"not reviewed\",\n    topic: 'секция конференции',\n    description: 'описание...',\n    files: [{\n      name: 'Какой-то файл',\n      link: '#'\n    }, {\n      name: 'Какой-то файл',\n      link: '#'\n    }, {\n      name: 'Какой-то файл',\n      link: '#'\n    }]\n  }\n}",...FileUpload.parameters?.docs?.source}}};let __namedExportsOrder=["Default","FileUpload"]}}]);