function forceAthoerTabForLink() {
    // リンク集部分を探す
    const elmLinkCollection = document.getElementsByClassName('ay_e_271d94b8');
    // リンク集の中のAタグを処理する
    Array.prototype.forEach.call(elmLinkCollection[0].getElementsByTagName('a'), x => {
        if (x.textContent.match(/❒/) == null) {
            // 別タブで開くための属性追加
            x.setAttribute('target', '_blank');
            x.setAttribute('rel', 'noopener noreferrer');
            x.textContent += '❒';
        }
    });
}

// SPSのタイトル部分を探してボタン追加
const siteHeader = document.getElementsByClassName('title-53');
const btnLink = siteHeader[0].parentNode.appendChild(document.createElement('button'));
btnLink.textContent = '↗️';
btnLink.addEventListener("click",function(){forceAthoerTabForLink()});
