"use strict";(self.webpackChunk_bauman_conference_library_mui_lib=self.webpackChunk_bauman_conference_library_mui_lib||[]).push([[634],{"./src/components/account/articalcard/account.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>account_stories});var dist=__webpack_require__("./node_modules/@bauman-conference-library/interface/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),themes=__webpack_require__("./src/themes/index.jsx"),ArticleCard=function(props){return(0,jsx_runtime.jsx)(ThemeProvider.A,{theme:themes.w,children:(0,jsx_runtime.jsx)(Box.A,{sx:{border:1,borderColor:"primary.dark"},padding:"25px",width:"1000px",children:(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"column",children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"title",fontK:props.font_size,marginBottom:"25px",children:props.title}),(0,jsx_runtime.jsx)(Box.A,{width:"100%",sx:{border:.5,borderBlockColor:"lightgray"},marginBottom:"25px"}),(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"row",children:[(0,jsx_runtime.jsxs)(Box.A,{marginRight:"100px",children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"h5",marginBottom:"10px",color:"primary.dark",children:"Рецензия: статья не проверена"}),(0,jsx_runtime.jsx)(Typography.A,{variant:"h6",children:props.last_update_date.toString()})]}),(0,jsx_runtime.jsx)(Button.A,{component:react_router_dom_dist.N_,to:"#",variant:"outlined",children:"Редактировать"})]})]})})})};try{ArticleCard.displayName="ArticleCard",ArticleCard.__docgenInfo={description:"",displayName:"ArticleCard",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},font_size:{defaultValue:null,description:"",name:"font_size",required:!1,type:{name:"number"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"Boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"String"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/account/articalcard/index.tsx#ArticleCard"]={docgenInfo:ArticleCard.__docgenInfo,name:"ArticleCard",path:"src/components/account/articalcard/index.tsx#ArticleCard"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Default={args:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({title:"Название статьи",last_update_date:new Date,creation_date:new Date},new dist.Widget)};let account_stories={title:"Account/Conference article",component:ArticleCard};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Название статьи',\n    last_update_date: new Date(),\n    creation_date: new Date(),\n    ...new Widget()\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./src/themes/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__.d(__webpack_exports__,{w:()=>theme});var components_theme=Object.assign({},{MuiButton:{styleOverrides:{root:{textTransform:"initial"}},variants:[{props:{variant:"upload"},style:{boxSizing:"border-box",display:"flex",flexDirection:"row",justifyContent:"space-between",border:"1px solid #9F9F9F",p:2,width:"100%",minHeight:"60px"}},{props:{variant:"outlined"},style:{boxSizing:"border-box",borderRadius:0,bgcolor:"initial",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",border:"3px solid #00A8B0",padding:"8px 20px",color:"#00A8B0",fontFamily:"Inter",fontSize:"24px",lineHeight:"29px",fontWeight:500,":hover":{bgcolor:"#00A8B01A",border:"3px solid #00A8B0"},":disabled":{border:"3px solid #CFCFCF",color:"#CFCFCF"}}},{props:{variant:"contained"},style:function(param){return{bgcolor:param.theme.palette.primary.dark,borderRadius:0,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",padding:"16px 28px",color:"#FFFFFF",":hover":{bgcolor:"#22BEC5",color:"#FFFFFF",padding:"16px 28px"}}}},{props:{variant:"mobile_nav"},style:{boxSizing:"border-box",borderRadius:0,bgcolor:"initial",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",border:"3px solid #fff",padding:"8px 14px",color:"#fff",width:"100%",":disabled":{border:"3px solid gray",color:"gray"}}},{props:{variant:"text"},style:{textAlign:"left",":disabled":{color:"#CFCFCF"}}}]}},{MuiLink:{styleOverrides:{root:{underline:"none",color:"black"}},defaultProps:{variant:"h2",fontSize_koef:1}}},{MuiContainer:{styleOverrides:{root:{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"row",paddingLeft:"0 !important",paddingRight:"0 !important"}},variants:[{props:{variant:"accent"},style:function(param){return{backgroundColor:param.theme.palette.primary.light,borderRadius:"3px"}}}]}},{MuiTypography:{styleOverrides:{root:{fontFamily:"Inter",color:"black"}},variants:_to_consumable_array([{props:{variant:"title"},style:function(param){var ownerState=param.ownerState;return{fontFamily:'"Brygada 1918"',fontSize:"".concat(ownerState.fontK?4*ownerState.fontK:4,"rem"),lineHeight:"".concat(ownerState.fontK?4.5*ownerState.fontK:4.5,"rem"),fontWeight:600,whiteSpace:"nowrap"}}},{props:{colored:!0},style:function(param){return{fontStyle:"Italic",color:param.theme.palette.primary.main}}},{props:{variant:"subtitle1"},style:function(param){var ownerState=param.ownerState;return{fontFamily:'"Brygada 1918"',fontSize:"".concat(ownerState.fontK?2.75*ownerState.fontK:2.75,"rem"),lineHeight:"".concat(ownerState.fontK?3.25*ownerState.fontK:3.25,"rem"),fontWeight:600}}},{props:{variant:"subtitle2"},style:function(param){var ownerState=param.ownerState;return{fontFamily:'"Brygada 1918"',fontSize:"".concat(ownerState.fontK?2*ownerState.fontK:2,"rem"),lineHeight:"".concat(ownerState.fontK?2.3*ownerState.fontK:2.3,"rem"),fontWeight:600}}}]).concat(_to_consumable_array([{props:{weighted:!0},style:{fontWeight:"500 !important"}},{props:{variant:"h1"},style:function(param){var ownerState=param.ownerState;return{fontSize:"".concat(ownerState.fontK?1.5*ownerState.fontK:1.5,"rem"),lineHeight:"".concat(ownerState.fontK?1.8*ownerState.fontK:1.8,"rem"),fontWeight:400}}},{props:{variant:"h2"},style:function(param){var ownerState=param.ownerState;return{fontSize:"".concat(ownerState.fontK?1.25*ownerState.fontK:1.25,"rem"),lineHeight:"".concat(ownerState.fontK?1.5*ownerState.fontK:1.5,"rem"),fontWeight:400}}},{props:{variant:"h3"},style:function(param){var ownerState=param.ownerState;return{fontSize:"".concat(ownerState.fontK?1.1*ownerState.fontK:1.1,"rem"),lineHeight:"".concat(ownerState.fontK?1.15*ownerState.fontK:1.15,"rem"),fontWeight:400}}},{props:{variant:"h4"},style:function(param){var theme=param.theme,ownerState=param.ownerState;return{fontSize:"".concat(ownerState.fontK?1*ownerState.fontK:1,"rem"),lineHeight:"".concat(ownerState.fontK?1.18*ownerState.fontK:1.18,"rem"),fontWeight:400,color:theme.palette.text.grey}}},{props:{variant:"h5"},style:function(param){var theme=param.theme,ownerState=param.ownerState;return{fontSize:"".concat(ownerState.fontK?.7*ownerState.fontK:.7,"rem"),lineHeight:"".concat(ownerState.fontK?1*ownerState.fontK:1,"rem"),fontWeight:400,color:theme.palette.text.grey}}}]))}},{MuiTableRow:{styleOverrides:{"&:nth-of-type(odd)":function(param){return{backgroundColor:param.theme.palette.primary.main,border:0}},"&:last-child td, &:last-child th":{border:0}}}}),theme=(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").A)({palette:{primary:{light:"#E7F3F5",main:"#22BEC5",dark:""},text:{primary:"#22BEC5",secondary:"#000000",disabled:"#00000080",grey:"#9F9F9F"}},components:components_theme})}}]);