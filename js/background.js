console.log('背景页加载！')

function _hashCoreReporting(i){
    var _hashDict = {
        'analytics.visits' : 'ga:sessions', 
        'analytics.avgSessionTime' : 'ga:avgSessionDuration', 
        'analytics.totalVisitors' : 'ga:users',
        'analytics.avgPageviews' : 'ga:pageviewsPerSession',
        'analytics.customMetric' : 'ga:metric',
        "analytics.productRevenuePerProducts" : 'ga:revenuePerItem',
        'analytics.productsPerProductPurchases' : 'ga:itemsPerPurchase',
        "analytics.totalPublisherImpressionsPerVisit" : 'ga:totalPublisherImpressionsPerSession',
        "analytics.totalPublisherRevenuePerThousandVisits" : 'ga:totalPublisherRevenuePer1000Sessions',
        "analytics.totalPublisherViewableImpressionPercent" : 'ga:totalPublisherViewableImpressionsPercent',
        "analytics.totalPublisherPageImpressions" : 'ga:totalPublisherMonetizedPageviews', // ?
        "analytics.countOfVisitsToATransaction" : 'ga:sessionsToTransaction',
        "analytics.socialInteractionsPerVisit" : "ga:socialInteractionsPerSession", 
        "analytics.visitsWithEvent" : "ga:sessionsWithEvent", 
        "analytics.searches" : "ga:searchExits", // ?
        "analytics.siteSearchGoalValuePerSearch" : "ga:goalValueAllPerSearch",
        "analytics.eventAvgValue" : "ga:avgEventValue", 
        "analytics.depthPerSearch" : "ga:avgSearchDepth",
        "analytics.timeOnAppview" : "ga:timeOnScreen",
        "analytics.searchVisits" : "ga:searchSessions",
        "analytics.percentVisitsWithSearch" : "ga:percentSessionsWithSearch", 
        "analytics.eventsPerVisit" : "ga:eventsPerSessionWithEvent",
        "analytics.durationPerSearch" : "ga:searchDuration",
        "analytics.searchDuration" : "ga:avgSearchDuration", // ?
        "analytics.siteSearchGoalConversionRate" : "ga:searchGoalConversionRateAll", // ?
        "analytics.uniqueEventsTrue" : "ga:uniqueEvents",
        "analytics.timeOnSite" : "ga:sessionDuration",
        "analytics.pageviewsPerSearch" : "ga:searchResultViews", 
        "analytics.avgAppviews" : "ga:screenviewsPerSession",
        "analytics.averageNumberOfVisitsPerVisitor" : "ga:sessionsPerUser", 
        "analytics.avgSessionTime" : "ga:avgSessionDuration", 
        "analytics.avgAppviewDuration" : "ga:avgScreenviewDuration", 
        "analytics.avgPageDuration" : "ga:avgTimeOnPage", 
        "analytics.appviews" : "ga:screenviews", 
        "analytics.percentSearchExits" : "ga:searchExitRate", 
        "analytics.adwordsCriteriaType" : "ga:adKeywordMatchType",
        "analytics.percentNewVisits" : "ga:percentNewSessions", 
        "analytics.newVisits" : "ga:newUsers",
        "analytics.totalVisitors" : "ga:users", 
        "analytics.adxRevenuePerThousandVisits" : "ga:adxRevenuePer1000Sessions", 
        "analytics.adxImpressionsPerVisit" : "ga:adxImpressionsPerSession", 
        "analytics.adxPageImpressions" : "ga:adxMonetizedPageviews", 
        "analytics.adxViewableImpressionPercent" : "ga:adxViewableImpressionsPercent",
        "analytics.query" : "ga:adMatchedQuery",
        "analytics.contentDomain" : "ga:adPlacementDomain", // ?
        "analytics.contentUrl" : "ga:adPlacementUrl",  // ?
        "analytics.contentPlacementType" : "ga:adTargetingOption", // 展示位置类型
        "analytics.displayUrl" : "ga:adDisplayUrl", 
        "analytics.matchType" : "ga:adMatchType", 
        "analytics.adwordsExternalCustomerID" : "ga:adwordsCustomerID", 
        // "analytics.adwordsExternalCustomerName" : "ga: ",  // Adwords 账号
        "analytics.trafficChannel" : "ga:channelGrouping", // 默认渠道分组
        // "analytics.trafficType" // 流量类型
        "analytics.socialTarget" : "ga:socialInteractionTarget", 
        "analytics.socialAction" : "ga:socialInteractionAction", 
        // "analytics.directSession" // 直接会话
        "analytics.originatingSocialNetwork" : "ga:socialInteractionNetwork", 
        "analytics.socialNetworkAction" : "ga:socialInteractionNetworkAction",
        // "analytics.socialNetworkActionVisit" // 社交网络和操作（会话）
        "analytics.gwoCombinationId" : "ga:experimentId", 
        "analytics.appviewDepth" : "ga:screenDepth", 
        "analytics.contentDescription" : "ga:screenName",
        "analytics.gwoExperimentId" : "ga:experimentId", 
        "analytics.gwoExperimentName" : "ga:experimentName",
        "analytics.exitContentDescription" : "ga:exitScreenName",
        "analytics.landingContentDescription" : "ga:landingScreenName", 
        // "analytics.dma","analytics.dmaId"
        "analytics.countryId" : "ga:countryIsoCode", 
        "analytics.visitDuration" : "ga:sessionDurationBucket",
        "analytics.countOfVisits" : "ga:sessionCount",
        "analytics.daysSinceLastVisit" : "ga:daysSinceLastSession", 
        "analytics.sourcePropertyId" : "ga:sourcePropertyTrackingId", 
        "analytics.sourcePropertyName" : "ga:sourcePropertyDisplayName", 
        "analytics.age" : "ga:userAgeBracket",
        "analytics.interest" : "ga:interestOtherCategory", // ? 
        // "analytics.regionIsoCode" 区域ISO代码
        // analytics.latitude analytics.brandingInterest analytics.gender
        "analytics.visitorBucket" : "ga:userBucket",
        "analytics.visitorType" : "ga:userType",
        // analytics.inmarketInterest
    }
    var _specialHashDict = {
        "analytics.goalXXCompletions" : "ga:goalXXCompletions",
        "analytics.abandonedFunnelsRate1" : "ga:goalXXAbandons", 
        "analytics.siteSearchGoalConversionRate1" : "ga:searchGoalXXConversionRate", 
        // "analytics.previousPageGroup1" : ,
        // "analytics.pageGroup1" : "ga:contentGroupXX",
        // "analytics.landingPageGroup1" 着陆页组 1（目标内容组）
        "analytics.customDimension19" : "ga:dimensionXX", 
        "analytics.customMetric1" : "ga:metricXX"
    }
    if( i in _hashDict){
        return _hashDict[i]
    }else{ // 这块还需要考虑到自定义维度、指标的问题
        // 如果 i 属于 _specialHashDict 中的一类
        if( /^analytics.custom\w*[0-9]+/.test(i)){
            i = i.replace('analytics.custom', 'ga:')
            i = i.replace(i[3], i[3].toLowerCase())
            return i.replace('analytics.custom', 'ga:')
        }
        return i.replace('analytics.', 'ga:')
    }
}

// 不确定
// "analytics.clickSocialAnnotationType" 社交注释类型
// 

chrome.webRequest.onBeforeRequest.addListener(function(details){
    console.log('发现请求。');
    console.log('Request_URL::', details.url);
    console.log('Request_Body::', details.requestBody);
    
    var request_body_json = JSON.parse(details.requestBody.formData.json);
    console.log('Custom_Report_Config::', request_body_json)

    if(request_body_json.tab[0]["analytics.FlatTable.config"]){
        var dimensions = [];
        request_body_json.tab[0]["analytics.FlatTable.config"].dimension.forEach(function(i){
            dimensions.push(_hashCoreReporting(i))
        });
        var metrics = [];
        request_body_json.tab[0]["analytics.FlatTable.config"].metric.forEach(function(i){
            metrics.push(_hashCoreReporting(i))
        })
    }else{
        console.log('请求无效。')
    }


    if (request_body_json.context.dimensionFilter){
        var dimensionFilter = request_body_json.context.dimensionFilter;

    }

    if( dimensions && metrics ){
        // 构造请求
        var request_body = {}
        request_body.reportRequests = []
        request_body.reportRequests.push({})
        request_body.reportRequests[0].dateRanges = []
        request_body.reportRequests[0].dateRanges.push({})
        request_body.reportRequests[0].dateRanges[0].endDate = getDate()
        request_body.reportRequests[0].dateRanges[0].startDate = getDate()
        request_body.reportRequests[0].viewId = '<请替换为您的视图ID>'
        // 请求维度
        request_body.reportRequests[0].dimensions = []
        dimensions.forEach(function(i){
            request_body.reportRequests[0].dimensions.push({
                'name':i
            })
        })
        // 请求指标
        request_body.reportRequests[0].metrics = []
        metrics.forEach(function(i){
            request_body.reportRequests[0].metrics.push({
                'expression':i
            })
        })

        // 请求过滤器
        if ( dimensionFilter ){
            request_body.reportRequests[0].dimensionFilterClauses = [];
            request_body.reportRequests[0].dimensionFilterClauses.push({
                "filters": []
            })
            dimensionFilter.forEach(function(i){
                request_body.reportRequests[0].dimensionFilterClauses[0].filters.push({
                    "dimensionName": i.dimension.replace('analytics.', 'ga:'),
                    "expressions": [
                        i.expression,
                    ],
                    "operator": i.matchType,
                    "not": i.complement, // 如果为True, 则匹配的维度值将从报告中排除，默认值为false;
                })
            })

        }
    }

    request_body_str = JSON.stringify(request_body)

    console.log(request_body_str)

    // 保存数据
    chrome.storage.sync.set({'request': request_body_str}, function(){
        console.log('请求保存成功！');
    });


}, {urls: ['https://analytics.google.com/analytics/web/submitForm?*&sid=saveCustomReport*']}
 , ['requestBody']
)



function getDate(){
    var today = new Date().toLocaleDateString().split('/').join('-');
    var format_today = today.split('-');
    var return_today = []
    for(var i in format_today){
        if( format_today[i].length == 1){
            return_today.push('0'+format_today[i])
        }else{
            return_today.push(format_today[i])
        }
    }
    return return_today.join('-')
}