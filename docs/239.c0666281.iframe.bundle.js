"use strict";(self.webpackChunk_bauman_conference_library_mui_lib=self.webpackChunk_bauman_conference_library_mui_lib||[]).push([[239],{"./node_modules/@mui/material/Grid/Grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>Grid_Grid});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js");let GridContext=react.createContext();var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getGridUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiGrid",slot)}let GRID_SIZES=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],gridClasses=(0,generateUtilityClasses.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(spacing=>`spacing-xs-${spacing}`),...["column-reverse","column","row-reverse","row"].map(direction=>`direction-xs-${direction}`),...["nowrap","wrap-reverse","wrap"].map(wrap=>`wrap-xs-${wrap}`),...GRID_SIZES.map(size=>`grid-xs-${size}`),...GRID_SIZES.map(size=>`grid-sm-${size}`),...GRID_SIZES.map(size=>`grid-md-${size}`),...GRID_SIZES.map(size=>`grid-lg-${size}`),...GRID_SIZES.map(size=>`grid-xl-${size}`)]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let _excluded=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function getOffset(val){let parse=parseFloat(val);return`${parse}${String(val).replace(String(parse),"")||"px"}`}function generateGrid({theme,ownerState}){let size;return theme.breakpoints.keys.reduce((globalStyles,breakpoint)=>{let styles={};if(ownerState[breakpoint]&&(size=ownerState[breakpoint]),!size)return globalStyles;if(!0===size)styles={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===size)styles={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let columnsBreakpointValues=(0,breakpoints.kW)({values:ownerState.columns,breakpoints:theme.breakpoints.values}),columnValue="object"==typeof columnsBreakpointValues?columnsBreakpointValues[breakpoint]:columnsBreakpointValues;if(null==columnValue)return globalStyles;let width=`${Math.round(size/columnValue*1e8)/1e6}%`,more={};if(ownerState.container&&ownerState.item&&0!==ownerState.columnSpacing){let themeSpacing=theme.spacing(ownerState.columnSpacing);if("0px"!==themeSpacing){let fullWidth=`calc(${width} + ${getOffset(themeSpacing)})`;more={flexBasis:fullWidth,maxWidth:fullWidth}}}styles=(0,esm_extends.A)({flexBasis:width,flexGrow:0,maxWidth:width},more)}return 0===theme.breakpoints.values[breakpoint]?Object.assign(globalStyles,styles):globalStyles[theme.breakpoints.up(breakpoint)]=styles,globalStyles},{})}function generateDirection({theme,ownerState}){let directionValues=(0,breakpoints.kW)({values:ownerState.direction,breakpoints:theme.breakpoints.values});return(0,breakpoints.NI)({theme},directionValues,propValue=>{let output={flexDirection:propValue};return 0===propValue.indexOf("column")&&(output[`& > .${gridClasses.item}`]={maxWidth:"none"}),output})}function extractZeroValueBreakpointKeys({breakpoints,values}){let nonZeroKey="";Object.keys(values).forEach(key=>{""===nonZeroKey&&0!==values[key]&&(nonZeroKey=key)});let sortedBreakpointKeysByValue=Object.keys(breakpoints).sort((a,b)=>breakpoints[a]-breakpoints[b]);return sortedBreakpointKeysByValue.slice(0,sortedBreakpointKeysByValue.indexOf(nonZeroKey))}function generateRowGap({theme,ownerState}){let{container,rowSpacing}=ownerState,styles={};if(container&&0!==rowSpacing){let zeroValueBreakpointKeys;let rowSpacingValues=(0,breakpoints.kW)({values:rowSpacing,breakpoints:theme.breakpoints.values});"object"==typeof rowSpacingValues&&(zeroValueBreakpointKeys=extractZeroValueBreakpointKeys({breakpoints:theme.breakpoints.values,values:rowSpacingValues})),styles=(0,breakpoints.NI)({theme},rowSpacingValues,(propValue,breakpoint)=>{var _zeroValueBreakpointK;let themeSpacing=theme.spacing(propValue);return"0px"!==themeSpacing?{marginTop:`-${getOffset(themeSpacing)}`,[`& > .${gridClasses.item}`]:{paddingTop:getOffset(themeSpacing)}}:null!=(_zeroValueBreakpointK=zeroValueBreakpointKeys)&&_zeroValueBreakpointK.includes(breakpoint)?{}:{marginTop:0,[`& > .${gridClasses.item}`]:{paddingTop:0}}})}return styles}function generateColumnGap({theme,ownerState}){let{container,columnSpacing}=ownerState,styles={};if(container&&0!==columnSpacing){let zeroValueBreakpointKeys;let columnSpacingValues=(0,breakpoints.kW)({values:columnSpacing,breakpoints:theme.breakpoints.values});"object"==typeof columnSpacingValues&&(zeroValueBreakpointKeys=extractZeroValueBreakpointKeys({breakpoints:theme.breakpoints.values,values:columnSpacingValues})),styles=(0,breakpoints.NI)({theme},columnSpacingValues,(propValue,breakpoint)=>{var _zeroValueBreakpointK2;let themeSpacing=theme.spacing(propValue);return"0px"!==themeSpacing?{width:`calc(100% + ${getOffset(themeSpacing)})`,marginLeft:`-${getOffset(themeSpacing)}`,[`& > .${gridClasses.item}`]:{paddingLeft:getOffset(themeSpacing)}}:null!=(_zeroValueBreakpointK2=zeroValueBreakpointKeys)&&_zeroValueBreakpointK2.includes(breakpoint)?{}:{width:"100%",marginLeft:0,[`& > .${gridClasses.item}`]:{paddingLeft:0}}})}return styles}function resolveSpacingStyles(spacing,breakpoints,styles={}){if(!spacing||spacing<=0)return[];if("string"==typeof spacing&&!Number.isNaN(Number(spacing))||"number"==typeof spacing)return[styles[`spacing-xs-${String(spacing)}`]];let spacingStyles=[];return breakpoints.forEach(breakpoint=>{let value=spacing[breakpoint];Number(value)>0&&spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`])}),spacingStyles}let GridRoot=(0,styled.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(props,styles)=>{let{ownerState}=props,{container,direction,item,spacing,wrap,zeroMinWidth,breakpoints}=ownerState,spacingStyles=[];container&&(spacingStyles=resolveSpacingStyles(spacing,breakpoints,styles));let breakpointsStyles=[];return breakpoints.forEach(breakpoint=>{let value=ownerState[breakpoint];value&&breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`])}),[styles.root,container&&styles.container,item&&styles.item,zeroMinWidth&&styles.zeroMinWidth,...spacingStyles,"row"!==direction&&styles[`direction-xs-${String(direction)}`],"wrap"!==wrap&&styles[`wrap-xs-${String(wrap)}`],...breakpointsStyles]}})(({ownerState})=>(0,esm_extends.A)({boxSizing:"border-box"},ownerState.container&&{display:"flex",flexWrap:"wrap",width:"100%"},ownerState.item&&{margin:0},ownerState.zeroMinWidth&&{minWidth:0},"wrap"!==ownerState.wrap&&{flexWrap:ownerState.wrap}),generateDirection,generateRowGap,generateColumnGap,generateGrid);function resolveSpacingClasses(spacing,breakpoints){if(!spacing||spacing<=0)return[];if("string"==typeof spacing&&!Number.isNaN(Number(spacing))||"number"==typeof spacing)return[`spacing-xs-${String(spacing)}`];let classes=[];return breakpoints.forEach(breakpoint=>{let value=spacing[breakpoint];if(Number(value)>0){let className=`spacing-${breakpoint}-${String(value)}`;classes.push(className)}}),classes}let useUtilityClasses=ownerState=>{let{classes,container,direction,item,spacing,wrap,zeroMinWidth,breakpoints}=ownerState,spacingClasses=[];container&&(spacingClasses=resolveSpacingClasses(spacing,breakpoints));let breakpointsClasses=[];breakpoints.forEach(breakpoint=>{let value=ownerState[breakpoint];value&&breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`)});let slots={root:["root",container&&"container",item&&"item",zeroMinWidth&&"zeroMinWidth",...spacingClasses,"row"!==direction&&`direction-xs-${String(direction)}`,"wrap"!==wrap&&`wrap-xs-${String(wrap)}`,...breakpointsClasses]};return(0,composeClasses.A)(slots,getGridUtilityClass,classes)},Grid_Grid=react.forwardRef(function Grid(inProps,ref){let themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiGrid"}),{breakpoints}=(0,useTheme.A)(),props=(0,extendSxProp.A)(themeProps),{className,columns:columnsProp,columnSpacing:columnSpacingProp,component="div",container=!1,direction="row",item=!1,rowSpacing:rowSpacingProp,spacing=0,wrap="wrap",zeroMinWidth=!1}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),rowSpacing=rowSpacingProp||spacing,columnSpacing=columnSpacingProp||spacing,columnsContext=react.useContext(GridContext),columns=container?columnsProp||12:columnsContext,breakpointsValues={},otherFiltered=(0,esm_extends.A)({},other);breakpoints.keys.forEach(breakpoint=>{null!=other[breakpoint]&&(breakpointsValues[breakpoint]=other[breakpoint],delete otherFiltered[breakpoint])});let ownerState=(0,esm_extends.A)({},props,{columns,container,direction,item,rowSpacing,columnSpacing,wrap,zeroMinWidth,spacing},breakpointsValues,{breakpoints:breakpoints.keys}),classes=useUtilityClasses(ownerState);return(0,jsx_runtime.jsx)(GridContext.Provider,{value:columns,children:(0,jsx_runtime.jsx)(GridRoot,(0,esm_extends.A)({ownerState:ownerState,className:(0,clsx.A)(classes.root,className),as:component,ref:ref},otherFiltered))})})},"./node_modules/@mui/material/styles/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useTheme}),__webpack_require__("./node_modules/react/index.js");var _mui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useTheme(){let theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.A)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.A);return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__.A]||theme}}}]);