console.log('背景页加载！')

chrome.webRequest.onBeforeRequest.addListener(function(details){
    console.log('发现请求。');
    console.log('Request_URL::', details.url);
    console.log('Request_Body::', details.requestBody);
    
    var request_body_json = JSON.parse(details.requestBody.formData.json);
    console.log('Custom_Report_Config::', request_body_json)

    if(request_body_json.tab[0]["analytics.FlatTable.config"]){
        var dimensions = [];
        request_body_json.tab[0]["analytics.FlatTable.config"].dimension.forEach(function(i){
            dimensions.push(i.replace('analytics.', 'ga:'))
        });
        var metrics = [];
        request_body_json.tab[0]["analytics.FlatTable.config"].metric.forEach(function(i){
            metrics.push(i.replace('analytics.', 'ga:'))
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
    return today
}