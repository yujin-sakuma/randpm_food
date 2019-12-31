function getcurposi() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {

                var data = position.coords;

                var lat = data.latitude; //経度
                var lng = data.longitude; //緯度

                
            },
            function (error) {
                switch (error.code) {
                    case 1: //PERMISSION_DENIED
                        alert("位置情報の利用が許可されていません");
                       
                        var baseElement = document.getElementById('gps_eror');
                        baseElement.style.display = 'inline-block';
                        break;
                    case 2: //POSITION_UNAVAILABLE
                        alert("現在位置が取得できませんでした");
                        break;
                    case 3: //TIMEOUT
                        alert("タイムアウトになりました");
                        break;
                    default:
                        alert("その他のエラー(エラーコード:" + error.code + ")");
                        break;
                }
            }
        );
    }
}
