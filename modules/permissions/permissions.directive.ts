import {useCreateDirective} from "~/modules/directives/useCreateDirective";
import type {TPermissionsScopesKeys} from "~/modules/permissions/types";
import {useCheckScopes} from "~/modules/permissions/useCheckScopes";


export default useCreateDirective<HTMLElement, TPermissionsScopesKeys[]>({
  name: "auth",
  directive: {
    /** Требует дорабкти, лучше использовать v-if напрямую **/
    created(el, binding, vnode) {
      const isValid = useCheckScopes(binding.value)
      if (isValid) return;
      vnode.el.parentElement.removeChild(vnode.el)
    },
  },
});
