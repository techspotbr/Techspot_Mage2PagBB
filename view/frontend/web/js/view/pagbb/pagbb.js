/**
 * The Tech Spot PagBB Module enable make online bank transfer to Bank of Brazil
 * receive the Payment response, create and capture invoice in Magento 2
 * Copyright (C) 2019  Tech Spot www.techspot.com.br
 * 
 * This file is part of Techspot/MultiLevel.
 * 
 * Techspot/PagBB is  a Not For Resale (NFR) software.
 * 
 * You should have received a copy of the Not For Resale (NFR) License
 * along with this program.
 */
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
                type: 'pagbb',
                component: 'Techspot_PagBB/js/view/pagbb/method-renderer/pagbb-method'
            }
        );
        return Component.extend({});
    }
);
