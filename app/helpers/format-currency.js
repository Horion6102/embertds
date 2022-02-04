import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, named*/) {
  let [amount, symbole] = params;
  return ${amount} ${symbole};
});
