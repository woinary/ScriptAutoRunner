const reTitleCheck = / - Quora$/; // タイトルの末尾が" - Quora"かどうか
const pop_width = 600; // ポップアップウィンドウの幅と高さ
const pop_height = 200

var logPopup = null;

// "回答依頼"の数
const num_request = document.getElementsByName('Request').length

// ウィンドウ名と回答依頼の数でチェック
if (reTitleCheck.exec(document.title) == null || num_request == 0) {
    exit;
}

// ここに来たということは質問ページのはず

// 回答するボタンを探す
const btnAnswer = document.getElementsByName('Answer');

// その親の最後にログ表示ボタンを追加
var btnLog = btnAnswer[0].parentNode.parentNode.parentNode.parentNode.appendChild(document.createElement('button'));
btnLog.textContent = '📋'
btnLog.addEventListener("click", function(){toggleLogPopup()})

// ポップアップの表示切り替え
function toggleLogPopup() {
    if (logPopup == null || logPopup.closed == true) {
        logPopup = logPopupOpen(window);
        window.addEventListener('beforeunload', forceClose);
    } else {
        logPopup.close();
        logPopup = null;
        window.addEventListener('beforeunload', null);
    }
}

// ポップアップの強制クローズ
function forceClose() {
    if (logPopup == null || logPopup.closed == false) {
        logPopup.close();
        logPopup = null;
    }
}

// ポップアップ表示
function logPopupOpen(window) {
    // ポップアップの表示準備
    var log_url = location.href
    log_url = log_url.replace(/(\?.*)$/, '');
    log_url += "/log";
    const wFeatureBase='';

    // 表示位置の調整
    const pop_top = window.screenTop;
    const pop_left = window.screenLeft + window.outerWidth - pop_width + pop_width / 10;
    const wFeature = wFeatureBase + ',top=' + pop_top + ',left=' + pop_left
    + ',width=' + pop_width + ',height=' + pop_height;

    // ポップアップ表示
    return window.open(log_url, 'QuestionLog', wFeature);
}