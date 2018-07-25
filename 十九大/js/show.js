var socket;
var groups = [{
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
			name:'崇高理想联盟队',
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
		}];
var scoreList = [{
				score:10,
				actived:false
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
				score:30,
				actived:false
			},{
				score:30,
				actived:false
			},{
				score:30,
				actived:false
			},{
				score:30,
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
		options:['A、递交入党申请书','B、递交入党志愿书 ','C、支部大会通过其为预备党员','D、预备期满转为正式党员'],
		key:[3]
	},{
		id:'003',
		type:'01',
		question:'十九大报告指出，建设______是中华民族伟大复兴的基础工程',
		options:['A、经济强国 ','B、政治强国  ',' C、教育强国 ','D、文化强国'],
		key:[2]
	},{
		id:'004',
		type:'01',
		question:'十九大报告指出，我国经济已由______阶段转向______阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。',
		options:['A、高速增长 高水平发展 ','B、高速发展 高水平发展','C、高速增长 高质量发展','D、高速发展 高质量发展'],
		key:[2]
	},{
		id:'005',
		type:'01',
		question:'十九大报告提出，新时代党的建设总要求之一是全面推进党的______。',
		options:[
			'A、思想建设、政治建设、组织建设、作风建设、反腐倡廉建设 ',
			'B、思想建设、政治建设、组织建设、作风建设、纪律建设',
			'C、政治建设、思想建设、组织建设、作风建设、纪律建设',
			'D、政治建设、思想建设、组织建设、作风建设、反腐倡廉建设'],
		key:[2]
	},{
		id:'006',
		type:'01',
		question:'______是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势。',
		options:[
			'A、中国共产党的领导',
			'B、以经济建设为中心',
			'C、人民利益为根本出发点',
			'D、“五位一体”总体布局'],
		key:[0]
	},{
		id:'007',
		type:'02',
		question:'十九大报告指出，科学立法、严格执法、公正司法、全民守法深入推进，______建设相互促进，中国特色社会主义法治体系日益完善，全社会法治观念明显增强。',
		options:['A、法治生活','B、法治国家 ','C、法治政府','D、法治社会'],
		key:[1,2,3]
	},{
		id:'008',
		type:'02',
		question:'十九大报告指出，出台中央八项规定，严厉整治_____，坚决反对特权。',
		options:['A、形式主义','B、官僚主义  ','C、享乐主义','D、奢靡之风','E、个人主义'],
		key:[0,1,2,3]
	},{
		id:'009',
		type:'02',
		question:'十九大报告指出，这个新时代，是____。',
		options:['A、承前启后、继往开来、在新的历史条件下继续夺取中国特色社会主义伟大胜利的时代 ',
			'B、决胜全面建成小康社会、进而全面建设社会主义现代化强国的时代',
			'C、全国各族人民团结奋斗、不断创造美好生活、逐步实现全体人民共同富裕的时代',
			'D、全体中华儿女勠力同心、奋力实现中华民族伟大复兴中国梦的时代',
			'E、我国日益走近世界舞台中央、不断为人类作出更大贡献的时代'],
		key:[0,1,2,3,4]
	}
];
var typeList3 = [
	{
		id:'001',
		type:'01',
		question:'《党章》规定，党员如果没有正当理由，连续( )不参加党的组织生活，或不交纳党费，或不做党所分配的工作，就被认为是自行脱党。',
		options:['A、3个月','B、6个月','C、12个月','D、24个月'],
		key:[1],
		explain:'《党章》第一章 第九条规定，党员如果没有正当理由，连续6个月不参加党的组织生活，或不交纳党费，或不做党所分配的工作，就被认为是自行脱党。'
	},{
		id:'002',
		type:'01',
		question:'新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是（ ）。',
		options:['A、实现社会主义现代化和中华民族伟大复兴 ','B、实现全面建成小康社会  ','C、实现中国梦'],
		key:[0],
		explain:'十九大报告中，第三章节，第三段中指出，新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是实现社会主义现代化和中华民族伟大复兴，'
	},{
		id:'003',
		type:'01',
		question:'党的十九大报告提出了十四条坚持，它们构成新时代坚持和发展中国特色社会主义的（ ）。',
		options:['A、基本方略 ','B、基本理论 ','C、基本路线'],
		key:[0],
		explain:'十九大报告中，第三章节，最后一段中提到，十四条坚持构成新时代坚持和发展中国特色社会主义的基本方略。'
	},{
		id:'004',
		type:'01',
		question:'“三会一课”制度的内容是( )。',
		options:['A、支部党员大会，党支部委员会，党小组会，党课 ','B、支部党员大会，全体人员会，领导班子会，党课','C、民主生活会，党支部委员会，党小组会，党课','D、支部党员大会，党支部委员会，组织生活会，党课'],
		key:[0],
		explain:'《关于新形势下党内政治生活的若干准则》提出“坚持‘三会一课’制度。党员必须参加党员大会、党小组会和上党课，党支部要定期召开支部委员会会议。”'
	},{
		id:'005',
		type:'02',
		question:'实施乡村振兴战略。______问题是关系国计民生的根本性问题，必须始终把解决好“三农”问题作为全党工作重中之重。',
		options:['A、农业','B、农村 ','C、农民',' D、农田'],
		key:[0,1,2],
		explain:'十九大报告中，第五章节，第五段中指出，（三）实施乡村振兴战略。农业农村农民问题是关系国计民生的根本性问题，必须始终把解决好“三农”问题作为全党工作重中之重。'
	},{
		id:'006',
		type:'02',
		question:'全党同志一定要永远与人民__________永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。',
		options:['A、同呼吸','B、共命运','C、手牵手','D、心连心'],
		key:[0,1,3],
		explain:'十九大报告中，序言，第三段中指出，全党同志一定要永远与人民同呼吸、共命运、心连心，永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。'
	},{
		id:'007',
		type:'02',
		question:'_____和_____，是中国共产党人的精神支柱和政治灵魂，也是保持党的团结统一的思想基础。',
		options:['A、共产主义远大理想',
			'B、中国特色社会主义共同理想',
			'C、新时代中国特色社会主义共同理想',
			'D、共产主义崇高理想'],
		key:[0,1],
		explain:'十九大报告中，第十三章节，第五段中指出，共产主义远大理想和中国特色社会主义共同理想，是中国共产党人的精神支柱和政治灵魂，也是保持党的团结统一的思想基础。'
	},{
		id:'008',
		type:'02',
		question:'加强社会保障体系建设。坚持房子是用来住的、不是用来炒的定位，加快建立______的住房制度，让全体人民住有所居。',
		options:['A、多主体供给 ',' B、多渠道保障 ','C、租购并举 ','D、多部门监管'],
		key:[0,1,2],
		explain:'十九大报告中，第八章节，第五段中指出，（三）加强社会保障体系建设。坚持房子是用来住的、不是用来炒的定位，加快建立多主体供给、多渠道保障、租购并举的住房制度，让全体人民住有所居。'
	},{
		id:'009',
		type:'03',
		question:'十九大报告中指出，五年来，我们统筹推进“五位一体”总体布局、协调推进“四个全面”战略布局，“十二五”规划胜利完成，“十三五”规划顺利实施，党和国家事业全面开创新局面。请说出五位一体、四个全面',
		key:['“五位一体”：统筹推进经济建设、政治建设、文化建设、社会建设、生态文明建设“四个全面”：坚持全面建成小康社会、全面深化改革、全面依法治国、全面从严治党']
	},{
		id:'010',
		type:'03',
		question:'十九大党章是中国共产党历史上第____次修改党章。2017年10月______日中国共产党第十九次全国代表大会通过关于《中国共产党章程（修正案）》的决议。',
		key:['17。24。'],
		explain:''
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
		explain:'十九大报告中，第十三章节，第二段中指出，全党要清醒认识到，我们党面临的执政环境是复杂的，影响党的先进性、弱化党的纯洁性的因素也是复杂的，党内存在的思想不纯、组织不纯、作风不纯等突出问题尚未得到根本解决。'
	}
];
var tim,tim2;
var countTime2 = 0;
new Vue({
	el: '#app',
	data: {
		showpage:'page1',//显示页面
		progress2: 0,//圆环进度
		countTime:30,//倒计时
		countTime2:0,//答题用时
		itemcode:0,//当前题号
		ruleNum:0,
		ruleList:[{
			src:'http://bucket-sngfr.oss-cn-shanghai.aliyuncs.com/active/20180628/font_02.png',
			text:'必答题共10题，每队每题均须回答，每题10分，答对加10分，答错不扣分。<br/>题型分为：单选题、多选题、匹配题<br/>题目显示由主持人控制，同时显示在大屏幕与参赛选手面前的设备上，参赛选手在主持人读题、宣布开始答题后，在面前的设备上进行选择，并按确认键提交，显示提交后答题成功。<br/>各组答题结果会显示在大屏上公示，主持人公布答案，按照答题对否情况增加、减少分数。'
		},{
			src:'http://bucket-sngfr.oss-cn-shanghai.aliyuncs.com/active/20180628/font_03.png',
			text:'抢答题共10题，<br/>每队按抢答器，最先抢到的队伍答题，每题10分，答对加10分，答错或不完整扣10分。<br/>题型分为：填空题、图片题、音频题、问答题。<br/>各参赛代表队需要在主持人宣布“开始”后再抢答，可在规定时间内商议和补充。提前抢答视为犯规，扣10分，不再增补试题<br/>抢答题答题时间，不得超过30秒，超时无效，扣10分。<br/>若选手答题错误，观众可参与抢答。'
		},{
			src:'http://bucket-sngfr.oss-cn-shanghai.aliyuncs.com/active/20180628/font_04.png',
			text:'风险题分为10分、20分、30分三类，每类各4题，各类题型随机出现。<br/>各参赛队按当前分数由低到高依次选题，题目一经选定便不得更改，已选过的风险题不再重选。<br/>参赛队内部可在相互讨论后，选派一名选手起立作答，队内其他选手可在规定时间内补充。<br/>风险题答题时间相同，讨论时间30秒，答题时间60秒，超时无效。'
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
		quesSpe:['十六大主题','十七大主题','十八大主题','十九大主题'],
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
		showAnswer:false,//显示答案
		groupCheckedName:'009',//选择组别
		groupCheckedNameText:'',
		groups:groups,//组别
		scoreList:scoreList,//风险题分值列表
		scoreChecked:null,
		letterList:['A','B','C','D','E','F'],//字母数字对应表
		//必答题显示答案
		answerList:[]
	},
	methods: {
		
		//确认组别
		contentScoket(){
			let that = this;
			
				localStorage.groupNum = this.groupCheckedName;
				console.log(this.groupCheckedName)
	        	that.$dialog.loading.open('等待连接...');
	        	socket = new WebSocket("ws://118.25.2.174/SNGF.WXSuite/websocket/echoAnnotation/"+ this.groupCheckedName);
	        	//打开事件
				socket.onopen = function() {
					that.$dialog.loading.close();
					that.showpage = 'page2'
				};	
				//获得消息事件
				socket.onmessage = function(msg) {
					console.log(msg)
					let data = JSON.parse(msg.data)
					console.log(data)
					let answerType = data.answerType
					let msgType = data.msgType
					if(msgType == '显示排名'){
						let groupsList = groups
						that.showpage = 'page5'
						setTimeout(() => {
							data.content.forEach((item,i) => {
								that.groups[i].score1 = item.score1
								that.groups[i].score2 = item.score2
								that.groups[i].score3 = item.score3
								that.groups[i].totalScore = item.totalScore
								that.groups[i].sort = item.sort + 1
							})
						},1000)
						
					}else if (msgType == '返回提交数据'){
						that.$dialog.loading.close();
		                that.showWait= true;
		                that.$dialog.notify({
		                    mes: '提交成功，等待答题结果显示',
		                    callback: () => {
		                       
		                    }
		                });
					}else{
						switch(answerType){
							case '必答题':
								switch (msgType){
									case '显示规则':
										that.ruleNum = '0'
										that.showpage = 'page3'
										break;
									case '显示题目':
										
										that.showWait = false
										that.showAnswer = false
										that.itemcode = data.question
										if(data.question>0){
											that.typeList = typeList1[that.itemcode-1]
										}
										that.showpage = 'page4'
										that.next()
										break;
									case '显示答案':
										clearInterval(tim)
										clearInterval(tim2)
										//that.answerList = data.content
										var s = parseInt(data.question)
										that.itemcode = s
										if(s>0){
											that.typeList = typeList1[s-1]
										}
										that.showpage = 'page4'
										let arr = []
										var groupName = that.groups
										console.log(groupName)
										data.content.forEach((item,index) => {
											if(item){
												item.name = groupName[index].name
												arr.push(item)
											}
										})
										console.log(arr)
										that.answerList = arr
										that.showWait = true
										that.showAnswer = true
										break;
									default:
										break;
								}
								break;	
							case '抢答题':
								switch (msgType){
									case '显示规则':
										that.showAnswer = false
										that.ruleNum = '1'
										that.showpage = 'page3'
										break;
									case '显示题目':
										that.showAnswer = false
										that.itemcode = data.question + 1
										that.showpage = 'page6'
										break;
									case '显示答案':
										that.showAnswer = true
										break;
								}
								break;	
							case '风险题':
								switch (msgType){
									case '显示规则':
										that.showAnswer = false
										that.ruleNum = '2'
										that.showpage = 'page3'
										break;
									case '选择分值':
										that.showAnswer = false
										that.scoreList = data.content
										that.showpage = 'page7'
										break;
									case '显示题目':
										that.showAnswer = false
										that.itemcode = data.question
										that.scoreChecked = data.question
										setTimeout(() => {
											that.typeList = typeList3[that.itemcode]
											that.showpage = 'page8'
										},1200)
										
										break;
									case '显示答案':
										that.showAnswer = true
										break;
								}
							default:
								break;
						}
					}
					
				}
				//关闭事件
				socket.onclose = function() {
					alert("Socket已关闭");
				};
				//发生了错误事件
				socket.onerror = function() {
					alert("发生了错误");
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
			clearInterval(tim)
			clearInterval(tim2)
			this.$dialog.loading.open('提交中');
			var request = {
        		"msgType":"提交数据",
        		"answerType":"必答题",
        		"question":this.itemcode,
        		"content":{
        			id:localStorage.groupNum,
					index:this.itemcode,
					checklist:this.optionchecked.sort(),
					score:10,
					time:countTime2
        		}
        	};
			if(this.itemcode === 0){
				let trueRes = ['十六大主题','十七大主题','十八大主题','十九大主题']
				if(this.quesSpe.toString() === trueRes.toString()){
					request.content.score = 10
				}else{
					request.content.score = 0
				}
			}else{
				if(this.typeList.key.sort().toString() === this.optionchecked.sort().toString()){
					request.content.score = 10
				}else{
					request.content.score = 0
				}
			}
			console.log(request)
			socket.send(JSON.stringify(request));
			
		},
		//开始下一题（必答题）
		next(){
			clearInterval(tim)
			clearInterval(tim2)
			this.countTime = 29
			this.optionchecked = []
			countTime2 = 0
			this.progress2 = 0
			let s= 0
			tim = setInterval(()=>{
				if(this.countTime <= 1) {
					clearInterval(tim)
					clearInterval(tim2)
					this.$dialog.toast({
	                    mes: '答题时间到',
	                    timeout: 1500,
	                    callback: () => {
	                    	//this.uploadAnswer()
	                    }
	                });
					return
				}
				s++
				let pro = (s/30).toFixed(2)
				this.progress2 = pro
				setTimeout(() => {
					this.countTime --
				},1000)
			},1000)
			tim2 = setInterval(() => {
				countTime2+=100
			},100)
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
			if(this.quesSpe.indexOf('') > -1){
				this.$dialog.toast({
		            mes: '答案尚未填写完全',
		            timeout: 1000,
		            icon: 'error',
		            callback: () => {
		            }
		        });
			}else{
				this.uploadAnswer()
			}
		}
	},
	mounted() {
		
		this.contentScoket()
	}
})