"use strict";(self.webpackChunk_bauman_conference_library_mui_lib=self.webpackChunk_bauman_conference_library_mui_lib||[]).push([[440],{"./node_modules/@mui/material/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Container_Container});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),deepmerge=__webpack_require__("./node_modules/@mui/utils/deepmerge/deepmerge.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js");let _excluded=["ownerState"],_excluded2=["variants"],_excluded3=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function isEmpty(obj){return 0===Object.keys(obj).length}function isStringTag(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96}function shouldForwardProp(prop){return"ownerState"!==prop&&"theme"!==prop&&"sx"!==prop&&"as"!==prop}let systemDefaultTheme=(0,createTheme.A)(),lowercaseFirstLetter=string=>string?string.charAt(0).toLowerCase()+string.slice(1):string;function resolveTheme({defaultTheme,theme,themeId}){return isEmpty(theme)?defaultTheme:theme[themeId]||theme}function defaultOverridesResolver(slot){return slot?(props,styles)=>styles[slot]:null}function processStyleArg(callableStyle,_ref){let{ownerState}=_ref,props=(0,objectWithoutPropertiesLoose.A)(_ref,_excluded),resolvedStylesArg="function"==typeof callableStyle?callableStyle((0,esm_extends.A)({ownerState},props)):callableStyle;if(Array.isArray(resolvedStylesArg))return resolvedStylesArg.flatMap(resolvedStyle=>processStyleArg(resolvedStyle,(0,esm_extends.A)({ownerState},props)));if(resolvedStylesArg&&"object"==typeof resolvedStylesArg&&Array.isArray(resolvedStylesArg.variants)){let{variants=[]}=resolvedStylesArg,result=(0,objectWithoutPropertiesLoose.A)(resolvedStylesArg,_excluded2);return variants.forEach(variant=>{let isMatch=!0;"function"==typeof variant.props?isMatch=variant.props((0,esm_extends.A)({ownerState},props,ownerState)):Object.keys(variant.props).forEach(key=>{(null==ownerState?void 0:ownerState[key])!==variant.props[key]&&props[key]!==variant.props[key]&&(isMatch=!1)}),isMatch&&(Array.isArray(result)||(result=[result]),result.push("function"==typeof variant.style?variant.style((0,esm_extends.A)({ownerState},props,ownerState)):variant.style))}),result}return resolvedStylesArg}let styled=function createStyled(input={}){let{themeId,defaultTheme=systemDefaultTheme,rootShouldForwardProp=shouldForwardProp,slotShouldForwardProp=shouldForwardProp}=input,systemSx=props=>(0,styleFunctionSx.A)((0,esm_extends.A)({},props,{theme:resolveTheme((0,esm_extends.A)({},props,{defaultTheme,themeId}))}));return systemSx.__mui_systemSx=!0,(tag,inputOptions={})=>{let label;(0,styled_engine.internal_processStyles)(tag,styles=>styles.filter(style=>!(null!=style&&style.__mui_systemSx)));let{name:componentName,slot:componentSlot,skipVariantsResolver:inputSkipVariantsResolver,skipSx:inputSkipSx,overridesResolver=defaultOverridesResolver(lowercaseFirstLetter(componentSlot))}=inputOptions,options=(0,objectWithoutPropertiesLoose.A)(inputOptions,_excluded3),skipVariantsResolver=void 0!==inputSkipVariantsResolver?inputSkipVariantsResolver:componentSlot&&"Root"!==componentSlot&&"root"!==componentSlot||!1,skipSx=inputSkipSx||!1,shouldForwardPropOption=shouldForwardProp;"Root"===componentSlot||"root"===componentSlot?shouldForwardPropOption=rootShouldForwardProp:componentSlot?shouldForwardPropOption=slotShouldForwardProp:isStringTag(tag)&&(shouldForwardPropOption=void 0);let defaultStyledResolver=(0,styled_engine.default)(tag,(0,esm_extends.A)({shouldForwardProp:shouldForwardPropOption,label},options)),transformStyleArg=stylesArg=>"function"==typeof stylesArg&&stylesArg.__emotion_real!==stylesArg||(0,deepmerge.Q)(stylesArg)?props=>processStyleArg(stylesArg,(0,esm_extends.A)({},props,{theme:resolveTheme({theme:props.theme,defaultTheme,themeId})})):stylesArg,muiStyledResolver=(styleArg,...expressions)=>{let transformedStyleArg=transformStyleArg(styleArg),expressionsWithDefaultTheme=expressions?expressions.map(transformStyleArg):[];componentName&&overridesResolver&&expressionsWithDefaultTheme.push(props=>{let theme=resolveTheme((0,esm_extends.A)({},props,{defaultTheme,themeId}));if(!theme.components||!theme.components[componentName]||!theme.components[componentName].styleOverrides)return null;let styleOverrides=theme.components[componentName].styleOverrides,resolvedStyleOverrides={};return Object.entries(styleOverrides).forEach(([slotKey,slotStyle])=>{resolvedStyleOverrides[slotKey]=processStyleArg(slotStyle,(0,esm_extends.A)({},props,{theme}))}),overridesResolver(props,resolvedStyleOverrides)}),componentName&&!skipVariantsResolver&&expressionsWithDefaultTheme.push(props=>{var _theme$components;let theme=resolveTheme((0,esm_extends.A)({},props,{defaultTheme,themeId}));return processStyleArg({variants:null==theme||null==(_theme$components=theme.components)||null==(_theme$components=_theme$components[componentName])?void 0:_theme$components.variants},(0,esm_extends.A)({},props,{theme}))}),skipSx||expressionsWithDefaultTheme.push(systemSx);let numOfCustomFnsApplied=expressionsWithDefaultTheme.length-expressions.length;if(Array.isArray(styleArg)&&numOfCustomFnsApplied>0){let placeholders=Array(numOfCustomFnsApplied).fill("");(transformedStyleArg=[...styleArg,...placeholders]).raw=[...styleArg.raw,...placeholders]}let Component=defaultStyledResolver(transformedStyleArg,...expressionsWithDefaultTheme);return tag.muiName&&(Component.muiName=tag.muiName),Component};return defaultStyledResolver.withConfig&&(muiStyledResolver.withConfig=defaultStyledResolver.withConfig),muiStyledResolver}}();var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let createContainer_excluded=["className","component","disableGutters","fixed","maxWidth","classes"],defaultTheme=(0,createTheme.A)(),defaultCreateStyledComponent=styled("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{let{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.A)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.A)({props:inProps,name:"MuiContainer",defaultTheme}),useUtilityClasses=(ownerState,componentName)=>{let{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.A)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.A)(slots,slot=>(0,generateUtilityClass.Ay)(componentName,slot),classes)};function createContainer(options={}){let{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent(({theme,ownerState})=>(0,esm_extends.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}}),({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce((acc,breakpointValueKey)=>{let value=theme.breakpoints.values[breakpointValueKey];return 0!==value&&(acc[theme.breakpoints.up(breakpointValueKey)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc},{}),({theme,ownerState})=>(0,esm_extends.A)({},"xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}));return react.forwardRef(function Container(inProps,ref){let props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,createContainer_excluded),ownerState=(0,esm_extends.A)({},props,{component,disableGutters,fixed,maxWidth}),classes=useUtilityClasses(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,(0,esm_extends.A)({as:component,ownerState:ownerState,className:(0,clsx.A)(classes.root,className),ref:ref},other))})}var utils_capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");let Container_Container=createContainer({createStyledComponent:(0,styles_styled.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{let{ownerState}=props;return[styles.root,styles[`maxWidth${(0,utils_capitalize.A)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemeProps:inProps=>(0,styles_useThemeProps.A)({props:inProps,name:"MuiContainer"})})},"./src/components/info/location/location.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>location_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./node_modules/@mui/material/styles/ThemeProvider.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),dist=__webpack_require__("./node_modules/@bauman-conference-library/interface/dist/index.js"),themes=__webpack_require__("./src/themes/index.tsx"),ConferenceLocation=function(props){props=(0,dist.useWidget)(props);var theme=(0,themes.DP)(props);return props.visibility?(0,jsx_runtime.jsx)(ThemeProvider.A,{theme:theme,children:(0,jsx_runtime.jsx)(Container.A,{variant:"accent",sx:{width:"".concat(1200*(props.width?props.width:1),"px")},children:(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"row",alignItems:"center",width:1,children:[(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"column",marginLeft:"".concat(8*(props.width?props.width:1),"%"),width:"50%",children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle1",noWrap:!0,marginBottom:"".concat(10*(props.height?props.height:1),"%"),fontK:props.font_size,children:"Место проведения"}),(0,jsx_runtime.jsx)(Typography.A,{variant:"h2",marginBottom:"".concat(10*(props.height?props.height:1),"%"),fontK:props.font_size,children:props.address}),(0,jsx_runtime.jsx)(Box.A,{width:"80%",children:(0,jsx_runtime.jsx)(Button.A,{variant:"outlined",href:props.ya_link,children:"Открыть схему проезда"})})]}),(0,jsx_runtime.jsx)(Box.A,{width:"".concat(50*(props.height?props.height:1),"%"),height:"100%",marginLeft:"auto",children:(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 592 424",width:"100%",height:"100%",fill:"none",children:[(0,jsx_runtime.jsxs)("g",{"clip-path":"url(#clip0_247_3113)",children:[(0,jsx_runtime.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M224.828 -37L491.783 65.4571L495.954 77.4802L455.285 178.369L427.13 166.869L433.387 151.187C425.74 147.353 406.274 144.286 389.589 162.687L369.776 205.552L379.161 210.256L357.784 257.826L348.92 253.644L340.057 276.644C338.84 286.054 339.744 306.231 353.092 311.668L355.699 304.35L383.854 317.418L346.835 403.67L331.714 412.557L95 319.509L107.514 287.099L166.431 309.577L198.237 228.029L194.587 225.938L207.622 193.006L225.349 200.324L248.291 138.118L228.999 130.8L269.668 22.0697L210.75 -2.49913L224.828 -37ZM327.022 373.351L184.159 318.986L193.023 296.508L212.314 302.259L214.4 296.508L226.913 301.213L235.256 280.303L203.451 267.758L205.536 262.53L238.906 275.076L246.727 253.644L213.357 242.666L220.135 223.325L321.286 258.348C321.286 258.348 314.508 281.349 320.244 301.736C325.979 322.123 344.749 332.578 344.749 332.578L327.022 373.351ZM438.601 129.754L462.064 79.0484L369.255 45.0703L365.605 53.4341L295.738 26.7743L293.652 32.0017L310.858 38.2746L278.532 122.436L364.041 154.323C364.041 154.323 370.819 134.982 396.889 127.663C422.959 120.345 438.601 129.754 438.601 129.754ZM348.92 175.233L278.532 151.187L273.318 163.732C273.318 163.732 293.345 170.809 286.874 186.733C281.139 200.847 261.847 193.006 261.847 193.006L256.112 210.256L322.329 234.825L348.92 175.233Z",stroke:"#95D0D9","stroke-width":"3"}),(0,jsx_runtime.jsx)("rect",{x:"591.949",y:"-51.7803",width:"41",height:"549",transform:"rotate(23.5473 591.949 -51.7803)",fill:"#95D0D9"}),(0,jsx_runtime.jsx)("path",{d:"M623.66 454.508L613.285 441.593L534.896 384.879L521.063 375.895H506.653L499.736 378.702L495.125 384.879L477.833 408.463L464 438.224L593.111 459L623.66 454.508ZM623.66 454.508L619.049 429.239L518.181 358.488L513.569 351.749L510.111 339.396L513.569 325.358L566.597 215.861L571.785 210.246L581.007 208L630 210.246L623.66 454.508Z",stroke:"#95D0D9","stroke-width":"3"}),(0,jsx_runtime.jsx)("path",{d:"M0 423.5L75 232M187.5 -65.5L150.775 32.5M150.775 32.5L187.5 98.5L138 222L75 232M150.775 32.5L75 232",stroke:"#95D0D9","stroke-width":"3"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_247_3113",children:(0,jsx_runtime.jsx)("rect",{width:"592",height:"424",fill:"white"})})})]})})]})})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})};try{ConferenceLocation.displayName="ConferenceLocation",ConferenceLocation.__docgenInfo={description:"",displayName:"ConferenceLocation",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},font_size:{defaultValue:null,description:"",name:"font_size",required:!1,type:{name:"number"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"Boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"WidgetTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/info/location/index.tsx#ConferenceLocation"]={docgenInfo:ConferenceLocation.__docgenInfo,name:"ConferenceLocation",path:"src/components/info/location/index.tsx#ConferenceLocation"})}catch(__react_docgen_typescript_loader_error){}var Default={args:{address:"Конференция проводится в МГТУ \n        им. Н.Э. Баумана по адресу:\n        Москва, 2-ая Бауманская д. 5, корп. 1",ya_link:"https://ya.ru/"}};let location_stories={title:"Info/Conference location",component:ConferenceLocation};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    address: `Конференция проводится в МГТУ \n        им. Н.Э. Баумана по адресу:\n        Москва, 2-ая Бауманская д. 5, корп. 1`,\n    ya_link: 'https://ya.ru/'\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]}}]);