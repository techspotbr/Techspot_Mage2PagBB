define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component,
              rendererList) {
        'use strict';
        rendererList.push(
            {
                type: 'debitonline',
                component: 'Techspot_PagBB/js/view/pagbb/method-renderer/simple-method'
            }
        );
        return Component.extend({});
    }
);
