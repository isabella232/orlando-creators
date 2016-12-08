const fastOutSlowIn = 'cubic-bezier(0.4, 0, 0.2, 1)';
const linearOutSlowIn = 'cubic-bezier(0, 0, 0.2, 1)';
const fastOutLinearIn = 'cubic-bezier(0.4, 0, 1, 1)';

export default {
  acceleration: fastOutLinearIn,
  deceleration: linearOutSlowIn,
  default: fastOutSlowIn,
  fastOutLinearIn,
  fastOutSlowIn,
  linearOutSlowIn,
  sharp: fastOutLinearIn,
  standard: fastOutSlowIn,
};
