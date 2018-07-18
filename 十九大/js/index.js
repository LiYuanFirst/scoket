var socket;
var groups = [{
			name:'组一',
			userId:'001',
			sort:1,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组二',
			userId:'002',
			sort:2,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组三',
			userId:'003',
			sort:3,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组四',
			userId:'004',
			sort:4,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组五',
			userId:'005',
			sort:5,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组六',
			userId:'006',
			sort:6,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组七',
			userId:'007',
			sort:7,
			score1:0,
			score2:0,
			score3:0
		},{
			name:'组八',
			userId:'008',
			sort:8,
			score1:0,
			score2:10,
			score3:0
		}];
var scoreList = [{
				score:10,
				actived:true
			},{
				score:10,
				actived:false
			},{
				score:10,
				actived:false
			},{
				score:10,
				actived:false
			},{
				score:20,
				actived:false
			},{
				score:20,
				actived:false
			},{
				score:20,
				actived:false
			},{
				score:20,
				actived:false
			},{
				score:40,
				actived:false
			},{
				score:40,
				actived:false
			},{
				score:40,
				actived:false
			},{
				score:40,
				actived:false
			}];
var typeList1 = [
	{
		id:'001',
		type:'01',
		question:'十九大报告中提出，中国秉持（ ）的全球治理观，倡导国际关系民主化，坚持国家不分大小、强弱、贫富一律平等',
		options:['A、亲诚惠容理念 ','B、共商共建共享  ','C、正确义利观'],
		key:[1]
	},{
		id:'002',
		type:'01',
		question:'《党章》规定，党员的党龄，从( )之日算起。',
		options:['A.递交入党申请书','B.递交入党志愿书 ','C.支部大会通过其为预备党员','D.预备期满转为正式党员'],
		key:[3]
	},{
		id:'003',
		type:'01',
		question:'十九大报告指出，建设______是中华民族伟大复兴的基础工程',
		options:['A.经济强国 ','B.政治强国  ',' C.教育强国 ','D.文化强国'],
		key:[2]
	},{
		id:'004',
		type:'01',
		question:'十九大报告指出，我国经济已由______阶段转向______阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。',
		options:['A.高速增长 高水平发展 ','B.高速发展 高水平发展','C.高速增长 高质量发展','D.高速发展 高质量发展'],
		key:[2]
	},{
		id:'005',
		type:'02',
		question:'十九大报告指出，科学立法、严格执法、公正司法、全民守法深入推进，______建设相互促进，中国特色社会主义法治体系日益完善，全社会法治观念明显增强。',
		options:['A.法治生活','B.法治国家 ','C.法治政府','D.法治社会'],
		key:[1,2,3]
	},{
		id:'006',
		type:'02',
		question:'十九大报告指出，出台中央八项规定，严厉整治_____，坚决反对特权。',
		options:['A.形式主义','B.官僚主义  ','C.享乐主义','D.奢靡之风','E.个人主义'],
		key:[0,1,2,3]
	},{
		id:'007',
		question:'十九大报告指出，这个新时代，是____。',
		options:['A.承前启后、继往开来、在新的历史条件下继续夺取中国特色社会主义伟大胜利的时代 ',
			'B.决胜全面建成小康社会、进而全面建设社会主义现代化强国的时代',
			'C.全国各族人民团结奋斗、不断创造美好生活、逐步实现全体人民共同富裕的时代',
			'D.全体中华儿女勠力同心、奋力实现中华民族伟大复兴中国梦的时代',
			'E.我国日益走近世界舞台中央、不断为人类作出更大贡献的时代'],
		key:[0,1,2,3,4]
	}
];
var typeList3 = [
	{
		id:'001',
		type:'01',
		question:'《党章》规定，党员如果没有正当理由，连续( )不参加党的组织生活，或不交纳党费，或不做党所分配的工作，就被认为是自行脱党。',
		options:['A.3个月','B.6个月','C.12个月','D.24个月'],
		key:[1],
		explain:'《党章》第一章 第九条规定，党员如果没有正当理由，连续6个月不参加党的组织生活，或不交纳党费，或不做党所分配的工作，就被认为是自行脱党。'
	},{
		id:'002',
		type:'01',
		question:'新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是（ ）',
		options:['A、实现社会主义现代化和中华民族伟大复兴 ','B、实现全面建成小康社会  ','C、实现中国梦'],
		key:[0],
		explain:'第三章节，第三段中指出，新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是实现社会主义现代化和中华民族伟大复兴，'
	},{
		id:'003',
		type:'01',
		question:'党的十九大报告提出了十四条坚持，它们构成新时代坚持和发展中国特色社会主义的（ ）',
		options:['A、基本方略 ','B、基本理论 ','C、基本路线'],
		key:[0],
		explain:'第三章节，最后一段中提到，十四条坚持构成新时代坚持和发展中国特色社会主义的基本方略。'
	},{
		id:'004',
		type:'01',
		question:'“三会一课”制度的内容是( )。',
		options:['A.支部党员大会，党支部委员会，党小组会，党课 ','B.支部党员大会，全体人员会，领导班子会，党课','C.民主生活会，党支部委员会，党小组会，党课','D.支部党员大会，党支部委员会，组织生活会，党课'],
		key:[0],
		explain:'《关于新形势下党内政治生活的若干准则》提出“坚持‘三会一课’制度。党员必须参加党员大会、党小组会和上党课，党支部要定期召开支部委员会会议。”'
	},{
		id:'005',
		type:'02',
		question:'实施乡村振兴战略。______问题是关系国计民生的根本性问题，必须始终把解决好“三农”问题作为全党工作重中之重。',
		options:['A.农业','B.农村 ','C.农民',' D.农田'],
		key:[0,1,2],
		explain:'第五章节，第五段中指出，（三）实施乡村振兴战略。农业农村农民问题是关系国计民生的根本性问题，必须始终把解决好“三农”问题作为全党工作重中之重。'
	},{
		id:'006',
		type:'02',
		question:'全党同志一定要永远与人民__________永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。',
		options:['A、同呼吸','B.共命运','C.手牵手','D.心连心'],
		key:[0,1,3],
		explain:'序言，第三段中指出，全党同志一定要永远与人民同呼吸、共命运、心连心，永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。'
	},{
		id:'007',
		type:'02',
		question:'_____和_____，是中国共产党人的精神支柱和政治灵魂，也是保持党的团结统一的思想基础。',
		options:['A.共产主义远大理想',
			'B.中国特色社会主义共同理想',
			'C.新时代中国特色社会主义共同理想',
			'D.共产主义崇高理想'],
		key:[0,1],
		explain:'第十三章节，第五段中指出，共产主义远大理想和中国特色社会主义共同理想，是中国共产党人的精神支柱和政治灵魂，也是保持党的团结统一的思想基础。'
	},{
		id:'008',
		type:'02',
		question:'加强社会保障体系建设。坚持房子是用来住的、不是用来炒的定位，加快建立______的住房制度，让全体人民住有所居。',
		options:['A.多主体供给 ',' B.多渠道保障 ','C.租购并举 ','D.多部门监管'],
		key:[0,1,2],
		explain:'第八章节，第五段中指出，（三）加强社会保障体系建设。坚持房子是用来住的、不是用来炒的定位，加快建立多主体供给、多渠道保障、租购并举的住房制度，让全体人民住有所居。'
	},{
		id:'009',
		type:'03',
		question:'五年来，我们统筹推进“五位一体”总体布局、协调推进“四个全面”战略布局，“十二五”规划胜利完成，“十三五”规划顺利实施，党和国家事业全面开创新局面。请说出五位一体、四个全面',
		key:['“五位一体”：统筹推进经济建设、政治建设、文化建设、社会建设、生态文明建设“四个全面”：坚持全面建成小康社会、全面深化改革、全面依法治国、全面从严治党']
	},{
		id:'010',
		type:'03',
		question:'十九大党章是中国共产党历史上第____次修改党章。2017年10月______日中国共产党第十九次全国代表大会通过关于《中国共产党章程（修正案）》的决议。',
		key:['17。24。'],
		explain:'12111'
	},{
		id:'011',
		type:'03',
		question:'中国共产党第十九次全国代表大会同意，把推动构建____，遵循共商共建共享原则，推进____建设等内容写入党章。',
		key:['人类命运共同体；“一带一路”'],
		explain:'《党章》总纲'
	},{
		id:'012',
		type:'03',
		question:'十九大报告强调，我们党面临的执政环境是复杂的，影响党的先进性、弱化党的纯洁性的因素也是复杂的，党内存在的____等突出问题尚未得到根本解决。',		
		key:['思想不纯、组织不纯、作风不纯。'],
		explain:'第十三章节，第二段中指出，全党要清醒认识到，我们党面临的执政环境是复杂的，影响党的先进性、弱化党的纯洁性的因素也是复杂的，党内存在的思想不纯、组织不纯、作风不纯等突出问题尚未得到根本解决。'
	}
];
var tim;
new Vue({
	el: '#app',
	data: {
		showpage:'page7',//显示页面
		progress2: 0,//圆环进度
		countTime:30,//倒计时
		itemcode:1,//当前题号
		ruleList:[{
			src:'',
			text:''
		}],//规则列表
		//当前题目信息
		typeList:{
			id:'',
			type:'',
			question:'',		
			key:[],
			explain:''
		},
		//连线题题目
		quesSpe:['','','',''],
		//连线选项
		answerSpe:[{
			text:'十六大主题',
			checked:false
		},{
			text:'十七大主题',
			checked:false
		},{
			text:'十八大主题',
			checked:false
		},{
			text:'十九大主题',
			checked:false
		}],
		quesSpeIndex:null,
		showSelect:false,//显示连线题选项
		optionchecked:[],//选中选项
		showWait:false,//显示mask
		showAnswer:true,//显示答案
		groupCheckedName:'',//选择组别
		groups:groups,//组别
		scoreList:scoreList,//风险题分值列表
		scoreChecked:null,
		letterList:['A','B','C','D','E','F'],//字母数字对应表
		//必答题显示答案
		answerList:[
			{
				name:'组一',
				checked:[0,1,2],
				score:0
			},{
				name:'组二',
				checked:[0,1,2],
				score:10
			},{
				name:'组三',
				checked:[0,1,2],
				score:0
			},{
				name:'组四',
				checked:[0,1,2],
				score:0
			},{
				name:'组五',
				checked:[0,1,2],
				score:0
			},{
				name:'组六',
				checked:[0,1,2],
				score:0
			},{
				name:'组七',
				checked:[0,1,2],
				score:0
			},{
				name:'组八',
				checked:[0,1,2],
				score:0
			}
		]
	},
	methods: {
		//选择组别
		checkedGroup(name){
			this.groupCheckedName = name
		},
		//选择风险题分数
		checkedScore(i){
			this.scoreChecked = i
		},
		//确认组别
		contentScoket(){
			let that = this;
			if(this.groupCheckedName==''){
        		this.$dialog.toast({
	                mes: '请选择组名',
	                timeout: 1000,
	                icon: 'error',
	                callback: () => {
	            	}
	            });
        	}else{
				localStorage.groupNum = this.groupCheckedName;
				console.log(this.groupCheckedName)
	        	that.$dialog.loading.open('等待连接...');
	        	socket = new WebSocket("ws://118.25.2.174/SNGF.WXSuite/websocket/echoAnnotation/"+ this.groupCheckedName);
	        	//打开事件
				socket.onopen = function() {
					that.$dialog.loading.close();
					//that.showpage = 'page2'
					that.showpage = 'page4'
					that.itemcode = 1
				};	
				//获得消息事件
				socket.onmessage = function(msg) {
					console.log(msg)
				}
			}
		},
		//必答题选择
		choseOption(type,index){
			console.log(type+'-'+index)
			
			if(type == '01'){
				let i = this.optionchecked.indexOf(index)
				if(i > -1){
					this.optionchecked.splice(i,1)
				}else{
					this.$set(this.optionchecked,0,index)
				}
			}else{
				let optionchecked = this.optionchecked;
				let i = this.optionchecked.indexOf(index)
				if(i > -1){
					this.optionchecked.splice(i,1)
				}else{
					this.optionchecked.push(index)
				}
			}
			console.log(this.optionchecked)
		},
		//提前提交
		submitAnswer(){
			if(this.optionchecked.length === 0){
				this.$dialog.toast({
	                mes: '您还未选择答案',
	                timeout: 1000,
	                icon: 'error',
	                callback: () => {
	                	
	            	}
	            });
			}else{
				this.uploadAnswer()
			}
		},
		//上传答案
		uploadAnswer(){
			this.$dialog.loading.open('提交中');
			var content = {
        			"msgType":"提交数据",
        			"answerType":"必答题",
        			"question":"",
        			"content":{
        				id:'001',
						index:0,
						checklist:[0,1,2],
						score:10,
						time:10000
        			}
        	};
			
			socket.send(JSON.stringify(content));
			
            setTimeout(() => {
                this.$dialog.loading.close();
                this.showWait= true;
                this.$dialog.notify({
                    mes: '提交成功，等待答题结果显示',
                    callback: () => {
                       this.showAnswer = true
                    }
                });
            }, 1000);
		},
		//开始下一题（必答题）
		next(){
			this.countTime = 30
			this.progress2 = 0
			let s= 0
			tim = setInterval(()=>{
				if(this.countTime <= 1) {
					clearInterval(tim)
					this.uploadAnswer()
					return
				}
				s++
				let pro = (s/30).toFixed(2)
				this.progress2 = pro
				setTimeout(() => {
					this.countTime --
				},1000)
			},1000)
		},
		//选择连线题主题内容
		choseTopic(i){
			if(this.quesSpe[i]==''){
				this.quesSpeIndex = i
				this.showSelect = true
			}else{
				let val = this.quesSpe[i]
				this.answerSpe.forEach((item,index) => {
					if(item.text === val){
						this.$set(this.answerSpe,index,{text:item.text,checked:false})
					}
				})
				this.$set(this.quesSpe,i,'')
			}
		},
		choseTopicTim(stu,index){
			if(stu){
				return
			}else{
				let i = this.quesSpeIndex
				let val = this.answerSpe[index].text
				this.$set(this.answerSpe,index,{text:val,checked:true})
				this.$set(this.quesSpe,i,val)
				this.showSelect = false
			}
		},
		submitQuesSpe(){
			console.log(this.quesSpe)
		}
	},
	mounted() {
		this.typeList = typeList3[this.itemcode]
		//this.next()
	}
})