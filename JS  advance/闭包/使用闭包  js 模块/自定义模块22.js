(function (w) {
        var msg='my love chang~~~'
        function daxie() {
            console.log('大写'+msg.toUpperCase())
        }
        function xiaoxie() {
            console.log('小写'+msg.toLowerCase())
        }
        w.modul={
            daxie:daxie,
            xiaoxie:xiaoxie
        }
})(window)