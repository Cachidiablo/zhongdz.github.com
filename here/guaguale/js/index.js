var App = {
    addEvent : function(_dom, _fun){
        $(_dom).on("click",function(){
            _fun();
        });
    },
    recordFunc : function(){
        $('.recordPage').removeClass('hide');
        $('.recordPage').addClass('animated bounceIn');
    },
    startFunc : function(){
        $('.handTip').removeClass('hide');
        setTimeout(function(){
            $('.handTip').addClass('hide');

            $('.canTouch').addClass('hide');
        }, 1500);

        App.startData();

        $('.start').addClass('hide');
    },
    startData : function(){
        // 开始游戏按钮
        var dt = {
            awardInfoId : 1,
            code : '20',
            msg : 'aaa',
            prizeCode : '0',
            prizeName : 'zzz'
        }
        // $.ajax({
        //     url : system.startGameUrl,
        //     data : {
        //         awardId : system.awardId,
        //         gameId : system.gameId,
        //         custNbr : system.custNbr,
        //         deviceId : system.deviceId
        //     },
        //     type : 'POST',
        //     dataType : 'json',
        //     async : false,
        //     cache : false,
        //     success : function(dt) {
                if (dt != null && dt != undefined) {
                    // 判断消耗值是否足够
                    var imgSrc = '';
                    if(parseInt(dt.code) == 20){//操作成功
                        if (parseInt(dt.prizeCode) == 1) {
                            imgSrc = './images/p-1.png';
                        }else if (parseInt(dt.prizeCode) == 2) {
                            imgSrc = './images/p-1.png';
                        }else if (parseInt(dt.prizeCode) == 3) {
                            imgSrc = './images/p-1.png';
                        }
                        if(parseInt(dt.prizeCode) > 0){
                            _awardInfoId = dt.awardInfoId;
                        }

                        if (parseInt(dt.prizeCode) == 0) {
                            imgSrc = './images/p-2.png';
                        }

                        $('.card img').attr({'src' : imgSrc})
                    }else{//其他提示
                        // $('.tipPage').removeClass('hide');
                        // $('.tipPage').addClass('fadeIn animated');
                        // $('.tipTxt').html(dt.msg);

                        // this.addEvent('.tipPage', function(){
                        //     $('.tipPage').addClass('hide');
                        //     $('.tipPage').removeClass('animated fadeIn');

                        //     $('.tipTxt').html('');
                        // });

                        App.commonTip(dt.msg);
                    }
                }
        //     }
        // });
    },
    commonTip : function(_txt, _func){
        $('.tipPage').removeClass('hide');
        $('.tipPage').addClass('fadeIn animated');
        $('.tipTxt').html(_txt);

        this.addEvent('.tipPage', function(){
            $('.tipPage').addClass('hide');
            $('.tipPage').removeClass('animated fadeIn');

            $('.tipTxt').html('');

            if(_func != null && typeof(_func) == 'function'){
                _func();
            }
        });
    },
    ruleBtnFunc : function(){
        $('.rulePage').removeClass('hide');
        $('.rulePage').addClass('animated bounceInDown');
    },
    stopScrolling : function( e ) {
        e.preventDefault();
    },
    stopBodyMove : function(){
        document.addEventListener( 'touchmove' , this.stopScrolling , false);
    },
    prizeData : function(page){
        // var dt = {
        //     code : 28,
        //     totalPage : 10,
        //     currPagenNum : 1,
        //     msg : '这里是一段提示',
        //     data : [
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 1},
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 0},
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 0},
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 0},
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 0},
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 0},
        //         {'score' : 99, 'winningState' : '未中奖', 'guessDate' : '21/11', 'state' : 0}
        //     ]
        // }
        $.ajax({
            url : system.prizeDataUrl,
            data : 'currPagenNum='+page,
            type : 'POST',
            dataType : 'json',
            async : false, 
            success : function(dt) {
                if(dt != null && dt != undefined){
                    if(parseInt(dt.code) == 20){
                        var _html = '';
                        $(".lotteryRecList").empty();
                        for(var i = 0;i < dt.data.length;i++){
                            _html+= '<li>',
                            _html+=     '<span class="row1 color-5a commonRow">'+dt.data[i].score+'</span>';
                            if(parseInt(dt.data[i].state) == 1){
                                _html+=  '<span class="row2 color-red commonRow">'+dt.data[i].winningState+'</span>';
                            }else{
                                _html+=  '<span class="row2 color-9b commonRow">'+dt.data[i].winningState+'</span>';
                            }

                            _html+=  '<span class="row3 color-5a commonRow">'+dt.data[i].guessDate+'</span>';
                            _html+= '</li>';
                        }

                        $('.lotteryRecList').html(_html);

                        if(parseInt(dt.totalPage) > 1){
                            $(".paging span").text(dt.currPagenNum+"/"+dt.totalPage);
                            if(parseInt(dt.totalPage) == parseInt(dt.currPagenNum)){
                                document.getElementById("nextpage").href="javascript:fenYe("+dt.totalPage+");"
                            }else{
                                document.getElementById("nextpage").href="javascript:fenYe("+(page+1)+");"
                            }
                            if(parseInt(dt.currPagenNum)>1){ 
                                document.getElementById("prepage").href="javascript:fenYe("+(page-1)+");"  
                            }
                        }  
                        
                        if(parseInt(dt.totalPage) == 1){ 
                            $(".paging span").text("1/1");
                        } 
                        
                        if(parseInt(dt.totalPage) == 0){  
                            $(".paging span").text("0/0"); 
                        }
                    }else{//其他提示
                        $('.tipPage').removeClass('hide');
                        $('.tipPage').addClass('fadeIn animated');
                        $('.tipTxt').html(dt.msg);

                        this.addEvent('.tipPage', function(){
                            $('.tipPage').addClass('hide');
                            $('.tipPage').removeClass('animated fadeIn');

                            $('.tipTxt').html('');
                        });
                    }
                }
            },
            error : function(res) {

            }
        }); 
    },
    prizeEnd : function(){
        $('.prizePage').removeClass('hide');
        $('.prizePage').addClass('animated lightSpeedIn');
    },
    getInfoFunc : function(){
        $('.prizePage').addClass('hide');
        $('.prizePage').removeClass('animated lightSpeedIn');

        $('.infoPage').removeClass('hide');
        $('.infoPage').addClass('animated rotateIn');
    },
    sendData : function(){
        var _name = $('.name').val();
        var _phone = $('.phone').val();
        var dt = {
            code : 1
        }
        // $.ajax({
        //     url : system.sendDataUrl,
        //     data : {
        //         name : _name,
        //         phone :　_phone,
        //         awardInfoId : _awardInfoId
        //     },
        //     type : 'POST',
        //     dataType : 'json',
        //     async : false,
        //     error : function(res) {

        //     },
        //     success : function(dt) {
                if (dt.code > 0) {
                    $('.infoPage').addClass('hide');
                    $('.infoPage').removeClass('animated rotateIn');

                    App.commonTip('提交成功！', function(){
                        window.location.reload();
                    });
                } else {

                }
        //     }
        // });
    },
    verify : function(){
        if ($("input[name='phone']").val() == "" || $("input[name='name']").val() == "") {
            App.commonTip('请输入姓名和手机号');
            return false;
        }

        var flagName = false;
        var flagphone = false;
        var name = $("input[name='name']").val();
        var reg = /^[\u4e00-\u9fa5]{2,4}$/;
        var phone = $("input[name='phone']").val();
        var re = /^1[3|4|5|7|8]\d{9}$/;

        if (!phone == "" && !name == "") {
            if (!re.test(phone)) {
                App.commonTip('手机号码不正确');
                $("input[name='phone']").val("");
                return false;
            }else{
                flagName = true;
            }
            if (!reg.test(name)) {
                App.commonTip('姓名格式不正确');
                $("input[name='name']").val("");
                return false;
            }else{
                flagphone = true;
            }
        }

        if(flagName && flagphone){
            App.sendData();
        }
    },
    initCard : function(){
        //刮刮卡配置
        LuckyCard.case({
            ratio: 0.8,//剩余面积
            radius : 30,//涂刮圆的直径
            coverImg : './images/guaTop.png'//表层图片,默认为灰色
        }, function() {
            App.prizeEnd();
            this.clearCover();
        });
    },
    init : function(){
        this.stopBodyMove();
        
        FastClick.attach(document.body);

        App.initCard();

        //刮奖记录
        this.addEvent('.recordBtn', this.recordFunc);
        this.prizeData(1);
        this.addEvent('.recordPage', function(){
            $('.recordPage').addClass('hide');
            $('.recordPage').removeClass('animated bounceIn');
        });

        //开始刮奖
        this.addEvent('.start', this.startFunc);

        //活动规则
        this.addEvent('.ruleBtn', this.ruleBtnFunc);
        this.addEvent('.rulePage', function(){
            $('.rulePage').addClass('hide');
            $('.rulePage').removeClass('animated bounceInDown');            
        });

        //填写信息
        this.addEvent('.getInfo', this.getInfoFunc);

        //发送信息
        this.addEvent('.send', this.verify);
    }
}

App.init();