/*
 * @Author: mfxhb
 * @Date: 2022-12-01 09:24:39
 * @LastEditTime: 2022-12-01 09:43:14
 * @Description:
 */
import "@dcloudio/types/uni-app";

import { $u } from "./uview.u";

declare global {
  interface Uni {
    $u: $u;
  }
}
