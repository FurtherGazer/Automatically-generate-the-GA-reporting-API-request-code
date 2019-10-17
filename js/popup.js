console.log('popup.js 正常加载！')

// 读取数据，第一个参数是指定要读取的key以及设置默认值
chrome.storage.sync.get({request: '无，请进入自定义报告页，点击完成按钮.'}, function(items) {
    console.log(items.request);
    document.querySelector('#RequestText').textContent = items.request;
});

