// CSDN iOS 广告去除
// 兼容：Surge / Loon / Quantumult X 的 http-response 脚本

function safeDone(obj) {
  $done({ body: JSON.stringify(obj) });
}

function disablePlacement(p) {
  if (!p || typeof p !== 'object') return p;
  p.showThirdAd = false;
  p.showAdStatus = false;
  p.status = false;
  p.imageUrl = '';
  p.imgUrl = '';
  p.adUrl = '';
  p.clickUrl = '';
  p.closeAdClickUrl = '';
  p.popuMonitor = '';
  p.imptracker = [];
  p.clktrackers = [];
  p.con = '';
  p.expiredTime = 0;
  return p;
}

try {
  const url = $request.url;
  const body = $response.body || '{}';
  const obj = JSON.parse(body);

  if (url.includes('/silkroad-api/api/v2/assemble/list/pub/channel/app_open_screen_ad')) {
    obj.code = 200;
    obj.message = obj.message || 'success';
    obj.data = {
      adType: '',
      showThirdAd: false,
      imageUrl: '',
      closeAdClickUrl: '',
      priceCompetitionMode: '',
      adUrl: '',
      id: '461',
      imptracker: [],
      clktrackers: [],
      expiredTime: 0
    };
    return safeDone(obj);
  }

  if (url.includes('/silkroad-api/api/v2/assemble/list/pub/channel/app_ad_v1')) {
    obj.code = 200;
    obj.message = obj.message || 'success';
    const data = obj.data && typeof obj.data === 'object' ? obj.data : {};
    for (const key in data) {
      data[key] = disablePlacement(data[key]);
    }
    obj.data = data;
    return safeDone(obj);
  }

  if (url.includes('/silkroad-api/api/v2/assemble/list/pub/channel/app_no_ads_user')) {
    obj.code = 200;
    obj.message = obj.message || 'success';
    obj.data = { isNoAdsUser: true };
    return safeDone(obj);
  }

  if (url.includes('/community/v1/profile/app/get-ios-config')) {
    const data = obj.data && typeof obj.data === 'object' ? obj.data : {};
    if (data.tradPlusConfig && typeof data.tradPlusConfig === 'object') {
      data.tradPlusConfig.isBlogRecommendShow = false;
      data.tradPlusConfig.isFeedShow = false;
      data.tradPlusConfig.isLaunchShow = false;
      data.tradPlusConfig.isBlogBottomShow = false;
      data.tradPlusConfig.isForceCSJ = false;
    }
    if (data.hotStartAd && typeof data.hotStartAd === 'object') {
      data.hotStartAd.fetchDelay = 0;
      data.hotStartAd.tpFetchDelay = 0;
      data.hotStartAd.intervalTime = 31536000;
      data.hotStartAd.tpIntervalTime = 31536000;
    }
    obj.data = data;
    return safeDone(obj);
  }

  if (url.includes('/community/v1/profile/app/version/config')) {
    const data = obj.data && typeof obj.data === 'object' ? obj.data : {};
    if (data.homepage_pop && typeof data.homepage_pop === 'object') {
      data.homepage_pop.status = 0;
      data.homepage_pop.list = [];
    }
    if (data.myAd && typeof data.myAd === 'object') {
      data.myAd.status = 0;
      data.myAd.list = [];
    }
    obj.data = data;
    return safeDone(obj);
  }

  $done({ body });
} catch (e) {
  $done({});
}
