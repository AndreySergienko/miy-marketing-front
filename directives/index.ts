import animation from "~/modules/animation/animation.directive";
import outsideClick from "~/modules/outsideClick/outsideClick.directive";
import auth from "~/modules/permissions/permissions.directive";

import type { Directive } from "@vue/runtime-core";

export default <Directive[]>[animation, outsideClick, auth];
