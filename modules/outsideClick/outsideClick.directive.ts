import { useCreateDirective } from "~/modules/directives/useCreateDirective";

export default useCreateDirective({
  name: "outside-click",
  directive: {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (event: PointerEvent) => {
        if (el === event.target || el.contains(event.target)) return;
        binding.value(event);
      };
      document.addEventListener("pointerup", el.clickOutsideEvent);
    },
    unmounted(el) {
      document.removeEventListener("pointerup", el.clickOutsideEvent);
    },
  },
});
