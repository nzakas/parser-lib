/* exported Properties */

"use strict";

var Properties = module.exports = {
    __proto__: null,

    // A
    "align-items"                       : "flex-start | flex-end | center | baseline | stretch",
    "align-content"                     : "flex-start | flex-end | center | space-between | space-around | stretch",
    "align-self"                        : "auto | flex-start | flex-end | center | baseline | stretch",
    "all"                               : "initial | inherit | unset",
    "-webkit-align-items"               : "flex-start | flex-end | center | baseline | stretch",
    "-webkit-align-content"             : "flex-start | flex-end | center | space-between | space-around | stretch",
    "-webkit-align-self"                : "auto | flex-start | flex-end | center | baseline | stretch",
    "alignment-adjust"                  : "auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | <percentage> | <length>",
    "alignment-baseline"                : "auto | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
    "animation"                         : 1,
    "animation-delay"                   : "<time>#",
    "animation-direction"               : "<single-animation-direction>#",
    "animation-duration"                : "<time>#",
    "animation-fill-mode"               : "[ none | forwards | backwards | both ]#",
    "animation-iteration-count"         : "[ <number> | infinite ]#",
    "animation-name"                    : "[ none | <single-animation-name> ]#",
    "animation-play-state"              : "[ running | paused ]#",
    "animation-timing-function"         : 1,

    // vendor prefixed
    "-moz-animation-delay"              : "<time>#",
    "-moz-animation-direction"          : "[ normal | alternate ]#",
    "-moz-animation-duration"           : "<time>#",
    "-moz-animation-iteration-count"    : "[ <number> | infinite ]#",
    "-moz-animation-name"               : "[ none | <single-animation-name> ]#",
    "-moz-animation-play-state"         : "[ running | paused ]#",

    "-ms-animation-delay"               : "<time>#",
    "-ms-animation-direction"           : "[ normal | alternate ]#",
    "-ms-animation-duration"            : "<time>#",
    "-ms-animation-iteration-count"     : "[ <number> | infinite ]#",
    "-ms-animation-name"                : "[ none | <single-animation-name> ]#",
    "-ms-animation-play-state"          : "[ running | paused ]#",

    "-webkit-animation-delay"           : "<time>#",
    "-webkit-animation-direction"       : "[ normal | alternate ]#",
    "-webkit-animation-duration"        : "<time>#",
    "-webkit-animation-fill-mode"       : "[ none | forwards | backwards | both ]#",
    "-webkit-animation-iteration-count" : "[ <number> | infinite ]#",
    "-webkit-animation-name"            : "[ none | <single-animation-name> ]#",
    "-webkit-animation-play-state"      : "[ running | paused ]#",

    "-o-animation-delay"                : "<time>#",
    "-o-animation-direction"            : "[ normal | alternate ]#",
    "-o-animation-duration"             : "<time>#",
    "-o-animation-iteration-count"      : "[ <number> | infinite ]#",
    "-o-animation-name"                 : "[ none | <single-animation-name> ]#",
    "-o-animation-play-state"           : "[ running | paused ]#",

    "appearance"                        : "none | auto",
    "-moz-appearance"                   : "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
    "-ms-appearance"                    : "none | icon | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",
    "-webkit-appearance"                : "none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox | listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical",
    "-o-appearance"                     : "none | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",

    "azimuth"                           : "<azimuth>",

    // B
    "backface-visibility"               : "visible | hidden",
    "background"                        : 1,
    "background-attachment"             : "<attachment>#",
    "background-clip"                   : "<box>#",
    "background-color"                  : "<color>",
    "background-image"                  : "<bg-image>#",
    "background-origin"                 : "<box>#",
    "background-position"               : "<bg-position>",
    "background-repeat"                 : "<repeat-style>#",
    "background-size"                   : "<bg-size>#",
    "baseline-shift"                    : "baseline | sub | super | <percentage> | <length>",
    "behavior"                          : 1,
    "binding"                           : 1,
    "bleed"                             : "<length>",
    "bookmark-label"                    : "<content> | <attr> | <string>",
    "bookmark-level"                    : "none | <integer>",
    "bookmark-state"                    : "open | closed",
    "bookmark-target"                   : "none | <uri> | <attr>",
    "border"                            : "<border-width> || <border-style> || <color>",
    "border-bottom"                     : "<border-width> || <border-style> || <color>",
    "border-bottom-color"               : "<color>",
    "border-bottom-left-radius"         :  "<x-one-radius>",
    "border-bottom-right-radius"        :  "<x-one-radius>",
    "border-bottom-style"               : "<border-style>",
    "border-bottom-width"               : "<border-width>",
    "border-collapse"                   : "collapse | separate",
    "border-color"                      : "<color>{1,4}",
    "border-image"                      : 1,
    "border-image-outset"               : "[ <length> | <number> ]{1,4}",
    "border-image-repeat"               : "[ stretch | repeat | round ]{1,2}",
    "border-image-slice"                : "<border-image-slice>",
    "border-image-source"               : "<image> | none",
    "border-image-width"                : "[ <length> | <percentage> | <number> | auto ]{1,4}",
    "border-left"                       : "<border-width> || <border-style> || <color>",
    "border-left-color"                 : "<color>",
    "border-left-style"                 : "<border-style>",
    "border-left-width"                 : "<border-width>",
    "border-radius"                     : "<border-radius>",
    "border-right"                      : "<border-width> || <border-style> || <color>",
    "border-right-color"                : "<color>",
    "border-right-style"                : "<border-style>",
    "border-right-width"                : "<border-width>",
    "border-spacing"                    : "<length>{1,2}",
    "border-style"                      : "<border-style>{1,4}",
    "border-top"                        : "<border-width> || <border-style> || <color>",
    "border-top-color"                  : "<color>",
    "border-top-left-radius"            : "<x-one-radius>",
    "border-top-right-radius"           : "<x-one-radius>",
    "border-top-style"                  : "<border-style>",
    "border-top-width"                  : "<border-width>",
    "border-width"                      : "<border-width>{1,4}",
    "bottom"                            : "<margin-width>",
    "-moz-box-align"                    : "start | end | center | baseline | stretch",
    "-moz-box-decoration-break"         : "slice | clone",
    "-moz-box-direction"                : "normal | reverse",
    "-moz-box-flex"                     : "<number>",
    "-moz-box-flex-group"               : "<integer>",
    "-moz-box-lines"                    : "single | multiple",
    "-moz-box-ordinal-group"            : "<integer>",
    "-moz-box-orient"                   : "horizontal | vertical | inline-axis | block-axis",
    "-moz-box-pack"                     : "start | end | center | justify",
    "-o-box-decoration-break"           : "slice | clone",
    "-webkit-box-align"                 : "start | end | center | baseline | stretch",
    "-webkit-box-decoration-break"      : "slice | clone",
    "-webkit-box-direction"             : "normal | reverse",
    "-webkit-box-flex"                  : "<number>",
    "-webkit-box-flex-group"            : "<integer>",
    "-webkit-box-lines"                 : "single | multiple",
    "-webkit-box-ordinal-group"         : "<integer>",
    "-webkit-box-orient"                : "horizontal | vertical | inline-axis | block-axis",
    "-webkit-box-pack"                  : "start | end | center | justify",
    "box-decoration-break"              : "slice | clone",
    "box-shadow"                        : "<box-shadow>",
    "box-sizing"                        : "content-box | border-box",
    "break-after"                       : "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
    "break-before"                      : "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
    "break-inside"                      : "auto | avoid | avoid-page | avoid-column",

    // C
    "caption-side"                      : "top | bottom",
    "calcMode"                          : "discrete | linear | paced | spline",
    "clear"                             : "none | right | left | both",
    "clip"                              : "<shape> | auto",
    "-webkit-clip-path"                 : "<clip-source> | <clip-path> | none",
    "clipPathUnits"                     : "userSpaceOnUse | objectBoundingBox",
    "clip-path"                         : "<clip-source> | <clip-path> | none",
    "clip-rule"                         : "nonzero | evenodd",
    "color"                             : "<color>",
    "color-interpolation"               : "auto | sRGB | linearRGB",
    "color-interpolation-filters"       : "auto | sRGB | linearRGB",
    "color-profile"                     : 1,
    "color-rendering"                   : "auto | optimizeSpeed | optimizeQuality",
    "column-count"                      : "<integer> | auto",                       // https    ://www.w3.org/TR/css3-multicol/
    "column-fill"                       : "auto | balance",
    "column-gap"                        : "<length> | normal",
    "column-rule"                       : "<border-width> || <border-style> || <color>",
    "column-rule-color"                 : "<color>",
    "column-rule-style"                 : "<border-style>",
    "column-rule-width"                 : "<border-width>",
    "column-span"                       : "none | all",
    "column-width"                      : "<length> | auto",
    "columns"                           : 1,
    "content"                           : 1,
    "counter-increment"                 : 1,
    "counter-reset"                     : 1,
    "crop"                              : "<shape> | auto",
    "cue"                               : "cue-after | cue-before",
    "cue-after"                         : 1,
    "cue-before"                        : 1,
    "cursor"                            : 1,
    "cx"                                : "<coordinate>",
    "cy"                                : "<coordinate>",

    // D
    "direction"                         : "ltr | rtl",
    "display"                           : "inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | none | -moz-box | -moz-inline-block | -moz-inline-box | -moz-inline-grid | -moz-inline-stack | -moz-inline-table | -moz-grid | -moz-grid-group | -moz-grid-line | -moz-groupbox | -moz-deck | -moz-popup | -moz-stack | -moz-marker | -webkit-box | -webkit-inline-box | -ms-flexbox | -ms-inline-flexbox | flex | -webkit-flex | inline-flex | -webkit-inline-flex",
    "dominant-baseline"                 : "auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge",
    "drop-initial-after-adjust"         : "central | middle | after-edge | text-after-edge | ideographic | alphabetic | mathematical | <percentage> | <length>",
    "drop-initial-after-align"          : "baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
    "drop-initial-before-adjust"        : "before-edge | text-before-edge | central | middle | hanging | mathematical | <percentage> | <length>",
    "drop-initial-before-align"         : "caps-height | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
    "drop-initial-size"                 : "auto | line | <length> | <percentage>",
    "drop-initial-value"                : "<integer>",

    // E
    "elevation"                         : "<angle> | below | level | above | higher | lower",
    "empty-cells"                       : "show | hide",
    "enable-background"                 : 1,

    // F
    "fill"                              : "<paint>",
    "fill-opacity"                      : "<opacity-value>",
    "fill-rule"                         : "nonzero | evenodd",
    "filter"                            : "<filter-function-list> | none",
    "fit"                               : "fill | hidden | meet | slice",
    "fit-position"                      : 1,
    "flex"                              : "<flex>",
    "flex-basis"                        : "<width>",
    "flex-direction"                    : "row | row-reverse | column | column-reverse",
    "flex-flow"                         : "<flex-direction> || <flex-wrap>",
    "flex-grow"                         : "<number>",
    "flex-shrink"                       : "<number>",
    "flex-wrap"                         : "nowrap | wrap | wrap-reverse",
    "-webkit-flex"                      : "<flex>",
    "-webkit-flex-basis"                : "<width>",
    "-webkit-flex-direction"            : "row | row-reverse | column | column-reverse",
    "-webkit-flex-flow"                 : "<flex-direction> || <flex-wrap>",
    "-webkit-flex-grow"                 : "<number>",
    "-webkit-flex-shrink"               : "<number>",
    "-webkit-flex-wrap"                 : "nowrap | wrap | wrap-reverse",
    "-ms-flex"                          : "<flex>",
    "-ms-flex-align"                    : "start | end | center | stretch | baseline",
    "-ms-flex-direction"                : "row | row-reverse | column | column-reverse",
    "-ms-flex-order"                    : "<number>",
    "-ms-flex-pack"                     : "start | end | center | justify",
    "-ms-flex-wrap"                     : "nowrap | wrap | wrap-reverse",
    "float"                             : "left | right | none",
    "float-offset"                      : 1,
    "flood-color"                       : 1,
    "flood-opacity"                     : "<opacity-value>",
    "font"                              : "<font-shorthand> | caption | icon | menu | message-box | small-caption | status-bar",
    "font-family"                       : "<font-family>",
    "font-feature-settings"             : "<feature-tag-value> | normal",
    "font-kerning"                      : "auto | normal | none",
    "font-size"                         : "<font-size>",
    "font-size-adjust"                  : "<number> | none",
    "font-stretch"                      : "<font-stretch>",
    "font-style"                        : "<font-style>",
    "font-variant"                      : "<font-variant> | normal | none",
    "font-variant-alternates"           : "<font-variant-alternates> | normal",
    "font-variant-caps"                 : "<font-variant-caps> | normal",
    "font-variant-east-asian"           : "<font-variant-east-asian> | normal",
    "font-variant-ligatures"            : "<font-variant-ligatures> | normal | none",
    "font-variant-numeric"              : "<font-variant-numeric> | normal",
    "font-variant-position"             : "normal | sub | super",
    "font-weight"                       : "<font-weight>",

    // G
    "glyph-orientation-horizontal"      : "<glyph-angle>",
    "glyph-orientation-vertical"        : "auto | <glyph-angle>",
    "grid"                              : 1,
    "grid-area"                         : 1,
    "grid-auto-columns"                 : 1,
    "grid-auto-flow"                    : 1,
    "grid-auto-position"                : 1,
    "grid-auto-rows"                    : 1,
    "grid-cell-stacking"                : "columns | rows | layer",
    "grid-column"                       : 1,
    "grid-columns"                      : 1,
    "grid-column-align"                 : "start | end | center | stretch",
    "grid-column-sizing"                : 1,
    "grid-column-start"                 : 1,
    "grid-column-end"                   : 1,
    "grid-column-span"                  : "<integer>",
    "grid-flow"                         : "none | rows | columns",
    "grid-layer"                        : "<integer>",
    "grid-row"                          : 1,
    "grid-rows"                         : 1,
    "grid-row-align"                    : "start | end | center | stretch",
    "grid-row-start"                    : 1,
    "grid-row-end"                      : 1,
    "grid-row-span"                     : "<integer>",
    "grid-row-sizing"                   : 1,
    "grid-template"                     : 1,
    "grid-template-areas"               : 1,
    "grid-template-columns"             : 1,
    "grid-template-rows"                : 1,

    // H
    "hanging-punctuation"               : 1,
    "height"                            : "<margin-width> | <content-sizing>",
    "hyphenate-after"                   : "<integer> | auto",
    "hyphenate-before"                  : "<integer> | auto",
    "hyphenate-character"               : "<string> | auto",
    "hyphenate-lines"                   : "no-limit | <integer>",
    "hyphenate-resource"                : 1,
    "hyphens"                           : "none | manual | auto",

    // I
    "icon"                              : 1,
    "image-orientation"                 : "angle | auto",
    "image-rendering"                   : "auto | optimizeSpeed | optimizeQuality",
    "image-resolution"                  : 1,
    "ime-mode"                          : "auto | normal | active | inactive | disabled",
    "inline-box-align"                  : "last | <integer>",

    // J
    "justify-content"                   : "flex-start | flex-end | center | space-between | space-around",
    "-webkit-justify-content"           : "flex-start | flex-end | center | space-between | space-around",

    // K
    "kerning"                           : "auto | <length>",

    // L
    "left"                              : "<margin-width>",
    "letter-spacing"                    : "<length> | normal",
    "line-height"                       : "<line-height>",
    "line-break"                        : "auto | loose | normal | strict",
    "line-stacking"                     : 1,
    "line-stacking-ruby"                : "exclude-ruby | include-ruby",
    "line-stacking-shift"               : "consider-shifts | disregard-shifts",
    "line-stacking-strategy"            : "inline-line-height | block-line-height | max-height | grid-height",
    "list-style"                        : 1,
    "list-style-image"                  : "<uri> | none",
    "list-style-position"               : "inside | outside",
    "list-style-type"                   : "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none",

    // M
    "margin"                            : "<margin-width>{1,4}",
    "margin-bottom"                     : "<margin-width>",
    "margin-left"                       : "<margin-width>",
    "margin-right"                      : "<margin-width>",
    "margin-top"                        : "<margin-width>",
    "mark"                              : 1,
    "mark-after"                        : 1,
    "mark-before"                       : 1,
    "marker"                            : 1,
    "marker-end"                        : 1,
    "marker-mid"                        : 1,
    "marker-start"                      : 1,
    "marks"                             : 1,
    "marquee-direction"                 : 1,
    "marquee-play-count"                : 1,
    "marquee-speed"                     : 1,
    "marquee-style"                     : 1,
    "mask"                              : 1,
    "max-height"                        : "<length> | <percentage> | <content-sizing> | none",
    "max-width"                         : "<length> | <percentage> | <content-sizing> | none",
    "min-height"                        : "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
    "min-width"                         : "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
    "move-to"                           : 1,

    // N
    "nav-down"                          : 1,
    "nav-index"                         : 1,
    "nav-left"                          : 1,
    "nav-right"                         : 1,
    "nav-up"                            : 1,

    // O
    "object-fit"                        : "fill | contain | cover | none | scale-down",
    "object-position"                   : "<position>",
    "opacity"                           : "<opacity-value>",
    "order"                             : "<integer>",
    "-webkit-order"                     : "<integer>",
    "orphans"                           : "<integer>",
    "outline"                           : 1,
    "outline-color"                     : "<color> | invert",
    "outline-offset"                    : 1,
    "outline-style"                     : "<border-style>",
    "outline-width"                     : "<border-width>",
    "overflow"                          : "visible | hidden | scroll | auto",
    "overflow-style"                    : 1,
    "overflow-wrap"                     : "normal | break-word",
    "overflow-x"                        : 1,
    "overflow-y"                        : 1,

    // P
    "padding"                           : "<padding-width>{1,4}",
    "padding-bottom"                    : "<padding-width>",
    "padding-left"                      : "<padding-width>",
    "padding-right"                     : "<padding-width>",
    "padding-top"                       : "<padding-width>",
    "page"                              : 1,
    "page-break-after"                  : "auto | always | avoid | left | right",
    "page-break-before"                 : "auto | always | avoid | left | right",
    "page-break-inside"                 : "auto | avoid",
    "page-policy"                       : 1,
    "pause"                             : 1,
    "pause-after"                       : 1,
    "pause-before"                      : 1,
    "perspective"                       : 1,
    "perspective-origin"                : 1,
    "phonemes"                          : 1,
    "pitch"                             : 1,
    "pitch-range"                       : 1,
    "play-during"                       : 1,
    "pointer-events"                    : "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all",
    "position"                          : "static | relative | absolute | fixed | sticky | -webkit-sticky",
    "presentation-level"                : 1,
    "punctuation-trim"                  : 1,

    // Q
    "quotes"                            : 1,

    // R
    "r"                                 : "<length>",
    "rendering-intent"                  : 1,
    "resize"                            : 1,
    "rest"                              : 1,
    "rest-after"                        : 1,
    "rest-before"                       : 1,
    "richness"                          : 1,
    "right"                             : "<margin-width>",
    "rotation"                          : 1,
    "rotation-point"                    : 1,
    "ruby-align"                        : 1,
    "ruby-overhang"                     : 1,
    "ruby-position"                     : 1,
    "ruby-span"                         : 1,

    // S
    "shape-rendering"                   : "auto | optimizeSpeed | crispEdges | geometricPrecision",
    "size"                              : 1,
    "speak"                             : "normal | none | spell-out",
    "speak-header"                      : "once | always",
    "speak-numeral"                     : "digits | continuous",
    "speak-punctuation"                 : "code | none",
    "speech-rate"                       : 1,
    "src"                               : 1,
    "stop-color"                        : 1,
    "stop-opacity"                      : "<opacity-value>",
    "stress"                            : 1,
    "string-set"                        : 1,
    "stroke"                            : "<paint>",
    "stroke-dasharray"                  : "none | <dasharray>",
    "stroke-dashoffset"                 : "<percentage> | <length>",
    "stroke-linecap"                    : "butt | round | square",
    "stroke-linejoin"                   : "miter | round | bevel",
    "stroke-miterlimit"                 : "<miterlimit>",
    "stroke-opacity"                    : "<opacity-value>",
    "stroke-width"                      : "<percentage> | <length>",

    "table-layout"                      : "auto | fixed",
    "tab-size"                          : "<integer> | <length>",
    "target"                            : 1,
    "target-name"                       : 1,
    "target-new"                        : 1,
    "target-position"                   : 1,
    "text-align"                        : "left | right | center | justify | match-parent | start | end",
    "text-align-last"                   : 1,
    "text-anchor"                       : "start | middle | end",
    "text-decoration"                   : "<text-decoration-line> || <text-decoration-style> || <text-decoration-color>",
    "text-decoration-color"             : "<text-decoration-color>",
    "text-decoration-line"              : "<text-decoration-line>",
    "text-decoration-style"             : "<text-decoration-style>",
    "text-emphasis"                     : 1,
    "text-height"                       : 1,
    "text-indent"                       : "<length> | <percentage>",
    "text-justify"                      : "auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida",
    "text-outline"                      : 1,
    "text-overflow"                     : 1,
    "text-rendering"                    : "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
    "text-shadow"                       : 1,
    "text-transform"                    : "capitalize | uppercase | lowercase | none",
    "text-wrap"                         : "normal | none | avoid",
    "top"                               : "<margin-width>",
    "-ms-touch-action"                  : "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
    "touch-action"                      : "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
    "transform"                         : 1,
    "transform-origin"                  : 1,
    "transform-style"                   : 1,
    "transition"                        : 1,
    "transition-delay"                  : 1,
    "transition-duration"               : 1,
    "transition-property"               : 1,
    "transition-timing-function"        : 1,

    // U
    "unicode-bidi"                      : "normal | embed | isolate | bidi-override | isolate-override | plaintext",
    "user-modify"                       : "read-only | read-write | write-only",
    "user-select"                       : "none | text | toggle | element | elements | all",

    // V
    "vertical-align"                    : "auto | use-script | baseline | sub | super | top | text-top | central | middle | bottom | text-bottom | <percentage> | <length>",
    "visibility"                        : "visible | hidden | collapse",
    "voice-balance"                     : 1,
    "voice-duration"                    : 1,
    "voice-family"                      : 1,
    "voice-pitch"                       : 1,
    "voice-pitch-range"                 : 1,
    "voice-rate"                        : 1,
    "voice-stress"                      : 1,
    "voice-volume"                      : 1,
    "volume"                            : 1,

    // W
    "white-space"                       : "normal | pre | nowrap | pre-wrap | pre-line | -pre-wrap | -o-pre-wrap | -moz-pre-wrap | -hp-pre-wrap",   // https    ://perishablepress.com/wrapping-content/
    "white-space-collapse"              : 1,
    "widows"                            : "<integer>",
    "width"                             : "<length> | <percentage> | <content-sizing> | auto",
    "will-change"                       : "<will-change>",
    "word-break"                        : "normal | keep-all | break-all",
    "word-spacing"                      : "<length> | normal",
    "word-wrap"                         : "normal | break-word",
    "writing-mode"                      : "horizontal-tb | vertical-rl | vertical-lr | lr-tb | rl-tb | tb-rl | bt-rl | tb-lr | bt-lr | lr-bt | rl-bt | lr | rl | tb",

    // Z
    "z-index"                           : "<integer> | auto",
    "zoom"                              : "<number> | <percentage> | normal"
};
