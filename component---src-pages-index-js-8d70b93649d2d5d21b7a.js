(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1u2X":function(e,a,t){"use strict";var n=t("dI71"),o=t("q1tI"),l=t.n(o),i=t("LvDl"),r=t.n(i),s=t("Czv6"),c=t.n(s),m=t("P77F"),u=t.n(m),d=t("Zn/k"),p=t("ULVC"),g=t.n(p),x=function(e){function a(){var a;return(a=e.call(this)||this).updateColor=function(e){a.setState({color:e})},a.state={color:"#000000"},a.updateColor=a.updateColor.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}Object(n.a)(a,e);var t=a.prototype;return t.renderSelect=function(){var e=this,a=Object.keys(u.a).sort();return l.a.createElement("div",null,l.a.createElement("select",{onChange:function(a){return e.updateColor(a.target.value)},value:this.state.color},l.a.createElement("option",{value:"#000000",default:!0},"Black - #000000"),a.map((function(e){return l.a.createElement("option",{key:e,value:u.a[e]},r.a.kebabCase(e)," - ",u.a[e])}))))},t.render=function(){var e=this,a=r.a.keys(c.a).sort(),t=r.a.without(a,"iconSize").map((function(a){var t=c.a[a];return l.a.createElement("div",{className:g.a.card,key:a},l.a.createElement("div",{className:g.a.iconBlock},l.a.createElement("div",{className:g.a.icon,dangerouslySetInnerHTML:{__html:t},style:{color:e.state.color}})),l.a.createElement("div",{className:g.a.iconName},r.a.kebabCase(a)))}));return l.a.createElement("div",{className:g.a.mainContainer},l.a.createElement(d.a,{text:"Icons (theme)",type:"SectionHeader__small",content:this.renderSelect()}),l.a.createElement("div",{className:g.a.sectionIcon},t))},a}(l.a.Component);a.a=x},D7zf:function(e,a){e.exports={marginLarge:"32px",gutterLarge:"16px",marginSmall:"24px",gutterSmall:"12px"}},Fvfz:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("rohU"),s=t.n(r),c=t("Zn/k"),m=t("ULVC"),u=t.n(m);a.a=function(){var e=i.a.keys(s.a).sort(),a=i.a.without(e,"iconSize").map((function(e){var a=s.a[e];return o.a.createElement("div",{className:u.a.card,key:e},o.a.createElement("div",{className:u.a.iconBlock},o.a.createElement("div",{className:u.a.icon,dangerouslySetInnerHTML:{__html:a}})),o.a.createElement("div",{className:u.a.iconName},i.a.kebabCase(e)))}));return o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Icons",type:"SectionHeader__small"}),o.a.createElement("div",{className:u.a.sectionIcon},a))}},Fzuq:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("No5r"),s=t.n(r),c=t("Zn/k"),m=t("hoaJ"),u=t.n(m);a.a=function(){var e=i.a.toPairsIn(s.a);return e=e.map((function(e,a){return o.a.createElement("div",{key:a},i.a.kebabCase(e[0]),": ",e[1])})),o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Shadows",type:"SectionHeader__small"}),e)}},KSq7:function(e,a){e.exports={xxlargeBoldFontWeight:"bold",largeBoldFontWeight:"bold",xlargeBoldFontSize:"32px",fontFamilyJa:"'BrandonText', 'Helvetica Neue', Helvetica, Arial, OpenTableHiragino, Roboto, Droid Sans, '游ゴシック体', OpenTableYuGothic, YuGothic, Yu Gothic, 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif",xlargeBoldLineHeight:"36px",fontFamily:"'BrandonText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",smallMediumFontWeight:"500",xsmallMediumFontSize:"14px",xsmallMediumLineHeight:"20px",mediumBoldFontWeight:"bold",xsmallRegularFontWeight:"normal",smallRegularFontSize:"16px",xxsmallRegularFontSize:"12px",xxlargeBoldFontSize:"48px",largeBoldFontSize:"24px",smallRegularLineHeight:"24px",xxsmallRegularLineHeight:"16px",xxlargeBoldLineHeight:"56px",largeBoldLineHeight:"28px",xsmallBoldFontWeight:"bold",fontWeightMedium:"500",smallMediumFontSize:"16px",smallMediumLineHeight:"24px",mediumBoldFontSize:"18px",mediumBoldLineHeight:"24px",xsmallRegularFontSize:"14px",largeMediumFontWeight:"500",xsmallRegularLineHeight:"20px",smallBoldFontWeight:"bold",xsmallBoldFontSize:"14px",xsmallBoldLineHeight:"20px",xlargeBoldFontWeight:"bold",largeMediumFontSize:"24px",largeMediumLineHeight:"32px",fontWeightBold:"bold",fontFamilyBrand:"BrandonText",xsmallMediumFontWeight:"500",smallBoldFontSize:"16px",fontWeightNormal:"normal",smallBoldLineHeight:"24px",xxsmallRegularFontWeight:"normal",smallRegularFontWeight:"normal"}},No5r:function(e,a){e.exports={boxShadowContainer:"0px 2px 4px rgba(45, 51, 63, .2)"}},Omk1:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("lAb0"),s=t.n(r),c=t("Zn/k"),m=t("hoaJ"),u=t.n(m);a.a=function(){var e=i.a.toPairsIn(s.a);return e=e.map((function(e,a){return o.a.createElement("div",{key:a},i.a.kebabCase(e[0]),": ",e[1])})),o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Borders",type:"SectionHeader__small"}),e)}},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),o=t.n(n),l=t("rBsb"),i=t("hoaJ"),r=t.n(i),s=t("ZgDQ"),c=t("uD+h"),m=t("a3pu"),u=t("Omk1"),d=t("WP/B"),p=t("Fzuq"),g=t("Ytmg"),x=t("Fvfz"),h=t("1u2X"),f=t("Zn/k");a.default=Object(l.a)((function(){return o.a.createElement("div",{className:r.a.mainContainer},o.a.createElement(f.a,{text:"Design Tokens"}),o.a.createElement("p",null,"This page shows current design tokens used in OTKit. To contribute, or add an issue, visit the"," ",o.a.createElement("a",{href:"https://github.com/opentable/design-tokens",rel:"noreferrer",target:"_blank"},"design-tokens repository"),"."),o.a.createElement(s.a,null),o.a.createElement(c.a,null),o.a.createElement(g.a,null),o.a.createElement(m.a,null),o.a.createElement(u.a,null),o.a.createElement(d.a,null),o.a.createElement(p.a,null),o.a.createElement(x.a,null),o.a.createElement(h.a,null))}),"design-system-nav")},ULVC:function(e,a,t){e.exports={sectionIcon:"otkit-icons-module--section-icon--2DHQR",mainContainer:"otkit-icons-module--main-container--1aeSM",card:"otkit-icons-module--card--2EYEk",iconBlock:"otkit-icons-module--icon-block--3mis2",icon:"otkit-icons-module--icon--1HTQU",iconName:"otkit-icons-module--icon-name--2Emxm"}},"WP/B":function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("tRSt"),s=t.n(r),c=t("Zn/k"),m=t("hoaJ"),u=t.n(m);a.a=function(){var e=i.a.toPairsIn(s.a);return e=e.map((function(e,a){return o.a.createElement("div",{key:a},i.a.kebabCase(e[0]),": ",e[1])})),o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Breakpoints",type:"SectionHeader__small"}),e)}},Ytmg:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("D7zf"),s=t.n(r),c=t("Zn/k"),m=t("hoaJ"),u=t.n(m);a.a=function(){var e=i.a.toPairsIn(s.a);return e=e.map((function(e,a){return o.a.createElement("div",{key:a},i.a.kebabCase(e[0]),": ",e[1])})),o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Grids",type:"SectionHeader__small"}),e)}},a3pu:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("u5Bq"),s=t.n(r),c=t("Zn/k"),m=t("hoaJ"),u=t.n(m);a.a=function(){var e=i.a.toPairsIn(s.a);return e=e.map((function(e,a){return o.a.createElement("div",{key:a},i.a.kebabCase(e[0]),": ",e[1])})),o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Spacing",type:"SectionHeader__small"}),e)}},dRDw:function(e,a,t){e.exports={fontItem:"otkit-typography-desktop-module--font-item--W_aj9",mainContainer:"otkit-typography-desktop-module--main-container--20br3"}},lAb0:function(e,a){e.exports={borderRadiusSmall:"4px"}},tRSt:function(e,a){e.exports={breakpointDesktopMin:"1056px",breakpointTabletMax:"1055px",breakpointTabletMin:"768px",breakpointMobileMax:"767px"}},u5Bq:function(e,a){e.exports={spacingXsmall:"4px",spacingSmall:"8px",spacingMedium:"16px",spacingLarge:"32px",spacingXlarge:"48px",spacingXxlarge:"64px"}},"uD+h":function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("LvDl"),i=t.n(l),r=t("KSq7"),s=t.n(r),c=t("Zn/k"),m=t("dRDw"),u=t.n(m),d=["xxlarge-bold","xlarge-bold","large-bold","large-medium","medium-bold","small-bold","small-medium","small-regular","xsmall-bold","xsmall-medium","xsmall-regular"];a.a=function(){var e=d.map((function(e,a){var t=s.a[i.a.camelCase(e+"-font-size")],n=s.a[i.a.camelCase(e+"-font-weight")],l=s.a[i.a.camelCase(e+"-line-height")],r={fontSize:t,fontWeight:n,lineHeight:l};return o.a.createElement("div",{className:u.a.fontItem,style:r,key:a},e," | font-size: ",t," | font-weight: ",n," | line-height: ",l)}));return o.a.createElement("div",{className:u.a.mainContainer},o.a.createElement(c.a,{text:"Typography – Desktop",type:"SectionHeader__small"}),o.a.createElement("p",null,"To use these OTKit typography rules in your project, we have a production-tested package that exports readily made font groupings for you:"," ",o.a.createElement("a",{href:"https://github.com/opentable/ot-react-ui-components/tree/master/styles/typography-desktop"},"@ot-react-ui/typography-desktop.")," ","See its README for details."),o.a.createElement("p",null,"It is generally ",o.a.createElement("em",null,"not recommended")," to directly consume / reference the values in this token unless for explicit reasons, such as overriding."),o.a.createElement("div",{className:u.a.fontColumn},e))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8d70b93649d2d5d21b7a.js.map