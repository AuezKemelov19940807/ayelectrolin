import type { RouterOptions } from "vue-router";

export default <RouterOptions>{
  scrollBehavior(to, from, savedPosition) {
    // Если есть сохранённая позиция (кнопки назад/вперед)
    if (savedPosition) return savedPosition;

    // Если есть якорь (#id)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // Иначе прокрутить на верх
    return { top: 0 };
  },
};
