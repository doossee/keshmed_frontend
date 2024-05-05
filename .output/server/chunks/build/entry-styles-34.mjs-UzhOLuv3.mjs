const VField = '.v-field{border-radius:4px;contain:layout;display:grid;flex:1 0;font-size:16px;grid-area:control;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;letter-spacing:.009375em;max-width:100%;position:relative;--v-field-padding-start:16px;--v-field-padding-end:16px;--v-field-padding-top:8px;--v-field-padding-bottom:4px;--v-field-input-padding-top:calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom:var(--v-field-padding-bottom,4px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field .v-chip{--v-chip-height:24px}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-filled,.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-solo-inverted{--v-input-control-height:56px;--v-field-padding-bottom:4px}.v-input--density-comfortable .v-field--variant-filled,.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-solo-inverted{--v-input-control-height:48px;--v-field-padding-bottom:0px}.v-input--density-compact .v-field--variant-filled,.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-solo-inverted{--v-input-control-height:40px;--v-field-padding-bottom:0px}.v-field--no-label,.v-field--single-line,.v-field--variant-outlined{--v-field-padding-top:0px}.v-input--density-default .v-field--no-label,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--variant-outlined{--v-field-padding-bottom:16px}.v-input--density-comfortable .v-field--no-label,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--variant-outlined{--v-field-padding-bottom:12px}.v-input--density-compact .v-field--no-label,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--variant-outlined{--v-field-padding-bottom:8px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start:0px;--v-field-padding-end:0px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height:48px;--v-field-padding-top:4px;--v-field-padding-bottom:4px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height:40px;--v-field-padding-top:2px;--v-field-padding-bottom:0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height:32px;--v-field-padding-top:0px;--v-field-padding-bottom:0px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:24px}.v-field.v-field--prepended{--v-field-padding-start:6px}.v-field.v-field--appended{--v-field-padding-end:6px}.v-field__input{align-items:center;color:inherit;-moz-column-gap:2px;column-gap:2px;display:flex;flex-wrap:wrap;letter-spacing:.009375em;min-height:max(var(--v-input-control-height,56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom));min-width:0;opacity:var(--v-high-emphasis-opacity);padding-inline:var(--v-field-padding-start) var(--v-field-padding-end);padding-bottom:var(--v-field-input-padding-bottom);padding-top:var(--v-field-input-padding-top);position:relative;width:100%}.v-input--density-default .v-field__input{row-gap:8px}.v-input--density-comfortable .v-field__input{row-gap:6px}.v-input--density-compact .v-field__input{row-gap:4px}.v-field__input input{letter-spacing:inherit}.v-field__input input::-moz-placeholder,input.v-field__input::-moz-placeholder,textarea.v-field__input::-moz-placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:active,.v-field__input:focus{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{align-items:flex-start;display:flex;flex:1 0;grid-area:field;position:relative}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{align-items:flex-start;display:flex;padding-top:var(--v-input-padding-top,8px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner,.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner{align-items:flex-start;padding-bottom:var(--v-field-padding-bottom,4px);padding-top:calc(var(--v-field-padding-top, 8px) + var(--v-input-padding-top, 0))}.v-field--focused .v-field__append-inner,.v-field--focused .v-field__prepend-inner{opacity:1}.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon,.v-field__prepend-inner>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--error .v-field__clearable>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;margin-inline:4px;opacity:0;overflow:hidden;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover:hover){.v-field:hover .v-field__clearable{opacity:1}}@media (hover:none){.v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;display:block;margin-inline-end:var(--v-field-padding-end);margin-inline-start:var(--v-field-padding-start);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform;z-index:1}.v-field--variant-plain .v-label.v-field-label,.v-field--variant-underlined .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--error .v-label.v-field-label,.v-field--focused .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale:0.75em;font-size:var(--v-field-label-scale);max-width:100%;visibility:hidden}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:unset}.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{margin:0;top:var(--v-input-padding-top);transform:translateY(-16px)}.v-field--variant-outlined .v-label.v-field-label--floating{margin:0 4px;position:static;transform:translateY(-50%);transform-origin:center}.v-field__outline{--v-field-border-width:1px;--v-field-border-opacity:0.38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover:hover){.v-field:hover .v-field__outline{--v-field-border-opacity:var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity:1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width:2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-color:currentColor;border-style:solid;border-width:0 0 var(--v-field-border-width);content:"";height:100%;left:0;opacity:var(--v-field-border-opacity);position:absolute;top:0;transition:opacity .25s cubic-bezier(.4,0,.2,1);width:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border:solid;border-width:0 0 2px;content:"";height:100%;left:0;position:absolute;top:0;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);width:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__end,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__start{border:0 solid;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{border-bottom-width:var(--v-field-border-width);border-end-end-radius:0;border-end-start-radius:inherit;border-inline-start-width:var(--v-field-border-width);border-start-end-radius:0;border-start-start-radius:inherit;border-top-width:var(--v-field-border-width);flex:0 0 12px}.v-field--rounded.v-field--variant-outlined .v-field__outline__start,[class*=" rounded-"].v-field--variant-outlined .v-field__outline__start,[class^=rounded-].v-field--variant-outlined .v-field__outline__start{flex-basis:calc(var(--v-input-control-height)/2 + 2px)}.v-field--reverse.v-field--variant-outlined .v-field__outline__start{border-end-end-radius:inherit;border-end-start-radius:0;border-inline-end-width:var(--v-field-border-width);border-inline-start-width:0;border-start-end-radius:inherit;border-start-start-radius:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;max-width:calc(100% - 12px);position:relative}.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__notch:before{content:"";height:100%;left:0;opacity:var(--v-field-border-opacity);position:absolute;top:0;transition:opacity .25s cubic-bezier(.4,0,.2,1);width:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{border-width:0 0 var(--v-field-border-width);bottom:0}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{border-bottom-width:var(--v-field-border-width);border-end-end-radius:inherit;border-end-start-radius:0;border-inline-end-width:var(--v-field-border-width);border-start-end-radius:inherit;border-start-start-radius:0;border-top-width:var(--v-field-border-width);flex:1}.v-field--reverse.v-field--variant-outlined .v-field__outline__end{border-end-end-radius:0;border-end-start-radius:inherit;border-inline-end-width:0;border-inline-start-width:var(--v-field-border-width);border-start-end-radius:0;border-start-start-radius:inherit}.v-field__loader{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:0;border-top-right-radius:0;left:0;overflow:hidden;position:absolute;right:0;top:calc(100% - 2px);width:100%}.v-field--variant-outlined .v-field__loader{left:1px;top:calc(100% - 3px);width:calc(100% - 2px)}.v-field__overlay{border-radius:inherit;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover:hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover:hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover:hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__field,.v-field--reverse .v-field__input,.v-field--reverse .v-field__outline{flex-direction:row-reverse}.v-field--reverse .v-field__input,.v-field--reverse input{text-align:end}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{-o-border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}';

export { VField as V };
