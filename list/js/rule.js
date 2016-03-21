var ruleLayer = cc.Layer.extend({
    ctor:function(n){
        this._super(n);

        this.n = n;

        var layer = new cc.LayerColor(cc.color(20,20,20,200));//新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);

        var ruleBg = new cc.Sprite(res.ruleBg);
        ruleBg.x = size.width/2;
        ruleBg.y = size.height/2;
        this.addChild(ruleBg);

        var clsoeBtnItem = new cc.MenuItemImage(res.clsoeBtn,res.clsoeBtn,this.clsoeBtnCall,this);
        var clsoeBtnMenu = new cc.Menu(clsoeBtnItem);
        clsoeBtnMenu.x = size.width - 80;
        clsoeBtnMenu.y = size.height - 80;
        this.addChild(clsoeBtnMenu);

        this.init();
    },
    init:function(){
        var layer = new cc.LayerColor(cc.color(20,20,20,0));    //新建Layer层，将是scrollView的父节点
        layer.x = cc.winSize.width/4 * 0;
        layer.y = cc.winSize.height/4 * 0;
        this.addChild(layer);  

        // Create the scrollView
        var scrollView = new ccui.ScrollView();        //创建scrollView对象
        scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL); //设置滑动方向，这里设置的是垂直滑动
        scrollView.setTouchEnabled(true);           //设置是否可以滑动，此处是
        scrollView.setContentSize(cc.size(450, 670));     //设置scrollView对象里显示内容的可见区域大小
     
        scrollView.x = (layer.width - 480)/2 + (480 - scrollView.width)/2;   //设置scrollView坐标位置
        scrollView.y = (layer.height - 400)/2 + (400 - scrollView.height)/2 - 100; //scrollView.height = 350
        layer.addChild(scrollView);   //添加到父节点layer
            //此处给scrollView对象添加事件监听，滑动时回调参数函数
        scrollView.addEventListener(function () {
            // console.log("move.....");
        });

        //设置scrollView整体内容区域，这里是根据json文件的内容多少来定的
        // scrollView.setInnerContainerSize(cc.size(300, dataArr.length>10?350+(dataArr.length-10)*20:350));

        scrollView.setInnerContainerSize(cc.size(300, (200 + 590)));

        var list1 = new cc.Sprite(res.list1);
        list1.x = list1.getContentSize().width/2 + 10;
        list1.y = 770;
        scrollView.addChild(list1);

        var list2 = new cc.Sprite(res.list2);
        list2.x = list2.getContentSize().width/2 + 10;
        list2.y = 510;
        scrollView.addChild(list2);

        var list3 = new cc.Sprite(res.list3);
        list3.x = list3.getContentSize().width/2 + 10;
        list3.y = 240;
        scrollView.addChild(list3);

        var list4 = new cc.Sprite(res.list4);
        list4.x = list4.getContentSize().width/2 + 10;
        list4.y = 140;
        scrollView.addChild(list4);

        var arr = [
                    '1.对啦开始的撒旦放声大哭山快递发答',
                    '2.大东山街道goad地方立刻就收到了开发是看了打飞机撒旦看',
                    '3.到水电费立刻登陆来的富士岛科技打飞机卡萨丁三等奖点击'
                    ];
        
        // setDimensions(w,h)
        for(var i=0;i<arr.length;i++){
            if(arr[i].length > 19){
                hNum = 2;
            }else{
                hNum = 1;
            }
            var text = new cc.LabelTTF(arr[i],"Microsoft YaHei",24,cc.size(440,30 * hNum),cc.TEXT_ALIGNMENT_LEFT);
            text.fillStyle = new cc.color(1,1,1);
            // text.x = 320;
            text.x = 225;
            text.y = scrollView.getInnerContainerSize().height-75*(i+1);
            // console.log(text.y)
            scrollView.addChild(text);
        }

        var arr1 = [
                    '1.对啦开始的撒旦放声大哭佛递发答',
                    '2.大东山街道goad地方立刻就收到了开发是看了打飞机撒旦看',
                    '3.到水电费立刻登陆来的富士岛科技打飞机卡萨丁三等奖点击'
                    ];
        
        // setDimensions(w,h)
        for(var i=0;i<arr1.length;i++){
            if(arr1[i].length > 19){
                hNum = 2;
            }else{
                hNum = 1;
            }
            var text = new cc.LabelTTF(arr1[i],"Microsoft YaHei",24,cc.size(440,30 * hNum),cc.TEXT_ALIGNMENT_LEFT);
            text.fillStyle = new cc.color(1,1,1);
            // text.x = 320;
            text.x = 225;
            text.y = scrollView.getInnerContainerSize().height-75*(i+1) - 270;
            // console.log(text.y)
            scrollView.addChild(text);
        }

        var companyText = "xx市xxx网络科技有限公司"
        var companyTextSpr = new cc.LabelTTF(companyText,"Microsoft YaHei",24,cc.size(440,30 * 1),cc.TEXT_ALIGNMENT_LEFT);
        companyTextSpr.fillStyle = new cc.color(1,1,1);
        // text.x = 320;
        companyTextSpr.x = 225;
        companyTextSpr.y = scrollView.getInnerContainerSize().height - 610;
        // console.log(text.y)
        scrollView.addChild(companyTextSpr);

        var arr2 = [
                    '1.对啦开始的撒旦放声大哭佛递发答',
                    '2.大东山街道goad地方立刻就收到了开发是看了打飞机撒旦看'
                    ];
        
        // setDimensions(w,h)
        for(var i=0;i<arr2.length;i++){
            if(arr2[i].length > 19){
                hNum = 2;
            }else{
                hNum = 1;
            }
            var text = new cc.LabelTTF(arr2[i],"Microsoft YaHei",24,cc.size(440,30 * hNum),cc.TEXT_ALIGNMENT_LEFT);
            text.fillStyle = new cc.color(1,1,1);
            // text.x = 320;
            text.x = 225;
            text.y = scrollView.getInnerContainerSize().height-75*(i+1) - 630;
            // console.log(text.y)
            scrollView.addChild(text);
        }
    },
    clsoeBtnCall:function(){
        this.n.adddialog = false;
        this.n.removeChild(this.n.layer_1);
    }
});

var factoryLayer1 = cc.Layer.extend({
    ctor:function(val1, val2){
        this._super(val1, val2);

        var test1 = new cc.Sprite(res.test);
        test1.x = 0;
        test1.y = 0;
        this.addChild(test1);

        var strTemp = "1.游戏达到600分即可获得抽奖机会,即可参";

        var text = new cc.LabelTTF(strTemp,"Microsoft YaHei",20,cc.TEXT_ALIGNMENT_LEFT);
        text.fillStyle = new cc.color(1,1,1);
        text.x = 100;
        text.y = 0;
        this.addChild(text);

        var text1 = new cc.LabelTTF(val2,"Microsoft YaHei",36,cc.TEXT_ALIGNMENT_LEFT);
        text1.fillStyle = new cc.color(1,1,1);
        text1.x = 200;
        text1.y = 0;
        this.addChild(text1);
    }
});