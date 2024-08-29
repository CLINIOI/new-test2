function buyXpiksPro() {
    const affiliate = GetAffiliate();
    Paddle.Checkout.open({
        product: 591876,
        passthrough: affiliate
    });
}

function buyXpiksProPlusYearly() {
    const affiliate = GetAffiliate();
    Paddle.Checkout.open({
        product: 587119,
        passthrough: affiliate
    });
}

function buyXpiksProPlusMonthly() {
    const affiliate = GetAffiliate();
    Paddle.Checkout.open({
        product: 587118,
        passthrough: affiliate
    });
}

var pricing = {
    'monthly': 13,
    'yearly': 99,
    'currency': '€'
};

function switchMonthlyYearly() {
    let pricingCheckbox = document.getElementById("pricingCheckbox");
    let isMonthly = pricingCheckbox.checked;
    if (isMonthly) {
        // here we switch to Yearly
        $('#buy-xpiks-pro-plus').click(buyXpiksProPlusYearly);
        $('#proplus-price-value').html(pricing['yearly']);
        $('#proplus-price-currency').html(pricing['currency']);
        $('#included-cloud-upload').html("48 GB");
        $('#billingPeriod').html("yearly");
        $('#yearlyDiscountFeature').removeClass('hidden-feature');
        $('#renewalFeature').removeClass('hidden-feature');
        $('#pricingTooltip').addClass('active');
        $('#yearlyText').addClass('active');
        $('#monthlyText').removeClass('active');
    } else {
        // here we switch to Monthly
        $('#buy-xpiks-pro-plus').click(buyXpiksProPlusMonthly);
        $('#proplus-price-value').html(pricing['monthly']);
        $('#proplus-price-currency').html(pricing['currency']);
        $('#included-cloud-upload').html("4 GB");
        $('#billingPeriod').html("monthly");
        $('#yearlyDiscountFeature').addClass('hidden-feature');
        $('#renewalFeature').addClass('hidden-feature');
        $('#pricingTooltip').removeClass('active');
        $('#yearlyText').removeClass('active');
        $('#monthlyText').addClass('active');
    }
}

function updateMonthlyYearly() {
    let pricingCheckbox = document.getElementById("pricingCheckbox");
    if (!pricingCheckbox) {
        console.warn('Cannot find pricing checkbox in the document');
        return;
    }
    let isYearly = pricingCheckbox.checked;
    if (isYearly) {
        $('#proplus-price-value').html(pricing['yearly']);
        $('#proplus-price-currency').html(pricing['currency']);
    } else {
        $('#proplus-price-value').html(pricing['monthly']);
        $('#proplus-price-currency').html(pricing['currency']);
    }
}

var currency_symbols = {
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'CRC': '₡', // Costa Rican Colón
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
    'IDR': 'Rp', // Indonesian Rupiah
    'TRY': '₺',  // Turkish Lira
    'SEK': 'kr', // Swedish Krona
    'UAH': '₴', // Ukrainian Hryvnia
    'CHF': 'Fr', // Swiss frank
    'CZK': 'Kč', // Czech koruna
};

function setOneTimePrice(htmlId, currency, value) {
    if (currency_symbols[currency]!==undefined) {
        $(htmlId+'-value').html(value.toString());
        $(htmlId+'-currency').html(currency_symbols[currency]);
    }
}

function setSubscriptionPrice(key, currency, value) {
    if (currency_symbols[currency]!==undefined) {
        pricing[key] = value.toString();
        pricing['currency'] = currency_symbols[currency];
        updateMonthlyYearly();
    }
}

Paddle.Setup({
    vendor: 103304,
    // https://developer.paddle.com/paddlejs/events/overview
    eventCallback: function(data) {
        if (data.status == "completed") {
            let props = {
                currency: data.currency_code
            };

            if (data.items && data.items.length) {
                props.product = data.items[0].product.name;
            }

            window.plausible("Purchase" /*goal name*/, {props: props});
        }
    }
});

$(document).ready(function() {
    $('#buy-xpiks-pro').click(buyXpiksPro);
    $('#buy-xpiks-pro-plus').click(buyXpiksProPlusYearly);
    // correct fix is to use window.onload, but it's not critical here
    updateMonthlyYearly();

    $.ajax({
        url: 'https://checkout.paddle.com/api/2.0/prices',
        dataType: 'jsonp',
        data: {
          product_ids: "591876,596244,587118,587119"
        },
        success: function (data) {
            if (!data.success) { return; }
            const size = data.response.products.length;
            for (let i = 0; i < size; i++) {
                const product = data.response.products[i];
                switch (product.product_id) {
                    case 591876: // pro
                        setOneTimePrice('#pro-price', product.currency, product.price.gross);
                        setOneTimePrice('#free-price', product.currency, 0);
                        break;
                    case 596244: // renew
                        setOneTimePrice('#renew-price', product.currency, product.price.gross);
                        break;
                    case 587118: // monthly
                        setSubscriptionPrice('monthly', product.currency, product.price.gross);
                        break;
                    case 587119: // yearly
                        setSubscriptionPrice('yearly', product.currency, product.price.gross);
                        break;
                }
            }
        }
      });
});