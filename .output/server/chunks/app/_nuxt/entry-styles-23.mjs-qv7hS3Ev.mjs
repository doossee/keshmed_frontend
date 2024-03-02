const VChip = ".v-chip{align-items:center;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-radius:9999px;border-style:solid;border-width:0;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;vertical-align:middle;white-space:nowrap}.v-chip.v-chip--size-x-small{--v-chip-size:0.625rem;--v-chip-height:20px;font-size:.625rem;padding:0 8px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height:14px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height:20px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-end:4px;margin-inline-start:-5.6px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-8px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-5.6px;margin-inline-start:4px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-8px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-x-small .v-chip__filter,.v-chip.v-chip--size-x-small .v-icon--start{margin-inline-end:4px;margin-inline-start:-4px}.v-chip.v-chip--size-x-small .v-chip__close,.v-chip.v-chip--size-x-small .v-icon--end{margin-inline-end:-4px;margin-inline-start:4px}.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close,.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close{margin-inline-start:8px}.v-chip.v-chip--size-small{--v-chip-size:0.75rem;--v-chip-height:26px;font-size:.75rem;padding:0 10px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height:20px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height:26px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-end:5px;margin-inline-start:-7px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-10px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-7px;margin-inline-start:5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-10px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:15px}.v-chip.v-chip--size-small .v-chip__filter,.v-chip.v-chip--size-small .v-icon--start{margin-inline-end:5px;margin-inline-start:-5px}.v-chip.v-chip--size-small .v-chip__close,.v-chip.v-chip--size-small .v-icon--end{margin-inline-end:-5px;margin-inline-start:5px}.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close,.v-chip.v-chip--size-small .v-icon--end+.v-chip__close{margin-inline-start:10px}.v-chip.v-chip--size-default{--v-chip-size:0.875rem;--v-chip-height:32px;font-size:.875rem;padding:0 12px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height:26px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height:32px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-end:6px;margin-inline-start:-8.4px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-12px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-8.4px;margin-inline-start:6px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-12px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:18px}.v-chip.v-chip--size-default .v-chip__filter,.v-chip.v-chip--size-default .v-icon--start{margin-inline-end:6px;margin-inline-start:-6px}.v-chip.v-chip--size-default .v-chip__close,.v-chip.v-chip--size-default .v-icon--end{margin-inline-end:-6px;margin-inline-start:6px}.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close,.v-chip.v-chip--size-default .v-icon--end+.v-chip__close{margin-inline-start:12px}.v-chip.v-chip--size-large{--v-chip-size:1rem;--v-chip-height:38px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height:32px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height:38px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-end:7px;margin-inline-start:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-9.8px;margin-inline-start:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-chip__filter,.v-chip.v-chip--size-large .v-icon--start{margin-inline-end:7px;margin-inline-start:-7px}.v-chip.v-chip--size-large .v-chip__close,.v-chip.v-chip--size-large .v-icon--end{margin-inline-end:-7px;margin-inline-start:7px}.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close,.v-chip.v-chip--size-large .v-icon--end+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size:1.125rem;--v-chip-height:44px;font-size:1.125rem;padding:0 17px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height:38px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height:44px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-end:8.5px;margin-inline-start:-11.9px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-17px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-11.9px;margin-inline-start:8.5px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-17px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:25.5px}.v-chip.v-chip--size-x-large .v-chip__filter,.v-chip.v-chip--size-x-large .v-icon--start{margin-inline-end:8.5px;margin-inline-start:-8.5px}.v-chip.v-chip--size-x-large .v-chip__close,.v-chip.v-chip--size-x-large .v-icon--end{margin-inline-end:-8.5px;margin-inline-start:8.5px}.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close,.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close{margin-inline-start:17px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height))}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) - 8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) - 12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity)*var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity)*var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}}.v-chip--variant-outlined,.v-chip--variant-plain,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 3px 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 0 0 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-chip--variant-outlined{border:thin solid}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;border-radius:inherit;bottom:0;left:0;opacity:var(--v-activated-opacity);pointer-events:none;position:absolute;right:0;top:0}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__append,.v-chip__close,.v-chip__filter,.v-chip__prepend{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{background-color:currentColor;border-radius:inherit;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .2s ease-in-out;width:100%}.v-chip--disabled{opacity:.3;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--label{border-radius:4px}";

export { VChip as V };
