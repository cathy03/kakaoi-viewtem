(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{273:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("3dc51bd8",content,!0,{sourceMap:!1})},326:function(t,e,n){t.exports=n.p+"img/view_type_01.698889b.png"},327:function(t,e,n){t.exports=n.p+"img/view_type_02.a6fb157.png"},328:function(t,e,n){t.exports=n.p+"img/view_type_03.0a55480.png"},329:function(t,e,n){t.exports=n.p+"img/view_type_04.e4deab0.png"},330:function(t,e,n){t.exports=n.p+"img/view_type_05.bba2a87.png"},331:function(t,e,n){"use strict";n(273)},332:function(t,e,n){var r=n(53)(!1);r.push([t.i,'*[data-v-4918a54a]{font-family:"Inter","Noto Sans KR",sans-serif}.wrapper[data-v-4918a54a]{box-sizing:border-box;height:100vh;width:100vw;background-color:var(--background-color-secondary);position:relative;align-items:center;display:flex}.view-type-section[data-v-4918a54a]{max-width:1000px;margin:0 auto;padding:48px 40px}h1[data-v-4918a54a]{font-weight:700;font-size:48px;letter-spacing:-1px;margin-bottom:8px}h1[data-v-4918a54a],p[data-v-4918a54a]{color:var(--text-color)}p[data-v-4918a54a]{opacity:.4;font-size:14px;line-height:20px;word-wrap:break-word;word-break:keep-all}.view-type[data-v-4918a54a]{display:flex;flex-wrap:wrap;padding-top:20px}.view-type li[data-v-4918a54a]{flex-basis:33.3%;height:320px;background-color:var(--background-color-primary);transition:.3s cubic-bezier(.215,.61,.355,1)}.view-type-card[data-v-4918a54a]{width:100%;height:100%;display:block;color:var(--text-color);box-sizing:border-box;border:1px solid;border-color:var(--background-color-secondary);position:relative;display:flex}.view-type-card p[data-v-4918a54a]{position:absolute;top:24px;left:24px;font-size:12px;opacity:.6}.view-type-card img[data-v-4918a54a]{margin:50px auto 0;width:220px;height:220px}',""]),t.exports=r},341:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{state:this.$store.getters.getTheme}},methods:{onClickTheme:function(t){this.state=t,this.$store.dispatch("setTheme",t)}}},o=(n(331),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",class:{dark:t.state}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"view-type-section"},[r("h1",[t._v("View Template Generator")]),t._v(" "),t._m(0),t._v(" "),r("ul",{staticClass:"view-type"},[r("li",[r("nuxt-link",{staticClass:"view-type-card",attrs:{to:"/basic"}},[r("img",{attrs:{src:n(326)}}),t._v(" "),r("p",[t._v("BASIC")])])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"view-type-card",attrs:{to:"/custom"}},[r("img",{attrs:{src:n(327)}}),t._v(" "),r("p",[t._v("CUSTOMIZE")])])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"view-type-card",attrs:{to:"/list"},nativeOn:{click:function(e){return t.$store.dispatch("setListType",!0)}}},[r("img",{attrs:{src:n(328)}}),t._v(" "),r("p",[t._v("LIST-HORIZONTAL")])])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"view-type-card",attrs:{to:"/list"},nativeOn:{click:function(e){return t.$store.dispatch("setListType",!1)}}},[r("img",{attrs:{src:n(329)}}),t._v(" "),r("p",[t._v("LIST-VERTICAL")])])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"view-type-card",attrs:{to:"/carousel"}},[r("img",{attrs:{src:n(330)}}),t._v(" "),r("p",[t._v("CAROUSEL")])])],1)])]),t._v(" "),r("div",{staticClass:"menuTheme",on:{click:function(e){return t.onClickTheme(!t.state)}}},[r("span",{staticClass:"theme_text"},[r("span",{staticClass:"theme_text__mask"},[r("span",{class:{change_theme:!0===t.state}},[t._v("Dark")]),t._v(" "),r("span",{class:{change_theme:!0===t.state}},[t._v("Light")])]),t._v("\n        Mode\n      ")]),t._v(" "),r("div",{staticClass:"theme_icon",class:{change_theme:!0===t.state}},[t._m(1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        View Template은 카카오 i 음성 답변을 디스플레이 기기에 시각적으로 보여주는 화면입니다."),n("br"),t._v("음성 답변에 따라 다양한 종류의 View Template으로 표시할 수 있으며, 디스플레이 기기에 따라 레이아웃을 선택 적용할 수 있습니다.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme_sunandmoon"},[n("span",{staticClass:"theme_icon_sun"}),t._v(" "),n("span",{staticClass:"theme_icon_moon"})])}],!1,null,"4918a54a",null);e.default=component.exports}}]);