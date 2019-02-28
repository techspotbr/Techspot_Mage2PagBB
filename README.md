# Techspot - PagBB - Magento 2 Module

The Tech Spot Mage 2 PagBB Module enable receive paymens by online transfer from Bank Of Brazil - O Módulo Tech Spot Mage2 PagBB habilita sua loja Magento 2 a receber pagamentos via Transferência Online do Banco do Brasil


### Install

Installe via composer:

```
cd <your Magento install dir>
composer require techspot/pagbb
php bin/magento module:enable --clear-static-content Techspot_PagBB
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy //ou php bin/magento setup:static-content:deploy pt_BR
```

## Authors

* **Bruno Monteiro** - *Initial work* - [TechSpot](https://github.com/techspotbr)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Donation
If this project help you reduce time to develop, you can give me a cup of coffee :) 
Se este projeto te ajudou a reduzir o tempo de desenvolvimento, doe-nos uma xícara de café :()
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=techspot%40techspot%2ecom%2ebr&lc=BR&item_name=TechSpot&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)