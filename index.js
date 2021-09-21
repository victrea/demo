(function(){
    function init() {
        var txt = '我是智能机器人，快和我聊天吧！'
        var img = creat('img', 'src', './image/robot.jpg')
        var chat = creat('div', 'class', 'chat')
        var text = creat('div', 'class', 'text l')
            chat.innerHTML = txt;
        render([img, chat], text);
        render([text], document.querySelector(".main"))
        initEvent();
    }
    //获取输入文本
    function getText(){
        var input = document.querySelector('input')
            return input.value.trim();
    }
    //获取返回数据
    function getData(text){
    ajax({
        url: 'https://api.hyfarsight.com/test/testRequest/robotChat',
        method: 'POST',
        data: {
        txt: text
            },
        onSuccess: function(data){
                console.log(data.message);
                var txt = data.responseTxt
                var img = creat('img', 'src', './image/robot.jpg')
                var chat = creat('div', 'class', 'chat')
                var text = creat('div', 'class', 'text l')
                    chat.innerHTML = txt;
                render([img, chat], text);
                render([text], document.querySelector(".main"))
                document.querySelector('.main').scrollTo(0, 1000000);
                console.log(data)
        },
        })
    }
    //渲染页面
    function render(children, parent){
        for(var i = 0; i < children.length; i++){
            parent.appendChild(children[i]);
        }
    }
    //创建dom元素
    function creat(domName, atr, val){
        var dom = document.createElement(domName)
            dom.setAttribute(atr, val)
            return dom;
    }
    //绑定事件
    function initEvent(){
        var btn = document.querySelector('button');
        btn.addEventListener('click', actionFuc)
    }
    //提交按钮的事件
    function actionFuc(){
            var txt = getText();
            var img = creat('img', 'src', './image/avatar.jpg')
            var chat = creat('div', 'class', 'chat')
            var text = creat('div', 'class', 'text r')
                chat.innerHTML = txt;
            render([text], document.querySelector(".main"))
            render([chat,img], text)
            getData(txt);
            document.querySelector('input').value = '';
    }
    //enter键盘事件监听
    document.body.onkeypress = function(e){
        if(e.code == 'Enter' || e.code =='NumpadEnter'){
            actionFuc()
        }
    }
    init();
})()