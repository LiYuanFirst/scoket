var list1 = [{
    		id:'001',
    		text:'第一题',
    		disabled:false
    	},{
    		id:'002',
    		text:'第二题',
    		disabled:false
    	},{
    		id:'003',
    		text:'第三题',
    		disabled:false
    	},{
    		id:'004',
    		text:'第四题',
    		disabled:false
    	},{
    		id:'005',
    		text:'第五题',
    		disabled:false
    	},{
    		id:'006',
    		text:'第六题',
    		disabled:false
    	},{
    		id:'007',
    		text:'第七题',
    		disabled:false
    	},{
    		id:'008',
    		text:'第八题',
    		disabled:false
    	},{
    		id:'009',
    		text:'第九题',
    		disabled:false
    	},{
    		id:'010',
    		text:'第十题',
    		disabled:false
    	}];
var list2 = [{
    		id:'001',
    		text:'第一题',
    		disabled:false
    	},{
    		id:'002',
    		text:'第二题',
    		disabled:false
    	},{
    		id:'003',
    		text:'第三题',
    		disabled:false
    	},{
    		id:'004',
    		text:'第四题',
    		disabled:false
    	},{
    		id:'005',
    		text:'第五题',
    		disabled:false
    	},{
    		id:'006',
    		text:'第六题',
    		disabled:false
    	},{
    		id:'007',
    		text:'第七题',
    		disabled:false
    	},{
    		id:'008',
    		text:'第八题',
    		disabled:false
    	},{
    		id:'008',
    		text:'第九题',
    		disabled:false
    	},{
    		id:'008',
    		text:'第十题',
    		disabled:false
    	}];
var list3 = [{
    		id:'001',
    		text:'10-1',
    		disabled:false
    	},{
    		id:'002',
    		text:'10-2',
    		disabled:false
    	},{
    		id:'003',
    		text:'10-3',
    		disabled:false
    	},{
    		id:'004',
    		text:'10-4',
    		disabled:false
    	},{
    		id:'001',
    		text:'10-5',
    		disabled:false
    	},{
    		id:'002',
    		text:'10-6',
    		disabled:false
    	},{
    		id:'003',
    		text:'10-7',
    		disabled:false
    	},{
    		id:'004',
    		text:'10-8',
    		disabled:false
    	},{
    		id:'005',
    		text:'20-1',
    		disabled:false
    	},{
    		id:'006',
    		text:'20-2',
    		disabled:false
    	},{
    		id:'007',
    		text:'20-3',
    		disabled:false
    	},{
    		id:'008',
    		text:'20-4',
    		disabled:false
    	},{
    		id:'005',
    		text:'20-5',
    		disabled:false
    	},{
    		id:'006',
    		text:'20-6',
    		disabled:false
    	},{
    		id:'007',
    		text:'20-7',
    		disabled:false
    	},{
    		id:'008',
    		text:'20-8',
    		disabled:false
    	},{
    		id:'009',
    		text:'30-1',
    		disabled:false
    	},{
    		id:'010',
    		text:'30-2',
    		disabled:false
    	},{
    		id:'011',
    		text:'30-3',
    		disabled:false
    	},{
    		id:'012',
    		text:'30-4',
    		disabled:false
    	},{
    		id:'009',
    		text:'30-5',
    		disabled:false
    	},{
    		id:'010',
    		text:'30-6',
    		disabled:false
    	},{
    		id:'011',
    		text:'30-7',
    		disabled:false
    	},{
    		id:'012',
    		text:'30-8',
    		disabled:false
    	}];
var socket;
var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }            
    } 
}
new Vue({
    el: '#app',
    data: {
    	activeName: '1',
    	list1:list1,
    	list2:list2,
    	list3:list3,
    	loading:false,
    	tableData: [{
			name:'忠燃奋进队',
			userId:'001',
			sort:1,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'奉献联队',
			userId:'002',
			sort:2,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'崇高理想联盟',
			userId:'003',
			sort:3,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'青尽吴有队',
			userId:'004',
			sort:4,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'申临齐进',
			userId:'005',
			sort:5,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'梦圆平山队',
			userId:'006',
			sort:6,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'石油能源队',
			userId:'007',
			sort:7,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'电融风采队',
			userId:'008',
			sort:8,
			score1:0,
			score2:0,
			score3:0
		}]
     
    	
    },
    methods: {
        
        operation:function(type,desc,index){
//      	if(type=='必答题'){
//      		if(index<=14){
//      			this.list1[index].disabled=true
//      		}
//      	}
        	
        	var jsonToSub = {
        		"msgType":desc,
        		"answerType":type,
        		"question":index,
        		"content":{}
        	};
        	socket.send(JSON.stringify(jsonToSub));
        },
        postData:function(type,desc){
        	var tableData = this.tableData;
			var arr = [{
				type: type,
				totalScore: 0,
				group: '001'
			}, {
				type: type,
				totalScore: 0,
				group: '002'
			}, {
				type: type,
				totalScore: 0,
				group: '003'
			}, {
				type: type,
				totalScore: 0,
				group: '004'
			}, {
				type: type,
				totalScore: 0,
				group: '005'
			}, {
				type: type,
				totalScore: 0,
				group: '006'
			}, {
				type: type,
				totalScore: 0,
				group: '007'
			}, {
				type: type,
				totalScore: 0,
				group: '008'
			}];
			this.loading = true
			if(type == '抢答题'){
				for(var i = 0; i < tableData.length; i++) {
					arr[i].totalScore = tableData[i].score2;
				}
			}else{
				for(var i = 0; i < tableData.length; i++) {
					arr[i].totalScore = tableData[i].score3;
				}
			}
				
			var jsonToSub = {
				"msgType": desc,
				"answerType": type,
				"question": "",
				"content": arr
			};
			socket.send(JSON.stringify(jsonToSub));
        },
        clearData(){
        	var jsonToSub = {
				"msgType": '删除数据',
				"answerType": ''
			};
        	socket.send(JSON.stringify(jsonToSub))
        }
        
    },
    mounted:function(){
    	var that = this;
      	socket = new WebSocket("ws://118.25.2.174/SNGF.WXSuite/websocket/echoAnnotation/000");
    	//打开事件
		socket.onopen = function() {
			//alert("Socket 已打开");
			//socket.send("这是来自客户端的消息" + location.href + new Date());
		};
		//获得消息事件
		socket.onmessage = function(msg) {
			var data = JSON.parse(msg.data)
			console.log(data);
			if(data.msgType=='返回提交数据'&&data.content=='success'){
				that.loading = false
				that.$message({
		          message: '保存成功',
		          type: 'success'
		        });
			}
			if(data.answerType=="必答题"&&data.msgType=="显示排名"){
				var arr = data.content.sort(compare("group"))
				console.log(arr);
				for(var i = 0;i<arr.length;i++){
					that.tableData[i].score1 = arr[i].score1
					that.tableData[i].score2 = arr[i].score2
					that.tableData[i].score3 = arr[i].score3
				}
			}
			
		};
		//关闭事件
		socket.onclose = function() {
			alert("Socket已关闭");
		};
		//发生了错误事件
		socket.onerror = function() {
			alert("发生了错误");
		}
    },
    computed: {
    	scoreAll () {
    		var arr = this.tableData;
    		var scoreList = []
    		arr.forEach((value) => {
    			var score1 = value.score1==''?0: parseInt(value.score1),
    				score2 = value.score2==''?0: parseInt(value.score2),
    				score3 = value.score3==''?0: parseInt(value.score3);
    			if(score1==''){
    				score1=0
    			}
	            scoreList.push(score1 + score2 + score3)
	        })
    		return scoreList
    		
    	}
    },
    watch:{
    	tableData(){
    		var arr = this.tableData;
    		arr.forEach((value) => {
	            value.scoreAll = parseInt(value.score1) + parseInt(value.score2) + parseInt(value.score3)
	        })
    		console.log(arr)
    	}
    }
})