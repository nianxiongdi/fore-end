
module.exports = {
    webviewPage: ['pages/webview-page/index'],
    publicPage: [
      'homepage/pages/sug-index',
      'home/pages/citylist',
      /^\/?login\/pages\/login\/(captcha|login-(phone|wechat)|logout-reminder|protocol|pwd-login|region|reset-password|set-password|sms-login)/,
      /^\/?(home|pay|suggest|transfer-station)\/pages\/index/,
      'login/pages/login/phone-prompt',
      'mp-authorize-webview/pages/webview-page/index',
      'webx-mp-next/transfer-station/index', // todo 放进webx
      'biz-grid/pages/biz-grid',
      /^\/?cashier-page\/pages\/(index|webview)/,
      /^\/?cashier-ui\/pages\/cashier-(cards|charge|coins|coupons|webview)\/index/
    ],
    productPage: {
      // 首页成为了组件产品集合
      // 'ut-aggre-homepage': ['home/pages/index'],
      // 8.0 大出行
      'didi-combined-travel': [
        /^\/?(estimate|composition)\/pages\/travel/
      ],
      // @new 出行主流程
      'didi-app': [
        'composition/pages/index',
        'estimate/pages/index',
        'estimate/pages/new-estimate',
        // 'estimate/pages/composition-subway',
        // 'estimate/pages/discuss',
        /^\/?minor-estimate\//,
        /^\/?gulfstream\//,
        /^\/?home\/pages\/(accompany|dache)/,
        'homepage/pages/index',
        'homepage/pages/invite-index',
        'homepage/pages/sug-suggest',
        'im/pages/imchat/imchat',
        // 枚举
        /^\/?passenger\/(anycar-intercept|fee-confirm-v2|health-code-intercept|intercept-epidemic-hk|non-stop-v1|luxury-drain-v3|poundage-pop-hk|premium-drain-v2|record-authorize|record-authorize-reminder|coach-autonym-intercept|temperature-intercept|epidemic-intercept|third-protocol|pages)\/index/,
        'passenger/third-protocol/webview',
        'chat-group-list/pages/index',
        'espay/pages/index',
        'estimate/pages/bargain',
        'homepage/pages/empty',
        'onsale-carpool-diversion/pages/index',
        'pay-coupon/pages/coupondetail/index',
        'scan-code-pay/pages/index',
        'travel-together-share/pages/index',
        'bargain/pages/index'
      ],
      // 亲情付
      'familypay-app': [
        /^\/?family-pay\//
      ],
      // @new 个人中心
      'ut-self-center': [
        'map/view/commonAddressView',
        'map/view/setComAddressView',
        /^\/?sidebar\/pages\//,
        'account-delete/pages/account-delete'
      ],
      // 钱包
      'wallet-app': [
        'pages/wallet/change',
        'pages/wallet/checkPay',
        /^\/?wallet\//
      ],
      // 安全中心
      'safety-app': [
        'guard/pages/safeDetail/index',
        'safety/pages/safety-center/index',
        /^\/?safety-center\/pages\//
      ],
      // 发票
      'invoice-app': [
        /^\/?invoice\//
      ],
      // 粒粒橙
      'llc-app': [
        /^\/?llc\//
      ],
      // 青桔
      'bike-app': [
        // todo
        /^\/?qingju\//,
        'pages/bike_home_intercept/bike_home_intercept',
        /^\/?pages(\/(blank|common_pay|init|pay))\1/,
        /^\/?pages\/secondLevel(\/(no_secret_pay|my))\1/,
        'realname-ride/pages/index',
        'subpackages/commonProcess/blank/blank',
        'subpackages/marketingProcess/common_share/common_share',
        'subpackages/paymentProcess/common_pay/common_pay',
        /^\/?npm\/_didi\/qingju-user-invite\/src\/pages\/(qjInvite|sepPromotion)(\/(home|inviteFace|invited))?\/index/,
  
      ],
      // @new 代驾
      'daijia-app': [
        /^\/?daijiaCML\//
      ],
      // 导航
      // @new
      'navigate-app': [
        /^\/?dolphin-mp\//
      ],
      // 公交
      // @new
      'transit-app': [
        /^\/?transit\//
      ],
      // 货运
      'freight-app': [
        /^\/?freight\//,
        /^\/?freight-order\//
      ],
      // 加油
      // @new
      'refuel-app': [
        /^\/?oil\//
      ],
      'welfare-center': [
        'ut-welfare-center/views/index/index',
        'welfare-center/views/homepage/index'
      ],
      'ut-discover': [
        /^\/?discovery\/views\/(index|home)\/index/
      ],
      // 'ut-walk-bonus': [
      //   'walk-bonus/views/index/index',
      //   'walk-bonus/views/challenge/index',
      //   'walk-bonus/views/index/skin'
      // ],
      cpc: [
        /^\/?wyc-cpc\/views\/(coupon|homepage|profit)\/index/
      ],
      support: [
        /^\/?webx-support\/views\/(index|coupons|history)\/index/
      ],
      'wyc-surprise-present': [
        'wyc-surprise-present/views/index/index'
      ],
      'wyc-bonus': [
        'wyc-bonus/views/index/index'
      ],
      'wyc-community-fission': [
        'wyc-community-fission/views/index/index'
      ],
      'ut-common-support': [
        /^\/?ut-common-support\/views\/(index|history|qr-code)\/index/
      ],
      'wyc-student-cpc': [
        'wyc-student-cpc/views/index/index'
      ],
      'fi-cpc-v-two': [
        'fi-cpc/views/index/index',
        'fi-cpc/views/record/index'
      ],
      'freight-cpc': [
        /^\/?freight-cpc\/views\/(index|rewardDetail)\/index/
      ],
      'ut-coupon-center': [
        /^\/?ut-coupon-center\/views\/(index|history)\/index/
      ],
      'ut-general-support': [
        'ut-coupon-center/views/assistance/index'
      ],
      'ut-refuel-cpc': [
        /^\/?ut-energy-ctc\/views\/(index|rewardDetail)\/index/
      ],
      'ut-cpc-v-two': [
        /^\/?ut-ctc\/views\/(index|record|poster)\/index/
      ],
      'ut-daijia-cpc-v-two': [
        'ut-daijia-cpc/views/index/index'
      ],
      'support-union': [
        /^\/?wyc-passenger-help\/views\/(index|rewardDetail)\/index/
      ],
      'ut-shake': [
        /^\/?ut-shake\/views\/(invitee|command)\/index/
      ],
      'ut-hitch-xpd': [
        'ut-hitch-xpd/views/index/index'
      ],
      'wyc-567-support': [
        'didi-567-new/views/index/index'
      ],
      'ut-carowner-service': [
        /^\/?carowner-service\/views\/(index|inquire)\/index/
      ],
      'ut-lottery-tool': [
        /^\/?ut-lottery-tool\/views\/(index|lottery)\/index/
      ],
      'ut-coupon-lottery': [
        'ut-lottery/views/index/index'
      ],
      'ut-phonebill-cpc': [
        /^\/?ut-phonebill-cpc\/views\/(index|poster|reward)\/index/
      ],
      'wyc-recall-landing': [
        'wyc-recall-landing/views/index/index'
      ],
      'wyc-suprise-red-packet': [
        'wyc-suprise-red-packet/views/index/index'
      ],
      'ut-dunion': [
        /^\/?ut-dunion\/views\/(hy|cz|dj|wyc)\/index/
      ],
      // 'ut-energy-cpc': [
      //   'energy-ctc/views/index/index',
      //   'energy-ctc/views/poster/index'
      // ],
      'wyc-cpc-v-three': [
        'wyc-cpc-v-three/views/index/index'
      ],
      'ut-taxi-cpc': [
        'ut-multi-category-cpc/views/index/index'
      ],
      'ut-poi-landmark-ticket': [
        /^\/?poi-landmark-ticket\/views\/(details|my-order)\/index/
      ],
      'ut-poi-evaluation': [
        'evaluation/views/order-evaluation/index'
      ]
    }
  }
  