/* jshint esversion: 6 */
import controller from './controller'
const actions = {
    checkBounds: (x, y) => {
        const habitat = controller.getters.getHabitat();
        if (x < 0 || x > habitat.width)
            return 0;
        if (y < 0 || y > habitat.height)
            return 0;
        return 1;
    }
};
export default {
    actions,
};
