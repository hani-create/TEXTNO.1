function move (obj,name,target,fn) {
	clearInterval(obj.timer)
	obj.timer=setInterval(function () {
		if (name=="opacity") {
			cur=getComputedStyle(obj)[name]*100
		} else if(name=="width"||name=="height"||name=="font-size"||name=="border-width"||name=="border-radius" ){
			cur=parseInt(getComputedStyle(obj)[name])
		}else{
			cur=getComputedStyle(obj)[name]
		}
		
		let speed=(target-cur)/10
		
		speed=(speed>0) ? Math.ceil(speed):Math.floor(speed)
		
		if (cur==target) {
			clearInterval(obj.timer)
			if (fn) {fn()}
			   // 执行链式运动
		} else{
			if (name=="opacity") {
				obj.style[name]=(cur+speed)/100
			} else if(name=="width"||name=="height"||name=="font-size"||name=="border-width"||name=="border-radius"){
			obj.style[name]=cur+speed+'px'
		}else{
			obj.style[name]=target
			}
		}
	},10)
}